import React from 'react';

const Widget = (props) => (
  <div className="widget">
    <h2>{props.title ? props.title : 'Tittel ikke definert'}</h2>
    {props.children}
  </div>
);

export default Widget;
