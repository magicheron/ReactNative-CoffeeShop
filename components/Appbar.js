import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
});

export default class Appbar extends Component {
  render() {
    return (
        <LinearGradient start={{x: 0.0, y: 1}} end={{x: 1, y: 0.0}} colors={['#f7ffce', '#e2e4b8']} style={styles.barContainer}>
          <View style={styles.container}>
            <View style={styles.row}>
              <Text style={styles.text}>Menu</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>2 Items</Text>
              <Text style={styles.text}>Done</Text>
            </View>
          </View>
        </LinearGradient>
    );
  }
}