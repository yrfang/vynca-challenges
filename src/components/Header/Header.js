import React, { Component } from 'react';
import styles from './Header.scss';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
			meneToggleOpen: false
    };
  }

  render() {
    return (
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <i className={`fa fa-camera ${styles['customizedIcon_color']}`}></i>
              <strong>Album</strong>
            </a>
          </div>
        </div>


      </header>
    );
  }
}

export default Header;
