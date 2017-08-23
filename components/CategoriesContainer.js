import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';
import ItemContainer from './ItemContainer';
import InputSelector from './InputSelector';
import Data from '../core/data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text: {
    flex: 1,
    marginRight: 35,
    marginLeft: 15,
    fontSize: 20
  },
  selector: {
    height: 45
  }
});

export default class CategoriesContainer extends Component {

  renderProductSelector = (current, i) => {
    return (
        <View key={i} style={styles.row}>
            <Text style={styles.text}>{current.name}</Text>
            <InputSelector style={styles.selector} />
        </View>
    );
  };

  renderItem = (current, i) => {
    var products = current.products.map(this.renderProductSelector);

    return (
      <ItemContainer style={styles.content} key={current.id} title={current.category} background={current.backgroundColor1} background2={current.backgroundColor2} underlayColor={current.underlayColor} titleColor={current.titleColor} image={current.image}>
        {products}
      </ItemContainer>
    );
  };

  render() {
    var items = Data.map(this.renderItem);

    return (
      <ScrollView style={styles.container}>
        {items}
      </ScrollView>
    );
  }
}