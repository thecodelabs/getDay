import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class getDay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Days of the week
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize:25
  }
});

AppRegistry.registerComponent('getDay', () => getDay);
