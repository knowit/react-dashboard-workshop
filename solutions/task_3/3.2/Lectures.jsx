import React from 'react';

import Widget from '../Components/Widget';

const Lectures = () => {
  const lectures = ["Mandag 08:00-09:00 It Grunnkurs", "Onsdag 08:00-09:00 DataGK", "Torsdag 10:00-11:00 WebTek"];

  return (
    <Widget
      title='Mine forelesninger'
    >
      <ul>
        {
          lectures.map(lecture =>
            <li key={lecture}>{lecture}</li>
          )
        }
      </ul>
    </Widget>
  );
};

export default Lectures;
