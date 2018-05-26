import React from 'react';
import { Scene, Router } from 'react-native-router-flux'
import { StyleSheet, Text, View } from 'react-native';
import Login from "./app/screens";

class App extends React.Component {
  render() {
    return (
      <Router>
          <Scene key="root">
              <Scene key="login" component={Login} title="Login"/>
          </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App