import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import PrizePoolDetailCard from '../components/PrizePoolDetailCard';
const PrizePoolDetails = (props) => {
  const arr = [1,2,3,4,5]
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.detail}>
          <Text style={styles.label}>Prize Pool</Text>
          <Text style={styles.value}>₹100</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>Spots</Text>
          <Text style={styles.value}>17</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>Fees</Text>
          <Text style={styles.value}>₹10</Text>
        </View >
      </View>
      <View style={styles.prizePoolHeading}>
        <Text style={styles.rank}>Rank</Text>
        <Text style={styles.prize}>Prize</Text>
      </View>
      <ScrollView style={styles.prizePoolList}>
        {arr.map((el,index)=>(
          <PrizePoolDetailCard key={index}/>
        ))}
        <View  style={{height: 50}}></View>
      </ScrollView>
    </View>
  )
}

export default PrizePoolDetails

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  prizePoolHeading:{
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightestGrey
  },
  prizePoolList:{
    width: "100%"
  },
  value:{
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  detailsContainer:{
    width: "100%",
    flexDirection: "row",
    justifyContent:"space-between",
    padding: 15,
    backgroundColor: "black"
  },
  label:{
    color: "white"
  },
  detail:{
    alignItems: "center"
  }
})
