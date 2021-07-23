import React from 'react'
import { StyleSheet, Text, View, Image, Button, Platform } from 'react-native'
import Colors from '../constants/Colors'

const PrizePoolDetailCard = () => {
  let Image_URL = {uri: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/7a/TSM_Logo.jpg/revision/latest?cb=20170802144249'}
  return (
    <View style={styles.prizePoolCard}>
      <Text style={styles.rank}># 1</Text>
      <Text style={styles.prize}>₹10</Text>
    </View>
      
  )
}

export default PrizePoolDetailCard

const styles = StyleSheet.create({
  prizePoolCard:{
    width: "100%",
    backgroundColor: "white",
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightestGrey
  }
})
