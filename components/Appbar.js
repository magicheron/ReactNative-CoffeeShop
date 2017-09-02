import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ActionCreators } from '../actions/index';

const styles = StyleSheet.create({
  barContainer: {
    height: 90,
    backgroundColor: '#f7ffce'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 0,
    //backgroundColor: '#e2e4b8',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Roboto',
    color: '#af9a50',
    fontSize: 14,
  },
  buttonStyle: {
    borderRadius: 4,
  }
});

class Appbar extends Component {

  constructor(props) {
    super(props);
    this.done = this.done.bind(this);
  }

  countProducts(category) {
    if(!category) return 0;
    return category.products.reduce((previousValue, currentValue, index, vect) => {
      return previousValue + currentValue.quantity;
    }, 0);
  }

  done() {
    this.props.dispatch(ActionCreators.sendProducts(this.props.categories));
  }
  
  render() {

    let productCount = this.props.categories.length ? this.props.categories.reduce((previousValue, currentValue, index, vect) => {
      return previousValue + this.countProducts(currentValue);
    }, 0) : 0;

    return (
        <LinearGradient start={{x: 0.0, y: 1}} end={{x: 1, y: 0.0}} colors={['#f7ffce', '#e2e4b8']} style={styles.barContainer}>
          <View style={styles.container}>
            <View style={styles.row}>
              <Text style={styles.text}>Menu</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>{ productCount } Items</Text>
              <TouchableHighlight 
                        style={styles.buttonStyle} 
                        onPress={this.done.bind(this)}
                        underlayColor="rgba(255,255,255,0.8)">
                <Text style={styles.text}>Done</Text>
              </TouchableHighlight>
            </View>
          </View>
        </LinearGradient>
    );

  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoryProducts.categories,
  };
}

Appbar.props = {
  categories: PropTypes.array,
};

Appbar.defaultProps = {
  categories: [],
};

export default connect(mapStateToProps)(Appbar);