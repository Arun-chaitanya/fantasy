import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const CSelect = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.isSelected ? styles.selected : styles.notSelected}>
    </TouchableOpacity>
  )
}

export default CSelect

const styles = StyleSheet.create({
  selected:{
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 6,
    borderColor: "green"
  },
  notSelected:{
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "darkgrey"
  },
  deckSelect:{
    marginRight: 0
  }
})
