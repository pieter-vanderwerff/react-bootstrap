/** @jsx React.DOM */

var React = require('react');
var utils = require('./utils');
var BootstrapMixin = require('./BootstrapMixin');
var Button = require('./Button');

var ButtonGroup = React.createClass({
  mixins: [BootstrapMixin],

  getDefaultProps: function () {
    return {
      bsClass: 'button-toolbar'
    };
  },

  render: function () {
    var classes = this.getBsClassSet();

    return this.transferPropsTo(
      <div
        role="toolbar"
        className={utils.classSet(classes)}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ButtonGroup;