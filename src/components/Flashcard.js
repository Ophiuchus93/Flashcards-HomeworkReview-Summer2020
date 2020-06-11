import React from "react";
import { Button, Card, } from "react-bootstrap";

const Flashcard = (props) => (
  <>
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        { props.showBack ? <div>{props.back}</div> : <div>{props.front}</div> }
      </Card.Body>
        <Button onClick={() => props.cardToggle(props.card)}>Show Answer</Button>
    </Card>
  </>
);

export default Flashcard;