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
  }

  toggleMenu(e) {
    e.preventDefault();
    this.setState(prevState => { 
      return { showMenu: !prevState.showMenu };
    });
  }

  render() {
    const { showMenu } = this.state;

    return <div className="shareButtonWrapper">
      <a href="#" onClick={this.toggleMenu}>Share</a>
      {showMenu ? <ShareMenu message={this.state.message} /> : null }
    </div>
  }
};

export default ShareButton;