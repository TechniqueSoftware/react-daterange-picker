import PropTypes from 'prop-types';
import React from 'react';

import createReactClass from 'create-react-class';

import BemMixin from './utils/BemMixin';

const PaginationArrow = createReactClass({
  displayName: 'PaginationArrow',
  mixins: [BemMixin],

  propTypes: {
    disabled: PropTypes.bool,
    onTrigger: PropTypes.func,
    direction: PropTypes.oneOf(['next', 'previous']),
  },

  getDefaultProps() {
    return {
      disabled: false,
    };
  },

  render() {
    let {disabled, direction, onTrigger, ...props} = this.props;
    let modifiers = {[direction]: true};
    let states = {disabled};

    let elementOpts = {
      modifiers,
      states,
    };

    let iconOpts = {
      element: 'PaginationArrowIcon',
      modifiers,
      states,
    };

    return (
      <div className={this.cx(elementOpts)} {...props} onClick={onTrigger}>
        <div className={this.cx(iconOpts)} />
      </div>
    );
  },
});

export default PaginationArrow;
