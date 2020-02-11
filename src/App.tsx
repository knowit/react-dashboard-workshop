import React from 'react';
import './App.css';
import Lectures from './Components/Lectures';
import Assignments from './Components/Assignments';
import YesNo from './Components/YesNo';

const App = () => {
  return (
    <div className="App">
      <h1>Josefines dashboard</h1>
      <Lectures />
      <Assignments />
      <YesNo />
    </div>
  );
}

export default App;
