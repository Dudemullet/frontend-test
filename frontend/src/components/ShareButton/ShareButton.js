import React, { Component } from 'react';
import { default as ShareMenu } from './SharePopupMenu';

class ShareButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: `I'm going to ${props.title} @ ${props.date}`,
      showMenu: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  toggleMenu(e) {
    e.preventDefault();
    this.setState(prevState => { 
      if(prevState.showMenu) {
        document.removeEventListener('mousedown', this.handleOutsideClick);
      } else {
        document.addEventListener('mousedown', this.handleOutsideClick);
      }
      return { showMenu: !prevState.showMenu };
    });
  }

  handleOutsideClick(e) {
    if(this.component.contains(e.target)) {
      return null;
    }
    this.toggleMenu(e);
  }

  render() {
    const { showMenu } = this.state;

    return <div ref={node => this.component = node} className="shareButtonWrapper">
      <a href="#" onClick={this.toggleMenu}>Share</a>
      {showMenu ? <ShareMenu message={this.state.message} /> : null }
    </div>
  }
};

export default ShareButton;