'use strict';

import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => {
  return (
    <p>
      SHOW:
      <FilterLink filter="SHOW_ALL">ALL</FilterLink>
      <FilterLink filter="SHOW_COMPLETE">COMPELETE</FilterLink>
      <FilterLink filter="SHOW_ACTIVE">ACTIVE</FilterLink>
    </p>
  );
};

export default Footer;
