import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const PrimaryButton = (props) => {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={props.onPress}>
      <Text style={{color: "white"}}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  primaryButton:{
    width: "40%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 5
  }
})
