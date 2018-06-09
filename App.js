/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from "react-navigation";

import IntroSlider from "./src/components/IntroSlider/IntroSlider";
import Mobile from "./src/components/Register/Mobile";
import Password from "./src/components/Register/Password";
import Profile from "./src/components/Profile/Profile";
import Map from "./src/components/Map/Map";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
// export default class App extends Component<Props> {
// export default class App extends Component {
//   render() {
//     return (
//       <IntroSlider />
//       // <View style={styles.container}>
//       //   <Text style={styles.welcome}>
//       //     Welcome to React Native!
//       //   </Text>
//       //   <Text style={styles.instructions}>
//       //     To get started, edit App.js
//       //   </Text>
//       //   <Text style={styles.instructions}>
//       //     {instructions}
//       //   </Text>
//       // </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default App = StackNavigator ({
  IntroSlider: {
    screen: IntroSlider,
    navigationOptions: {
      header: null
    }
  },
  Mobile: {
    screen: Mobile
  },
  Password: {
    screen: Password
  },
  Profile: {
    screen: Profile
  },
  Map: {
    screen: Map
  }
});
