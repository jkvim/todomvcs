'use strict';

import Link from './Link';
import { connect } from 'react-redux';
import { setVisbleFilter } from '../actions';

const mapStateLinkToProps = (
  state,
  ownProps
) => {
  return {
    active: state.visibleFilter === ownProps.filter
  }
};

const mapDispatchLinkToProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch(setVisbleFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateLinkToProps,
  mapDispatchLinkToProps
)(Link);

export default FilterLink;
