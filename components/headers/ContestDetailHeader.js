import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const ContestDetailHeader = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <View  style={styles.left}>
          <Text style={styles.back} onPress={()=>{props.navigation.navigate("HomeTab")}}>Back</Text>
          <View style={styles.info}>
            <Text style={styles.title}>PMCO M1 D1</Text>
            <Text style={styles.gameName}>BGMI</Text>
          </View>
        </View>
        <Text style={styles.timeLeft}>2h 36m left</Text>
      </View>
      <View>
        <View style={styles.bottomContent}>
          <View style={styles.miniInfo}>
            <Text style={styles.label}>Prize Pool</Text>
            <Text style={styles.value}>10 Lakhs</Text>
          </View>
          <View style={styles.miniInfo}>
            <Text style={styles.label}>Entry Fees</Text>
            <Text style={styles.value}>10</Text>
          </View>
          <View style={styles.miniInfo}>
            <Text style={styles.label}>30 Winners</Text>
            <Text style={styles.value}>134543 spots</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ContestDetailHeader

const styles = StyleSheet.create({
  container: {
    // height:80,
    paddingTop: 30,
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: "black"
  },
  topContent:{
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingBottom:20
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
  },
  bottomContent:{
    // backgroundColor: "drakgrey",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingBottom:20
  },
  miniInfo:{
    width: "30%",
    alignItems: "center"
  },
  label:{
    color: "white",
    fontWeight: "bold"
  },
  value:{
    color: "white",
  },
})
