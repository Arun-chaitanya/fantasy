import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const SecondaryButton = (props) => {
  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={props.onPress}>
      <Text style={{color: "black"}}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default SecondaryButton

const styles = StyleSheet.create({
  secondaryButton:{
    width: "40%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white",
  }
})
