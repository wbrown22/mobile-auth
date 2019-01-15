import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store';
import SplashScreen from './src/screens/SplashScreen';
import AuthScreen from './src/screens/AuthScreen';
import CreateScreen from './src/screens/CreateScreen';
import TourneyScreen from './src/screens/TourneyScreen';
import UpcomingScreen from './src/screens/UpcomingScreen';
import InProgressScreen from './src/screens/InProgressScreen';
import GameScreen from './src/screens/GameScreen';

export default class App extends React.Component {
  //sets up app navigation using react-navigation
  render() {
    const MainView = createStackNavigator({
      splash: { screen: SplashScreen },
      auth: { screen: AuthScreen },
      create: { screen: CreateScreen },
      main: {
        screen: createBottomTabNavigator({
          first: { screen: TourneyScreen },
          second: { screen: UpcomingScreen },
          third: { screen: InProgressScreen },
          fourth: { screen: GameScreen }
        })
      }
    }, {
      lazy: true,
      navigationOptions: {
        headerLeft: null,
        headerStyle: {
          backgroundColor: '#8ac7db'
        }
      }
    });

    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <MainView />
        </View>
      </Provider>
    );
  }
};
