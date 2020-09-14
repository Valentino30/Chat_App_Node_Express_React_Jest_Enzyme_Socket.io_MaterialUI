import shortid from "shortid";
import PropTypes from "prop-types";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "50%",
    maxWidth: 300,
    minWidth: 250,
    justifyContent: "center",
    borderRadius: "10px",
    backgroundColor: "#f1f1f1",
    marginTop: theme.spacing(25),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  input: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function Auth({ history }) {
  const classes = useStyles();

  const action = history.location.pathname.substr(1);
  const defaultChatId = action === "create" ? shortid.generate() : "";

  const [chatId, setChatId] = useState(defaultChatId);
  const [userName, setUserName] = useState("");

  return (
    <Container className={classes.container} test-class="auth">
      {action === "join" ? (
        <TextField
          variant="outlined"
          label="type your chat id"
          className={classes.input}
          onChange={(e) => setChatId(e.target.value)}
        />
      ) : null}
      <TextField
        variant="outlined"
        label="type your user name"
        className={classes.input}
        onChange={(e) => setUserName(e.target.value)}
      />
      <ButtonLink
        action={action}
        disabled={userName && chatId ? false : true}
        url={`/chat?chatId=${chatId}&userName=${userName}`}
      />
    </Container>
  );
}

Auth.propTypes = {
  action: PropTypes.string.isRequired,
};
