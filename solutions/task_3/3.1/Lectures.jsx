import React from 'react';

import Widget from '../Components/Widget';

const Lectures = () => (
  <Widget>
    <ul>
      {
        lectures.map(lecture =>
          <li key={lecture}>{lecture}</li>
        )
      }
    </ul>
  </Widget>
);

export default Lectures;
