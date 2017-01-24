import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

export default class DayItem extends Component{
  render(){
    return(
        <Text style={this.style()}>
          {this.props.day}
        </Text>
    )
  }
  style() {
    return{
      textAlign: "center",
      color: this.color(),
      fontSize: this.fontSize(),
      fontWeight: this.fontWeight(),
      // lineHeight: this.lineHeight()
    }
  }
  color(){
      var opacity = 1 / this.props.daysUntil
      return 'rgba(0, 0, 0, '+opacity+')';
  }
  fontSize(){
    return 80 / (this.props.daysUntil * 1);
  }
  fontWeight(){
    return (this.props.daysUntil * 100).toString();
  }
}
