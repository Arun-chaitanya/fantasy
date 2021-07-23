import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View,TouchableNativeFeedback, Platform, Button } from 'react-native'
import Colors from '../constants/Colors'

const UpcomingContestCard = (props) => {
  // const [isJoinedContest,setIsJoinedContest] = useState(false)
  let TouchableCmp = TouchableOpacity

  if(Platform.OS === "android" && Platform.Version >= 21){
    TouchableCmp = TouchableNativeFeedback
  }
  return (
    <View style={styles.upcomingContestCardContainer}>
      <TouchableCmp style = {{flex:1}} onPress={()=>{
        props.navigation.navigate("ULContestDetailTab")
      }}>
        <View style={styles.upcomingContestCard}>
          <View style={styles.cardTitle}>
            <Text>Match-Wise</Text>
            <Text>Guaranteed</Text>
          </View>
          <View style={styles.cardBody}>
            <View style={styles.cardBodyTop}>
              <View style={styles.prizePool}>
                <Text style={styles.prizePoolHeading}>Prize Pool</Text>
                <Text style={styles.prizePoolAmount}>₹10 Lakhs</Text>
              </View>
              <View style={styles.prizePool}>
                <Text style={styles.EntryFeesHeading}>Entry Fees</Text>
                <Text style={styles.EntryFeesAmount}>₹10</Text>
              </View>
              <View>
                <Button 
                  title={props.isJoinedContest ? "Share" : "Join"}
                  onPress={()=>{
                    !props.isJoinedContest && 
                    props.navigation.navigate("StackMakingDeck")
                  }}
                />
              </View>
            </View>
            <View style={styles.cardBodyBottom}>
              <Text style={styles.spotsLeft}> 2 spots left</Text>
              <Text style={styles.totalSpots}> 100 spots</Text>
            </View>

          </View>
          <View>
            <View style={styles.cardFooter}>
              <View style={styles.footerLeft}>
                <Text style={styles.firstPrize}>₹3000</Text>
                <Text style={styles.NoOfWinners}>30 Winners</Text>
              </View>
              <View style={styles.footerRight}>
                <Text style={styles.EntryType}>Single Team</Text>
              </View>
            </View>
            {props.isJoinedContest && 
              <View style={styles.joinedContestFooter}>
                <Text style={styles.joinedTeamsHeading}>Joined with 1 team</Text>
                <Text style={styles.joinedTeam}>T2</Text>
              </View>
            }
          </View>
        </View>
      </TouchableCmp>
    </View>
      
  )
}

export default UpcomingContestCard

const styles = StyleSheet.create({
  upcomingContestCardContainer: {
    width: "100%",
    maxWidth: 400,
    borderRadius: 3,
    overflow: Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : "visible",
    elevation: 3,
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    marginVertical: 10
  },
  upcomingContestCard:{
    width: "100%",
    backgroundColor: "white",
    overflow: "hidden"
  },
  cardTitle: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    borderBottomColor: Colors.lightestGrey,
    borderBottomWidth: 1
  },
  cardBody:{
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center"
  },
  cardBodyTop:{
    height: 40,
    flexDirection: "row",
    width: "100%",
    justifyContent:"space-between",
    alignItems: "center",
    marginBottom: 10
  },
  cardBodyBottom:{
    borderTopColor: "black",
    borderTopWidth: 3,
    paddingTop: 10,
    height: 25,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cardFooter:{
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    backgroundColor: Colors.lightestGrey
  },
  joinedContestFooter:{
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  joinedTeamsHeading:{
    marginBottom:5,
    marginRight: 10
  },
  joinedTeam:{
    backgroundColor: Colors.lightestGrey,
    padding: 5,
    width: 40,
    textAlign: "center",
    borderRadius: 4
  },
  footerLeft: {
    flexDirection: "row"
  },
  footerRight: {
    flexDirection: "row"
  },
  firstPrize:{
    marginRight: 10
  },
  prizePool: {
    alignItems: "center"
  }
})
