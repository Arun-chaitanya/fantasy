import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ParticipantCard from '../components/ParticipantCard'

const ContestParticipantsListScreen = (props) => {
  const arr = [1,2,3,4,5,1,2,3,1,2,3,4,5,1,2,3,1,2,3,4,5,1,2,3,1,2,3,4,5,1,2,3]
  return (
    <View style={styles.container}>
      <View style={styles.tableHeading}>
        <Text style={styles.left}>Team Info</Text>
        <Text style={styles.heading1Text}>Points</Text>
        <Text style={styles.heading1Text}>Deck</Text>
        <Text style={styles.heading1Text}>Ranking</Text>
      </View>
      <ScrollView style={{width:"100%"}} showsVerticalScrollIndicator={false}>
      {
        arr.map((el, index)=>(
          <ParticipantCard key={index}/>
        ))
      }
      <View  style={{height: 50}}></View>
      </ScrollView>
    </View>
  )
}

export default ContestParticipantsListScreen

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
    textAlign: "center"
  },
  right: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  heading1Text:{
    textAlign: "center",
    color: "white",
    width: "15%"
  }
})
