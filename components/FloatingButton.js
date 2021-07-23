import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const FloatingButton = (props) => {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={props.onPress}>
      <Text style={{color: "white", fontWeight: "bold", textAlign: "center"}}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default FloatingButton

const styles = StyleSheet.create({
  floatingButton:{
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 35,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
  }
})
