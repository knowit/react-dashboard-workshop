import React from 'react';

const Lectures = () => {
  const lectures: string[] = ["Mandag 08:00-09:00 It Grunnkurs", "Onsdag 08:00-09:00 DataGK", "Torsdag 10:00-11:00 WebTek"];
  return (
    <div className="widget">
      <h2>Mine forelesninger</h2>
      <ul>
        {lectures.map((lecture: string) => <li>{lecture}</li>)}
      </ul>
    </div>
  )
};

export default Lectures;
