import React from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import DeckCard from '../components/DeckCard'
import PrimaryButton from '../components/PrimaryButton';

const DeckListScreen = (props) => {
  const arr = [1,2,3,4,5]
  return (
    <View style = {styles.container}>
      <ScrollView style={{width:"90%"}} showsVerticalScrollIndicator={false}>
      {
        arr.map((el, index)=>(
          <DeckCard key={index}/>
        ))
      }
      <View  style={{height: 50}}></View>
      </ScrollView>
      <View style={styles.buttonView}>
        <PrimaryButton title="Add Team" onPress={()=>{
          props.navigation.navigate("StackSelectingTopper")
        }}/>
      </View>
    </View>
  )
}

export default DeckListScreen

const styles = StyleSheet.create({
  matchesHeading:{
    marginTop: 30
  },
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    paddingBottom: 50,
    position: "relative",
  },
  buttonView:{
    position: "absolute",
    bottom: 60,
    alignItems: "center",
    width: "100%",
    zIndex: 9999
  }
})
