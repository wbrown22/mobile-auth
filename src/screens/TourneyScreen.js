import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { HeaderBackButton } from 'react-navigation';

class TourneyScreen extends Component {
static navigationOptions = {
    gesturesEnabled: false,
    tabBarOptions: {
      style: {
        backgroundColor: '#8ac7db',
      }
    }
  }

  render() {
    return (
      <View style={ styles.viewStyle }>
        <Text style={ styles.textStyle }>This should show the First Screen</Text>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 30,
    color: 'blue',
    textAlign: 'center'
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0FFFF'
  }
}

export default TourneyScreen;
