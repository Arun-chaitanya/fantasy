import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,TouchableNativeFeedback, Platform, Image } from 'react-native'
import Colors from '../constants/Colors'

const DeckCard = (props) => {
  let TouchableCmp = TouchableOpacity

  if(Platform.OS === "android" && Platform.Version >= 21){
    TouchableCmp = TouchableNativeFeedback
  }
  let arr = [1,2,3,4,5,6,7,8]
  let Image_URL = {uri: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/7a/TSM_Logo.jpg/revision/latest?cb=20170802144249'}
  return (
    <View style={{...styles.deckCardContainer,...props.isSelect && styles.selectDeckCardContainer}}>
      <TouchableCmp style = {{flex:1}} onPress={()=>{}}>
        <View style={styles.deckCard}>
          <View style={styles.cardTitle}>
            <View style={styles.leftTitle}>
              <Text style={styles.deckName}>Deck 1</Text>
              <Text style={styles.creditsInfo}>90.5/100</Text>
            </View>
            <View style={styles.rightTitle}>
              <Text  style={styles.edit}>Edit</Text>
              <Text  style={styles.info} onPress={()=>{props.navigation.navigate("DeckPreviewScreen")}}>Info</Text>
            </View>
          </View>
          <View style={styles.cardBody}>
            {arr.map((arrObj,index)=>(
              <View style={styles.teamLogoAndName} key={index}>
                <Image style={styles.teamLogo} source={Image_URL}/>
                <Text style={styles.teamName}>TSMENT</Text>
              </View>
            ))}
          </View>
        </View>
      </TouchableCmp>
    </View>
      
  )
}

export default DeckCard

const styles = StyleSheet.create({
  deckCardContainer: {
    width: "100%",
    // maxWidth: 400,
    borderRadius: 10,
    overflow: Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : "visible",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    marginVertical: 10
  },
  selectDeckCardContainer:{
    width: "90%"
  },
  deckCard:{
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
    // height: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "space-between"
  },
  rightTitle: {
    flexDirection: "row",
    alignItems: "center"
  },
  leftTitle: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  edit: {
    marginRight: 10,
    fontSize: 12
  },
  info:{
    marginRight: 5,
    fontSize: 12
  },
  teamLogoAndName:{
    width: "24%",
    alignItems: "center",
    padding: 3,
    marginBottom: 5,
    borderRadius: 4,
    borderColor: "black",
    borderWidth: 1
  },
  teamLogo: {
    width: 40,
    height: 40
  },
  teamName:{
    fontSize: 12
  },
  deckName:{
    marginRight: 10
  },
  creditsInfo:{
    fontSize: 12
  }
})
