/** @jsx React.DOM */

var React = require('react');
var utils = require('./utils');
var BootstrapMixin = require('./BootstrapMixin');

var Label = React.createClass({
  mixins: [BootstrapMixin],

  getDefaultProps: function () {
    return {
      bsClass: 'label',
      bsStyle: 'default'
    };
  },

  render: function () {
    var classes = this.getBsClassSet();

    return this.transferPropsTo(
      <span className={utils.classSet(classes)}>
        {this.props.children}
      </span>
    );
  }
});

module.exports = Label;