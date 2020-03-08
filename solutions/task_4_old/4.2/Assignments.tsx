import React from 'react';

import Widget from './Widget';

import { subjects } from '../data';

const Assignments = () => {
  // const [activeTab, setActiveTab] = React.useState(0);

  const updateActiveTab = (index: number) => {
    // Oppgave 5.1: Oppdater activeTab staten
  };

  const isSubjectApproved = () => {
    // Oppgave 5.5:
    // Implementer denne metoden som returnerer true eller
    // false avhengig om faget er bestått eller ikke
  };

  return (
    <Widget title="Mine øvinger">
      <div className="tabs">
        {
          subjects.map((subject: any, index: number) => (
            <button key={index}>
              {subject.name}
            </button>
          ))
        }
      </div>
      <div className="subjectStatus">
        {/* {
            isSubjectApproved() ? 'Du er ferdig!' : 'Du er ikke helt i mål enda...'
        } */}
      </div>
      <ul>
        {/*
            Oppgave 4.3: Map over øvningene til det første faget og print ut et
            listepunkt for hvert assignment for et fag
          */}
      </ul>
    </Widget>
  );
}

export default(Assignments);
