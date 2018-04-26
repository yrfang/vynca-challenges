import React, { Component } from 'react';
import styles from './Card.scss';

const Card = ({
  url
}) => {

  return (
    <div href="#" className={styles.card_container}>
      <div className={styles.card_img} style={{ backgroundImage: `url(${url})` }}>
        {
          (url === null) && (<i className={`fa fa-image ${styles['img_icon']}`}></i>)
        }
      </div>
      <div className={styles.card_body}>
        <p className={styles.card_text}>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small className="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  );
}

export default Card;
