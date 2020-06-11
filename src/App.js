import React from 'react';
import Flashcards from "./components/Flashcards";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Flashcards</h1>
        <hr />
        <Flashcards />
      </div>
    );
  };
};

export default App;
