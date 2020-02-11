import React from 'react';

import Widget from './Widget';

import { Assignment, Subject, subjects } from '../data';

const Assignments = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const updateActiveTab = (index: number) => {
    setActiveTab(index);
  };

  const isSubjectApproved = () => {
    const { assignments, mandatoryApprovals } = subjects[activeTab];
    const approvedAssignments = assignments.filter((assignment: any) => assignment.approved);

    return approvedAssignments.length >= mandatoryApprovals;
  };

  return (
    <Widget title="Mine øvinger">
      <div className="tabs">
        {
          subjects.map((subject: any, index: number) => (
            <button
              key={index}
              className={index === activeTab ? 'activeTab' : ''}
              onClick={() => updateActiveTab(index)}
            >
              {subject.name}
            </button>
          ))
        }
      </div>
      <div className="subjectStatus">
        {
          isSubjectApproved() ? 'Du er ferdig!' : 'Du er ikke helt i mål enda...'
        }
      </div>
      <ul>
        {
          subjects[activeTab].assignments.map((assignment: any, index: number) => (
            <li
              key={index}
              className={assignment.approved ? 'approvedAssignment' : ''}
            >
              {assignment.name}
            </li>
          ))
        }
      </ul>
    </Widget>
  );
}

export default(Assignments);
