import './mediawiki-ui-icon.css'
import './icon.css'
import React, { Component } from 'react'

class MenuIcon extends Component {
  render(){

    return (
      <div className="mw-ui-icon mw-ui-icon-element mw-ui-icon-mainmenu"
        onClick={this.props.onClick}></div>
    )
  }
}

export default MenuIcon
