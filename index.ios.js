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
        <DayItem day={day} daysUntil={i + 1} key={i} />
      )
    }
    return daysItem;
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          {this.days()}
        </View>
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
  }
});

AppRegistry.registerComponent('getDay', () => getDay);
