import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import ButtonLink from "../ButtonLink/ButtonLink";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "50%",
    maxWidth: 300,
    minWidth: 200,
    borderRadius: "10px",
    justifyContent: "center",
    backgroundColor: "#f1f1f1",
    marginTop: theme.spacing(25),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.container} test-class="home">
      <ButtonLink action="Join" url="/join" disabled={false} />
      <ButtonLink action="Create" url="/create" disabled={false} />
    </Container>
  );
}
