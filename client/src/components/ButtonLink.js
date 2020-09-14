import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  disabledLink: {
    pointerEvents: "none",
    textDecoration: "none",
  },
  button: {
    width: "80%",
    color: "#f1f1f1",
    backgroundColor: "#494a5c",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function ButtonLink({ action, disabled, url }) {
  const classes = useStyles();

  return (
    <Link
      to={url}
      test-class="button-link"
      className={disabled ? classes.disabledLink : classes.link}
    >
      <Button className={classes.button} variant="contained" color="primary">
        {action} Chat
      </Button>
    </Link>
  );
}

ButtonLink.propTypes = {
  disabled: PropTypes.bool.isRequired,
  action: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
