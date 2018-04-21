import React, { Component } from 'react';
import Button from '../Button';
import styles from './Jumbotron.scss';

const Jumbotron = () => {

  return (
    <section className={`jumbotron text-center ${styles.cus_jumbotron}`}>
      <div className={`container ${styles.cus_container}`}>
        <h1 className="jumbotron-heading">Album example</h1>
        <p className="lead text-muted">
          Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
        </p>
        <p>
          <Button />
          <a href="#" className={`btn btn-secondary ${styles.cus_btn}`}>
            Secondary action
          </a>
        </p>
      </div>
    </section>
  );
}

export default Jumbotron;
