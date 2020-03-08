import React from 'react';

const Lectures = () => {
  const itgk = "08:00-09:00 It Grunnkurs";
  const datagk = "08:00-09:00 Data Gk";
  const webtek = "08:00-09:00 WebTek";
  const datagk2  = "08:00-09:00 DataGk";
  return (
    <div className="widget">
      <h2>Mine forelesninger</h2>
      <ul>
        <li>{itgk}</li>
        <li>{datagk}</li>
        <li>{webtek}</li>
        <li>{datagk2}</li>
      </ul>
    </div>
  );
};

export default Lectures;
