import React, { Component } from 'react';
import moment from 'moment'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import DayItem from './src/DayItem';

export default class getDay extends Component {
  days(){
    const daysItem = [];

    for (var i = 0; i < 7; i++) {
      var day = moment().add(i, 'days').format('dddd');
      daysItem.push(
        <DayItem day={day} daysUntil={i} key={i} />
      )
    }
    return daysItem;
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Days of the week
        </Text>
        <Text>
          {this.days()}
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
