import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import UpcomingContestCard from '../components/UpcomingContestCard'

const MyContestScreen = (props) => {
  const arr = [1,2,3,4,5]
  return (
    <View style = {styles.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()} 
        data={arr} 
        renderItem={()=><UpcomingContestCard isJoinedContest={true} navigation={props.navigation}/>}
        style = {{width: "90%"}}
      />
    </View>
  )
}

export default MyContestScreen

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    paddingBottom: 50
  }
})
