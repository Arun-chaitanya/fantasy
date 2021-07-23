import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import CSelect from '../components/CSelect'
import DeckCard from '../components/DeckCard'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'

const SelectDeckListScreen = (props) => {
  const arr = [1,2,3,4,5]
  return (
    <View style={styles.container}>
      <ScrollView style={{width:"90%"}} showsVerticalScrollIndicator={false}>
      {
        arr.map((el, index)=>(
          <View style={styles.cardAndSelect} key={index}>
            <DeckCard isSelect={true}/>
            <CSelect isSelected={true}/>
          </View>
        ))
      }
      <View  style={{height: 60}}></View>
      </ScrollView>
      <View style={styles.buttonView}>
        <PrimaryButton title="Join Contest" onPress={()=>{
          props.navigation.navigate("ULContestDetailTab")
        }}/>
        <SecondaryButton title="Add Deck" onPress={()=>{
          props.navigation.navigate("StackMakingDeck")
        }}/>
      </View>
    </View>
  )
}

export default SelectDeckListScreen

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    alignItems: "center"
  },
  cardAndSelect:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-between"
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
