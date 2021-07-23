import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import FloatingButton from '../components/FloatingButton'
import UpcomingContestCard from '../components/UpcomingContestCard'

const UpcomingContestScreen = (props) => {
  const arr = [1,2,3,4,5]
  return (
    <View style={styles.container}>
      <ScrollView style={{width:"90%"}} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Grand Contests</Text>
        {
          arr.map((el, index)=>(
            <UpcomingContestCard key={index} navigation={props.navigation}/>
          ))
        }
        <Text style={styles.heading}>Paid Contests</Text>
        {
          arr.map((el, index)=>(
            <UpcomingContestCard key={index} navigation={props.navigation}/>
          ))
        }
        <Text style={styles.heading}>Free Contests</Text>
        {
          arr.map((el, index)=>(
            <UpcomingContestCard key={index} navigation={props.navigation}/>
          ))
        }
      </ScrollView>
      <View style={styles.buttonView}>
        <FloatingButton title="Add Contest" onPress={()=>{
          props.navigation.navigate("AddContest")
        }}/>
      </View>
    </View>
  )
}

export default UpcomingContestScreen

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 50
  },
  heading:{
    marginLeft: 10,
    marginVertical: 15
  },
  buttonView:{
    position: "absolute",
    bottom: 100,
    right: 30,
    alignItems: "center",
  }
})
