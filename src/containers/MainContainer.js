import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Card from '../components/Card';
import styles from '../components/Main/Main.scss';

const n = "1";
const repeats = n.repeat(9).split("")

class Main extends Component {

    componentDidMount() {
      this.props.fetchData();
    }

    render() {
      const { cards } = this.props;

      if (cards.isLoading) {
        return (
        <div href="#" className={styles.main_container}>
          <div className="container">
            <div className="row">
              {
                cards.data.map((card, index) => {
                  return (
                    <div className="col-md-4" key={index}>
                      <Card url={null} />
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>);
      }

      return (
        <div href="#" className={styles.main_container}>
          <div className="container">
            <div className="row">
              {
                cards.data.map((card, index) => {
                  return (
                    <div className="col-md-4" key={index}>
                      <Card url={card.url} />
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      );
    }

};

function mapStateToProps(state) {
  return { cards: state.cards };
}

export default connect(mapStateToProps, actions)(Main);
