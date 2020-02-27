import React from 'react';
import './App.css';
import Lectures from './Components/Lectures';
import Assignments from './Components/Assignments';
import YesNo from './Components/YesNo';

const App = () => {
  const name = 'Tale';

  return (
    <div>
      <h1 className="header">
        {name}s dashboard
      </h1>
      <div className="dashboardRow">
        <Lectures />
        <Assignments />
        <YesNo />
      </div>
    </div>
  );
};

export default App;
