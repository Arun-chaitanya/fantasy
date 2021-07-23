import React from 'react'
import { StyleSheet, Text, View, Image, Button, Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'

const ParticipantCard = () => {
  let TouchableCmp = TouchableOpacity

  if(Platform.OS === "android" && Platform.Version >= 21){
    TouchableCmp = TouchableNativeFeedback
  }
  let Image_URL = {uri: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/7a/TSM_Logo.jpg/revision/latest?cb=20170802144249'}
  return (
    <View style={styles.participantCardContainer}>
      <TouchableCmp style = {{flex:1}} onPress={()=>{}}>
        <View style={styles.participantCard}>
          <View style={styles.left}>
            <Image style={styles.participantLogo} source={Image_URL}/>
            <View style={styles.participantInfo}>
              <Text style={styles.name}>Arunchaitanya</Text>
              <Text style={styles.level}>Lvl: 82</Text>
            </View>
          </View>
          <Text style={styles.points}>375</Text>
          <Text style={styles.deckName}>D1</Text>
          <Text style={styles.ranking}>562</Text>
        </View>
      </TouchableCmp>
    </View>
      
  )
}

export default ParticipantCard

const styles = StyleSheet.create({
  participantCardContainer: {
    width: "100%",
    maxWidth: 500,
    overflow: Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : "visible",
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightestGrey
  },
  participantCard:{
    width: "100%",
    backgroundColor: "white",
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15
  },
  left:{
    width: "40%",
    flexDirection: "row",
    alignItems: "center"
  },
  participantInfo:{
    textAlign: "left"
  },
  participantLogo: {
    height: 40,
    width: 40,
    borderRadius: 25,
    marginRight: 5
  },
  level: {
    fontSize: 12
  },
  name:{
    fontSize: 14
  },
  points:{
    width: "15%",
    textAlign: "center"
  },
  deckName:{
    width: "15%",
    textAlign: "center"
  },
  ranking:{
    width: "15%",
    textAlign: "center"
  },
})
