import React, { Component } from 'react';
import './Welcome.css';

function Greeting(props) {
  return <h1 className="greeting">Hi, {props.name}.</h1>;
}

function Question(props) {
  return <h2 className="question">{props.question}</h2>;
}

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <Greeting name="Abby" />
        <Question question="When is the last time you cried?"/>
        <div className="text-box" contentEditable="true"></div>
        <div className="submit">Submit</div>
      </div>
    )
  }
}

export default Welcome;
