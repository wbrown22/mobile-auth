import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { auth } from '../config/fireConfig';
import Animation from 'lottie-react-native';
import anim from '../../assets/beerpongLoader.json';

class SplashScreen extends Component {
  static navigationOptions = {
    header: null,
    tabBarVisible: false
  }

componentDidMount() {
    this.animation.play();
    this.timerID = setInterval(
      () => {
        clearInterval(this.timerID);
       auth.onAuthStateChanged(user => {
           if (user != null) {
             this.props.navigation.navigate('first');
           } else {
             this.props.navigation.navigate('auth')
           }
         });
      },
      3000
    );
  }

  render() {
    return (
      <View style={ styles.viewStyle }>
        <Text style={ styles.textStyle }>Loading...</Text>
        <View>
        <Animation
            ref={ animation => {
              this.animation = animation;
            }}
            style={{
              width: 600,
              height: 500
            }}
            loop={ true }
            source={ anim }
        />
        </View>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8ac7db'
  }
};

export default SplashScreen;
