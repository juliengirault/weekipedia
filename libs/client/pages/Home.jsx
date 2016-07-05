import React, { Component } from 'react'
import IntermediateState from './../components/IntermediateState/index.jsx';
import Topic from './../components/Topic/index.jsx';

// Pages
export default React.createClass({
  getDefaultProps: function () {
    return {
      filter: ''
    };
  },
  getInitialState() {
    return {
      topics: []
    };
  },
  // You want to load subscriptions not only when the component update but also when it gets mounted.
  componentWillMount(){
    this.load();
  },
  load() {
    var self = this;
    this.props.api.getTrending( this.props.filter ).then( function ( data ) {
      var topics = data.map( function ( item ) {
        item.key = item.id;
        var obj = React.createElement(Topic, item);
         return obj;
      } );
      self.setState({ topics: topics });
    } );
  },
  render(){
    // show intermediate state if still loading, otherwise show list
    var children = this.state.topics.length ?
        (<div className="list-simple-group">{this.state.topics}</div>) :
        <IntermediateState></IntermediateState>

    return (
      <div>
        {children}
      </div>
    )
  }
})

