import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ChooseTopperCard from '../components/ChooseTopperCard'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'

const SelectingToppersScreen = (props) => {
  const arr = [1,2,3,4,5,1,2,3]
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select your Winner and RunnerUp Teams</Text>
      <View style={styles.tableHeading}>
        <Text style={styles.left}>Team Info</Text>
        <View style={styles.right}>
          <Text style={styles.heading1Text}>#1(%)</Text>
          <Text style={styles.heading1Text}>#2(%)</Text>
          <Text style={styles.heading1Text}>#3(%)</Text>
        </View>
      </View>
      <ScrollView style={{width:"100%"}} showsVerticalScrollIndicator={false}>
      {
        arr.map((el, index)=>(
          <ChooseTopperCard key={index}/>
        ))
      }
      <View  style={{height: 60}}></View>
      </ScrollView>
      <View style={styles.buttonView}>
        <PrimaryButton title="Save Team" onPress={()=>{
          props.navigation.navigate("StackSelectDecksList")
        }}/>
        <SecondaryButton title="Deck Preview" onPress={()=>{
          props.navigation.navigate("StackDeckPreview")
        }}/>
      </View>
      
    </View>
  )
}

export default SelectingToppersScreen

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
    color: "white"
  },
  buttonView:{
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    justifyContent:"space-evenly",
    alignItems: "center",
    width: "100%"
  }
})
