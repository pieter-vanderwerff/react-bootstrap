/** @jsx React.DOM */

var React = require('react');
var utils = require('./utils');
var BootstrapMixin = require('./BootstrapMixin');

var Well = React.createClass({
  mixins: [BootstrapMixin],

  getDefaultProps: function () {
    return {
      bsClass: 'well'
    };
  },

  render: function () {
    var classes = this.getBsClassSet();

    return this.transferPropsTo(
      <div className={utils.classSet(classes)}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Well;