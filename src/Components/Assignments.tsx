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
    // false avhengig om en har nok godkjente øvinger eller ikke
  };

  return (
    <Widget title="Mine øvinger">
      <div className="tabs">
        {
          subjects.map((subject: any, index: number) => (
            <button key={index}> {/* Her må det kanskje skje noe når man trykker på knappen? */}
              {subject.name}
            </button>
          ))
        }
      </div>
      <div className="subjectStatus">
        {/* Oppgave 5.5: Her viser man statusen på faget: */}
        {/* {
            isSubjectApproved() ? 'Du er ferdig!' : 'Du er ikke helt i mål enda...'
        } */}
      </div>
      <ul>
        { /* Oppgave 5.3: Her vises øvingene til et fag, men nå vises det kun for det første faget i lista.. */
          subjects[0].assignments.map((assignment: any, index: number) => (
            <li key={index}> {/* Oppgave 5.4: Her kan man si noe om et fag er godkjent eller ikke. */}
              {assignment.name}
            </li>
          ))
        }
      </ul>
    </Widget>
  );
}

export default (Assignments);
