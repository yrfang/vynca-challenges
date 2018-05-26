import React, { Component } from 'react';
import axios from 'axios';
import styles from './Card.scss';

const ROOT_URL = 'http://192.168.50.81:3000/data';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      editValue: this.props.text
    };
  }

  onClickEditButton = () => {
    this.setState({ isEdit: true });
  }

  onChangeEditInput = (event) => {
    console.log(event.target.value);
    
    this.setState({ editValue: event.target.value });
  }

  onClickPostButton = (id, editValue) => () => {
    axios(`${ROOT_URL}/${id}`, {
      method: "put",
      data: {
        text: editValue
      }
    })
    .then((response) => {
      this.setState({ isEdit: false, editValue: response.data.text });
    });
  }

  render() {
    const {
      lastModifyTime,
      thumbnail,
      id
    } = this.props;

    const {
      isEdit,
      editValue
    } = this.state;

    return (
      <div href="#" className={styles.card_container}>
        <div className={styles.card_img} style={{ backgroundImage: `url(${thumbnail})` }}>
        </div>
        <div className={styles.card_body}>
          {
            (isEdit) ?
            (<input
              value={editValue}
              onChange={this.onChangeEditInput}
            />) :
            (<div>
              {editValue}
            </div>)
          }
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.onClickPostButton(id, editValue)}>Post</button>
              <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.onClickEditButton}>Edit</button>
            </div>
            <small className="text-muted">{lastModifyTime}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
