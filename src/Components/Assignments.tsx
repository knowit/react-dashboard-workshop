import React from 'react';

import Widget from './Widget';

import { Assignment, Subject, subjects } from '../data';

const Assignments = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const updateActiveTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Widget title="Mine øvinger">
      <div>
        {
          subjects.map((subject: any, index: number) => (
            <button
              key={index}
              onClick={() => updateActiveTab(index)}
            >
              {subject.name}
            </button>
          ))
        }
      </div>
      <ul>
        {
          subjects[activeTab].assignments.map((assignment: any, index: number) => (
            <li key={index}>{assignment.name}</li>
          ))
        }
      </ul>
    </Widget>
  );
}

export default(Assignments);
