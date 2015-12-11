import React from 'react';
var Hello = require("react-proxy!./module1/hello.jsx");
var List = require("react-proxy!./module2/list.jsx");
var Text = require("react-proxy!./module3/text.jsx");


var Empty = React.createClass({
  render () {
    return <div></div>;
  }
});

var Main = React.createClass({

  render() {
      return (
        <div>
          <Hello/>
          <List color="yellow"/>
          <Text color="pink"/>
        </div>
      );
  }
});

export default Main;
