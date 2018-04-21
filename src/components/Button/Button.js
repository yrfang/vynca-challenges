import React, { Component } from 'react';
import style from '../../../style/mixins.scss';

const Button = () => {

  return (
    <a href="#" className={`btn btn-primary ${style.btn_ui}`}>
      Main call to action
    </a>
  );
}

export default Button;
