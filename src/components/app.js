import React, { Component } from 'react';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Main from './Main';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <Main />
        <Footer />
      </div>
    );
  }
}
