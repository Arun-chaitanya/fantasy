import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CompletedContestCard from '../components/CompletedContestCard'

const MatchDetailsContestListScreen = (props) => {
  const arr = [1,2,3,4,5]
  return (
    <View style = {styles.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()} 
        data={arr} 
        renderItem={()=><CompletedContestCard/>}
        style = {{width: "90%"}}
      />
    </View>
  )
}

export default MatchDetailsContestListScreen

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center"
  }
})
