import React from 'react'
import { StyleSheet, Text, View, Image, Button, Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'

const ChooseTopperCard = () => {
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
              <Text style = {styles.teamCredits}>9.5</Text>
              <Text style = {styles.teamAvgPts}>Avg Pts 87</Text>
            </View>
          </View>
          <View style={styles.right}>
            <View style={styles.buttonContainer}>
              <Button title ="#1" />
              <Text style={styles.percentage}>3.10%</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button title ="#2" />
              <Text style={styles.percentage}>0.39%</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button title ="#3" />
              <Text style={styles.percentage}>1.23%</Text>
            </View>
          </View>
        </View>
      </TouchableCmp>
    </View>
      
  )
}

export default ChooseTopperCard

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
    width: "40%",
    flexDirection: "row",
    alignItems: "center"
  },
  teamInfo:{
    textAlign: "left"
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
  right: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  teamCredits:{
    fontSize: 12,
  },
  teamAvgPts:{
    fontSize: 12
  },
  buttonContainer:{
    alignItems: "center",
    justifyContent: "space-between"
  },
  percentage:{
    marginTop: 3,
    fontSize: 12
  }
})
