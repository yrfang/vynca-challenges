import React, { Component } from 'react';
import axios from 'axios';
import Card from '../Card';
import styles from './Main.scss';

const ROOT_URL = 'http://192.168.50.81:3000/data';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
			cards: []
    };
  }

  componentDidMount() {
    axios.get(ROOT_URL)
    .then((response) => {
      const cards = response.data.slice(1, 10);
      this.setState({ isLoading: false, cards: cards });
    });
  }

  render() {
    const {
      isLoading,
      cards
    } = this.state;

    if (isLoading) {
      return (<div>Loading...</div>);
    }

    return (
      <div href="#" className={styles.main_container}>
        <div className="container">
          <div className="row">
            {
              cards.map((card) => {
                return (
                  <div className="col-md-4" key={card.id}>
                    <Card
                      thumbnail={card.thumbnail}
                      lastModifyTime={card.lastModifyTime}
                      text={card.text}
                      id={card.id}
                    />
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
