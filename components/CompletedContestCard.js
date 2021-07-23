import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View,TouchableNativeFeedback, Platform } from 'react-native'
import Colors from '../constants/Colors'

const CompletedContestCard = () => {
  let TouchableCmp = TouchableOpacity

  if(Platform.OS === "android" && Platform.Version >= 21){
    TouchableCmp = TouchableNativeFeedback
  }
  return (
    <View style={styles.completedContestCardContainer}>
      <TouchableCmp style = {{flex:1}} onPress={()=>{}}>
        <View style={styles.completedContestCard}>
          <View style={styles.cardTitle}>
            <Text>Grnd Contest</Text>
            <Text>Score: 367</Text>
            <Text>#7</Text>
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
              <View style={styles.participants}>
                <Text>Players</Text>
                <Text>38</Text>
              </View>
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
              <View style={styles.joinedContestFooter}>
                <Text style={styles.joinedTeamsHeading}>Joined with 1 team</Text>
                <Text style={styles.joinedTeam}>T2</Text>
              </View>
          </View>
        </View>
      </TouchableCmp>
    </View>
      
  )
}

export default CompletedContestCard

const styles = StyleSheet.create({
  completedContestCardContainer: {
    width: "100%",
    maxWidth: 400,
    borderRadius: 10,
    overflow: Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : "visible",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    marginVertical: 10
  },
  completedContestCard:{
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
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: "center"
  },
  joinedTeamsHeading:{
    marginRight:5
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
  },
  participants: {
    alignItems: "center"
  }
})
