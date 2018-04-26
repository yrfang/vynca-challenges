import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';

import MainContainer from './MainContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <MainContainer />
        <Footer />
      </div>
    );
  }
}
