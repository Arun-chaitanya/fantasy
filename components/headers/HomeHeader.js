import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const HomeHeader = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Fan Royale</Text>
      </View>
      
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  container: {
    height:80,
    paddingTop: 20,
    width: "100%",
    backgroundColor: "black"
  },
  content:{
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  title:{
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  }
})
