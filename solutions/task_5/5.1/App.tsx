import React from 'react';
import './App.css';
import Lectures from './Components/Lectures';
import Assignments from './Components/Assignments';

const App = () => {
  const name = "Tale"
  return (
    <div>
      <h1 className="header">
        {name}s dashboard
      </h1>
      <div className="dashboardRow">
        <Lectures />
        <Assignments />
      </div>
    </div>
  )
};

export default App;
