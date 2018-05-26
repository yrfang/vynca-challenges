import React, { Component } from 'react';
import styles from './Header.scss';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
			menuToggleOpen: false
    };
  }

  toggleDropdownMenu = () => {
    this.setState((prevState) => {
      return {
        menuToggleOpen: !prevState.menuToggleOpen
      };
    });
  }

  render() {
    const {
      menuToggleOpen
    } = this.state;

    return (
      <header className={styles.header}>
        <div className={menuToggleOpen ? `${styles['toggle_container']} ${styles['active']}` : `${styles['toggle_container']}`}>
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">About</h4>
                <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white">Follow on Twitter</a></li>
                  <li><a href="#" className="text-white">Like on Facebook</a></li>
                  <li><a href="#" className="text-white">Email me</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand">
              <i className={`fa fa-camera ${styles['camera_icon']}`}></i>
              <strong>Album</strong>
            </a>
            <button className={styles.menu_btn} onClick={this.toggleDropdownMenu}>
              <i className={`fa fa-bars ${styles['menu_icon']}`}></i>
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
