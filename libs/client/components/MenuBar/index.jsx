import React, { Component } from 'react'
import MenuIcon from './../MenuIcon'
import './styles.css'

class MenuBar extends Component {
  render(){

    return (
      <div className="header-container">
        <div className="header">
          <div>
            <MenuIcon onClick={this.props.onClick}/>
          </div>
          <form></form>
        </div>
      </div>
    )
  }
}

export default MenuBar
