import React, { Component } from 'react'
import { Text } from 'react-native'

export default class DayItem extends Component{
  render(){
    return(
        <Text>
          {this.props.day}
        </Text>
    )
  }
}
