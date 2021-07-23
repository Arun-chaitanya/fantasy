import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MatchCard from '../components/MatchCard'
import { useRoute } from '@react-navigation/native';
const MyMatchesListScreen = (props) => {
  const arr = [1,2,3,4,5,1,2,3,4,5]
  return (
    <View style = {styles.myMatchesListContainer}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()} 
        data={arr} 
        renderItem={() => <MatchCard navigation={props.navigation}/>}
        style = {{width: "90%"}}
      />
    </View>
  )
}

export default MyMatchesListScreen

const styles = StyleSheet.create({
  myMatchesListContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    paddingBottom: 50
  }
})
