import io from "socket.io-client";
import PropTypes from "prop-types";
import queryString from "query-string";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer, toast } from "react-toastify";
import { Container, TextField } from "@material-ui/core";
import MessagesList from "../../components/MessagesList/MessagesList";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "#f1f1f1",
    backgroundColor: "#028193",
    marginTop: theme.spacing(3),
  },
  input: {
    width: "100%",
    top: theme.spacing(3),
    backgroundColor: "#FFFFFF",
    marginBottom: theme.spacing(1),
  },
  container: {
    width: "80%",
    minWidth: 300,
    maxWidth: 400,
    height: "90%",
    borderRadius: "10px",
    justifyContent: "center",
    backgroundColor: "#f1f1f1",
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

let socket;

export default function ChatRoom({ location }) {
  const classes = useStyles();

  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "localhost:4000";
  const { chatId, userName } = queryString.parse(location.search);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("join", { chatId, userName });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, chatId, userName]);

  useEffect(() => {
    const updateState = ({ user, users, messages }) => {
      setUser(user);
      setUsers(users);
      setMessages(messages);
    };

    socket.on("you have joined the chat", updateState);

    return () => {
      socket.off("you have joined the chat", updateState);
    };
  }, [user]);

  useEffect(() => {
    const updateUsers = ({ users, newUser }) => {
      setUsers(users);
      toast.success(`${newUser} has joined the chat 👋🏻`);
    };

    socket.on("a new user has joined the chat", updateUsers);

    return () => {
      socket.off("a new user has joined the chat", updateUsers);
    };
  }, [users]);

  useEffect(() => {
    const updateMessages = ({ messages }) => {
      setMessages(messages);
    };

    socket.on("a new message was sent in the chat", updateMessages);

    return () => {
      socket.off("a new message was sent in the chat", updateMessages);
    };
  }, [messages]);

  useEffect(() => {
    const leaveChat = ({ users, oldUser }) => {
      setUsers(users);
      toast.warning(`${oldUser} has left the chat 👋🏽`);
    };

    socket.on("a user has left the chat", leaveChat);

    return () => {
      socket.off("a user has left the chat", leaveChat);
    };
  }, [users]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("message", { message });
      setMessage("");
    }
  };

  return (
    <Container className={classes.container} test-class="ChatRoom">
      <ToastContainer position="top-center" />
      <MessagesList messages={messages} user={user} />
      <form onSubmit={sendMessage}>
        <TextField
          value={message}
          variant="outlined"
          className={classes.input}
          label="type your message here"
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </Container>
  );
}

ChatRoom.propTypes = {
  location: PropTypes.object.isRequired,
};
