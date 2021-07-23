import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import FloatingButton from '../components/FloatingButton';
import MatchCard from '../components/MatchCard'

const MatchesListScreen = (props) => {
  const arr = [1,2,3,4,5]
  return (
    <View style = {styles.matchesListContainer}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()} 
        data={arr} 
        renderItem={() => <MatchCard navigation={props.navigation}/>}
        style = {{width: "90%"}}
        ListHeaderComponent={<Text style={styles.matchesHeading}>Upcoming Matches</Text>}
      />
      <View style={styles.buttonView}>
        <FloatingButton title="Search Contest" onPress={()=>{
          props.navigation.navigate("SearchContest")
        }}/>
      </View>
    </View>
  )
}

export default MatchesListScreen

const styles = StyleSheet.create({
  matchesHeading:{
    marginTop: 15,
  },
  matchesListContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingBottom: 50
  },
  buttonView:{
    position: "absolute",
    bottom: 80,
    right: 30,
    alignItems: "center",
  }
})
