import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import TeamResultCard from '../components/TeamResultCard'

const MatchResultScreen = (props) => {
  const arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
  return (
    <View style={styles.container}>
      <View style={styles.tableHeading}>
        <Text style={styles.left}>Team</Text>
        <Text style={styles.points}>Points</Text>
        <Text style={styles.ranking}>Ranking</Text>
      </View>
      <ScrollView style={{width:"100%", height: "100%"}} showsVerticalScrollIndicator={false}>
      {
        arr.map((el, index)=>(
          <TeamResultCard key={index}/>
        ))
      }
      <View  style={{height: 50}}></View>
      </ScrollView>
    </View>
  )
}

export default MatchResultScreen

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  heading:{
    marginTop: 30,
    marginBottom: 10
  },
  selectedHeading:{
    marginBottom: 10
  },
  tableHeading:{
    width: "100%",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    backgroundColor: "black"
  },
  left:{
    width: "40%",
    color: "white",
    textAlign: "left",
    paddingLeft: 35
  },
  points:{
    width: "15%",
    textAlign: "center",
    color: "white"
  },
  ranking:{
    width: "15%",
    textAlign: "center",
    color: "white"
  }
})
