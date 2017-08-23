import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Appbar from './components/Appbar';
import ItemContainer from './components/ItemContainer';
import CategoriesContainer from './components/CategoriesContainer';

export default class CoffeeShop extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <CategoriesContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('CoffeeShop', () => CoffeeShop);
