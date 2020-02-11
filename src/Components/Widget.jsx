import React from 'react';

const Widget = (props) => {
  return (
    <div className="widget">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}

export default(Widget);
