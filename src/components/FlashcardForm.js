import React from "react";
import { Button, Form, } from "react-bootstrap";

class FlashcardForm extends React.Component {

  state = { front: "", back: "", showBack: false }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(this.state)
    this.setState({front: "", back: "",})
  };


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  render() {
    const { front, back } = this.state;
    return(
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Question: </Form.Label>
            <Form.Control 
            placeholder="Enter your question"
            value={front}
            name="front"
            onChange={this.handleChange}
            />

            <Form.Label>Answer: </Form.Label>
            <Form.Control 
            placeholder="Enter your answer"
            value={back}
            name="back"
            onChange={this.handleChange}
            />
            <Button type="submit">Submit</Button>
          </Form.Group>
        </Form>
      </>
    );
  };
};

export default FlashcardForm;