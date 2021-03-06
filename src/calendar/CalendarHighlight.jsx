import PropTypes from 'prop-types';
import React from 'react';

import createReactClass from 'create-react-class';

import BemMixin from '../utils/BemMixin';
import PureRenderMixin from '../utils/PureRenderMixin';


const CalendarHighlight = createReactClass({
  displayName: 'CalendarHighlight',
  mixins: [BemMixin, PureRenderMixin],

  propTypes: {
    modifier: PropTypes.string,
  },

  render() {
    let {modifier} = this.props;
    let modifiers = {[modifier]: true};
    let states = {};

    return (
      <div className={this.cx({states, modifiers})} />
    );
  },
});

export default CalendarHighlight;
