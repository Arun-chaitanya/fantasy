import React from 'react'
import { StyleSheet, Text, View, Image, Button, Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'

const TeamCard = () => {
  let TouchableCmp = TouchableOpacity

  if(Platform.OS === "android" && Platform.Version >= 21){
    TouchableCmp = TouchableNativeFeedback
  }
  let Image_URL = {uri: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/7a/TSM_Logo.jpg/revision/latest?cb=20170802144249'}
  return (
    <View style={styles.playerCardContainer}>
      <TouchableCmp style = {{flex:1}} onPress={()=>{}}>
        <View style={styles.playerCard}>
          <View style={styles.left}>
            <View style = {styles.teamLogoContainer}>
              <Image source={Image_URL} style = {styles.teamLogo}/>
            </View>
            <View style = {styles.teamInfo}>
              <Text style = {styles.teamName}>TSM Entity</Text>
              <Text style = {styles.teamCountry}>India</Text>
              <Text style = {styles.teamFavorite}>Sel by 75%</Text>
            </View>
          </View>
          <Text style = {styles.teamAvgPts}>67</Text>
          <Text style = {styles.teamNoOfGames}>2</Text>
          <View style = {styles.teamCreditsContainer}>
            <Text style = {styles.teamCredits}>9.5</Text>
            <Button style = {styles.addButton} title="Add"/>
          </View>
        </View>
      </TouchableCmp>
    </View>
      
  )
}

export default TeamCard

const styles = StyleSheet.create({
  playerCardContainer: {
    width: "100%",
    maxWidth: 500,
    overflow: Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : "visible",
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightestGrey
  },
  playerCard:{
    width: "100%",
    backgroundColor: "white",
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  left:{
    width: "35%",
    flexDirection: "row",
    alignItems: "center"
  },
  teamInfo:{
    textAlign: "left"
  },
  teamCreditsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "20%"
  },
  teamCredits:{
    marginRight: 8
  },
  teamLogoContainer:{
    alignItems: "center",
    justifyContent: "center"
  },
  teamLogo: {
    height: 50,
    width: 50,
    borderRadius: 20,
    marginRight: 5
  },
  teamCountry:{
    fontSize: 10
  },
  teamFavorite: {
    fontSize: 12
  },
  teamAvgPts:{
    width: "15%",
    textAlign: "center"
  },
  teamNoOfGames:{
    width: "15%",
    textAlign: "center"
  }
})
