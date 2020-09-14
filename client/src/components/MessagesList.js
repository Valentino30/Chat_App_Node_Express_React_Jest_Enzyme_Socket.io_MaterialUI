import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  list: {
    height: 550,
    width: "100%",
    maxWidth: 400,
    paddingTop: 0,
    overflowY: "scroll",
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    margin: 5,
    width: "auto",
    borderRadius: 10,
    backgroundColor: "#f1f1f1",
  },
  myListItem: {
    margin: 5,
    width: "auto",
    borderRadius: 10,
    textAlign: "right",
    backgroundColor: "lightskyblue",
  },
  listItemText: {
    wordBreak: "break-word",
  },
}));

export default function MessagesList({ messages, user }) {
  const classes = useStyles();

  return (
    <List className={classes.list} test-class="messages-list">
      {messages.map((message) => (
        <ListItem
          button
          key={message.id}
          test-class="message"
          className={
            message.userId === user.id ? classes.myListItem : classes.listItem
          }
        >
          <ListItemAvatar>
            <Avatar>{message.userName[0]}</Avatar>
          </ListItemAvatar>
          <ListItemText
            className={classes.listItemText}
            primary={message.text}
            secondary={
              <React.Fragment>
                {new Date(message.timestamp).toLocaleTimeString()}
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}

MessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};
