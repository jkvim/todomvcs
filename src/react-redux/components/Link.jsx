'use strict';

import React from 'react';

const Link = ({
    children,
    onClick,
    active
}) => {
  const style = {
    marginLeft: '10px'
  };
  if (active) {
    return <span style={style}>{children}</span>
  }
  return (
    <a href="#"
       style={style}
       onClick={(e) => {
         e.preventDefault();
         onClick();
       }}>
      {children}
    </a>
  );
};

export default Link;
