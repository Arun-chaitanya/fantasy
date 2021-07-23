import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,TouchableNativeFeedback, Platform } from 'react-native'
import Colors from '../constants/Colors'

const MatchCard = (props) => {
  let TouchableCmp = TouchableOpacity

  if(Platform.OS === "android" && Platform.Version >= 21){
    TouchableCmp = TouchableNativeFeedback
  }
  return (
    <View style={styles.matchCardContainer}>
      <TouchableCmp style = {{flex:1}} onPress={()=>{
        props.navigation.navigate("ContestTab")
      }}>
        <View style={styles.matchCard}>
          <View style={styles.cardTitle}>
            <Text>Match Title</Text>
            <Text>2d 11h 33m</Text>
          </View>
          <View style={styles.cardBody}>
            <Text>Match 1</Text>
          </View>
          <View>
            <View style={styles.cardFooter}>
              <View style={styles.footerLeft}>
                <Text style={styles.grandContestAvailable}>Grand</Text>
                <Text style={styles.grandContestPrize}>₹10 Lakhs</Text>
              </View>
              <View style={styles.footerRight}>
                <Text style={styles.teamMade}>2 Teams</Text>
                <Text style={styles.contestsParticipated}>1 Contest</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableCmp>
    </View>
      
  )
}

export default MatchCard

const styles = StyleSheet.create({
  matchCardContainer: {
    marginVertical: 10,
    width: "100%",
    maxWidth: 400,
    borderRadius: 10,
    overflow: Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : "visible",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    
  },
  matchCard:{
    width: "100%",
    backgroundColor: "white",
    overflow: "hidden"
  },
  cardTitle: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 8,
    justifyContent: "space-between",
    borderBottomColor: Colors.lightestGrey,
    borderBottomWidth: 1
  },
  cardBody:{
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  cardFooter:{
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 8,
    justifyContent: "space-between",
    backgroundColor: Colors.lightestGrey
  },
  footerLeft: {
    flexDirection: "row"
  },
  footerRight: {
    flexDirection: "row"
  },
  grandContestAvailable:{
    marginRight: 5
  },
  teamMade:{
    marginRight: 5
  }
})
