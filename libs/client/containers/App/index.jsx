import React, { Component } from 'react'
import './styles.css'
import MenuBar from './../../components/MenuBar/index.jsx'

// Main component
class App extends Component {
  navigateToHome() {
    window.location.pathname = '/';
  }
  render(){
    return (
      <div className="container">
        <MenuBar key="menu" onClick={this.navigateToHome}></MenuBar>
        <h2 className="page-header">{this.props.title}</h2>
        <div className="row">
          { this.props.children }
        </div>
      </div>
    )
  }
}
export default App
