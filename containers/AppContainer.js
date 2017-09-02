import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

import {
  Animated,
  StyleSheet,
  View,
  NavigationExperimental
} from 'react-native';

import Appbar from '../components/Appbar';
import ItemContainer from '../components/ItemContainer';
import CategoriesContainer from '../components/CategoriesContainer';

class AppContainer extends Component {
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}
  
function mapStateToProps(state) {
    return {
        navigationState: state.navigationState
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);