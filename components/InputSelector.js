import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  selectorContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 45
  },
  text: {
    fontFamily: 'Roboto',
    color: '#af9a50',
    fontSize: 14,
    marginRight: 10,
    marginTop: 9,
    width: 20
  },
  buttonText: {
    fontFamily: 'Roboto',
    color: '#af9a50',
    fontSize: 24
  },
  buttonUpStyle: {
    width: 40,
    borderRadius: 4,
    height: 40,
    paddingTop: 4,
    paddingLeft: 13,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginLeft: 10,
  },
  buttonDownStyle: {
    width: 40,
    borderRadius: 4,
    height: 40,
    paddingTop: 4,
    paddingLeft: 18,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginLeft: 10,
  }
});

export default class InputSelector extends Component {

    constructor(props){
        super(props);

        this.state = {
            count       : 0
        };
        
        this.onPressUp = this.onPressUp.bind(this);
        this.onPressDown = this.onPressDown.bind(this);
    }

    onPressUp(e) {
      this.setState(previousState => {
        return { count: previousState.count + 1 };
      });
    }

    onPressDown(e) {
      this.setState(previousState => {
        return { count: Math.max(previousState.count - 1, 0) };
      });
    }

    
  render() {
    var count = this.state.count;

    return (
      <View style={styles.selectorContainer}>
        <Text style={styles.text}>{count}</Text>
        <TouchableHighlight 
                        style={styles.buttonDownStyle} 
                        onPress={this.onPressDown.bind(this)}
                        underlayColor="rgba(255,255,255,0.8)">
          <Text style={styles.buttonText}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight 
                        style={styles.buttonUpStyle} 
                        onPress={this.onPressUp.bind(this)}
                        underlayColor="rgba(255,255,255,0.8)">
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }
}