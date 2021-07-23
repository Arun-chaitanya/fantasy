import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const ContestTabHeader = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View  style={styles.left}>
          <Text style={styles.back} onPress={()=>{props.navigation.pop()}}>Back</Text>
          <View style={styles.info}>
            <Text style={styles.title}>PMCO M1 D1</Text>
            <Text style={styles.gameName}>BGMI</Text>
          </View>
        </View>
          <Text style={styles.timeLeft}>2h 36m left</Text>
      </View>
      
    </View>
  )
}

export default ContestTabHeader

const styles = StyleSheet.create({
  container: {
    height:80,
    paddingTop: 20,
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: "black"
  },
  content:{
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
  },
  title:{
    color: "white",
    fontWeight: "bold"
  },
  timeLeft:{
    color: "white",
    fontWeight: "700",
    fontSize: 12
  },
  gameName:{
    color: "white",
  },
  info: {
    alignItems:"flex-start"
  },
  back:{
    color: "white",
    fontSize: 12,
    marginRight: 15
  },
  left: {
    flexDirection: "row",
    alignItems: "center"
  }
})
