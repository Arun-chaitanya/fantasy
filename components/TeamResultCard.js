import React from 'react'
import { StyleSheet, Text, View, Image, Button, Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'

const TeamResultCard = () => {
  let TouchableCmp = TouchableOpacity

  if(Platform.OS === "android" && Platform.Version >= 21){
    TouchableCmp = TouchableNativeFeedback
  }
  let Image_URL = {uri: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/7a/TSM_Logo.jpg/revision/latest?cb=20170802144249'}
  return (
    <View style={styles.teamCardContainer}>
      <TouchableCmp style = {{flex:1}} onPress={()=>{}}>
        <View style={styles.teamCard}>
          <View style={styles.left}>
            <Image style={styles.teamLogo} source={Image_URL}/>
            <View style={styles.teamInfo}>
              <Text style={styles.name}>TSM Entity</Text>
              <Text style={styles.matchesPlayed}>Matches: 2</Text>
            </View>
          </View>
          <Text style={styles.points}>375</Text>
          <Text style={styles.ranking}>10</Text>
        </View>
      </TouchableCmp>
    </View>
      
  )
}

export default TeamResultCard

const styles = StyleSheet.create({
  teamCardContainer: {
    width: "100%",
    maxWidth: 500,
    overflow: Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : "visible",
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightestGrey
  },
  teamCard:{
    width: "100%",
    backgroundColor: "white",
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  left:{
    width: "40%",
    flexDirection: "row",
    alignItems: "center"
  },
  teamInfo:{
    textAlign: "left"
  },
  teamLogo: {
    height: 35,
    width: 35,
    borderRadius: 17.5,
    marginRight: 5
  },
  matchesPlayed: {
    fontSize: 12
  },
  name:{
    fontSize: 14
  },
  points:{
    width: "15%",
    textAlign: "center"
  },
  ranking:{
    width: "15%",
    textAlign: "center"
  }
})
