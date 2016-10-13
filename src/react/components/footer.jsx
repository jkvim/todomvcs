import React from 'react';

function Filter({ tag, setFilter, children }) {
  return <button onClick={() => setFilter(tag)}> {children} </button>;
}

Filter.propTypes = {
  tag: React.PropTypes.string,
  setFilter: React.PropTypes.func,
  children: React.PropTypes.element,
};

function ClearButton({ clear }) {
  return <button className="btn-clear" onClick={clear}>Clear</button>;
}

ClearButton.propTypes = {
  clear: React.PropTypes.func,
};

function Footer({ filter, setFilter, clear }) {
  return (
    <ul className="footer">
      <Filter filter={filter} tag={'SHOW_ALL'} setFilter={setFilter}> All </Filter>
      <Filter filter={filter} tag={'SHOW_ACTIVE'} setFilter={setFilter}> ACTIVE </Filter >
      <Filter filter={filter} tag={'SHOW_COMPLETE'} setFilter={setFilter}> COMPLETE </Filter >
      <ClearButton clear={clear} />
    </ul>
  );
}

Footer.propTypes = {
  filter: React.PropTypes.string,
  setFilter: React.PropTypes.func,
  clear: React.PropTypes.func,
};

export default Footer;
