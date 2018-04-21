import React, { Component } from 'react';
import Card from '../Card';
import styles from './Main.scss';

const n = 9;

const Main = () => {

  return (
    <div href="#" className={styles.main_container}>
      <div className="container">
        <div className="row">
          {
            [...Array(n)].map((card, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <Card />
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Main;
