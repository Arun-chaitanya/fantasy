import React from 'react'
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import TeamCard from '../components/TeamCard'

const MakingDeckScreen = (props) => {
  const arr = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,6]
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select your 8 teams</Text>
      <Text style={styles.selectedHeading}>Selected Teams: 4</Text>
      <View style={styles.tableHeading}>
        <Text style={styles.left}>Team Info</Text>
        <Text style={styles.tableHeadingAvgText}>Avg Pts</Text>
        <Text style={styles.tableHeadingMatchText}>Matches</Text>
        <Text style={styles.tableHeadingCreditsText}>Credits</Text>
      </View>
      <ScrollView style={{width:"100%"}} showsVerticalScrollIndicator={false}>
      {
        arr.map((el, index)=>(
          <TeamCard key={index}/>
        ))
      }
      <View  style={{height: 60}}></View>
      </ScrollView>
      <View style={styles.buttonView}>
        <PrimaryButton title="CONTINUE" onPress={()=>{
          props.navigation.navigate("StackSelectingTopper")
        }}/>
      </View>
    </View>
  )
}

export default MakingDeckScreen

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  heading:{
    marginTop: 10,
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
    fontSize: 12,
    width: "35%",
    color: "white",
    textAlign: "center"
  },
  tableHeadingAvgText:{
    fontSize: 12,
    width: "15%",
    textAlign: "center",
    color: "white"

  },
  tableHeadingCreditsText:{
    fontSize: 12,
    width: "20%",
    textAlign: "center",
    color: "white"
  },
  tableHeadingMatchText: {
    fontSize: 12,
    width: "15%",
    textAlign: "center",
    color: "white"
  },
  buttonView:{
    position: "absolute",
    bottom: 10,
    alignItems: "center",
    width: "100%"
  }
})
