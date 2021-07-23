import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const DeckPreviewScreen = (props) => {
  let arr = [1,2,3,4,5]
  let Image_URL = {uri: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/7a/TSM_Logo.jpg/revision/latest?cb=20170802144249'}
  return (
    <View  style={styles.container}>
      <View style={styles.teamsContainer}>
        <Text style={styles.heading}>Winner</Text>
        <View style = {styles.winnerPart}>
          <TeamPreview imgUrl={Image_URL} name={"TSM"} credits={"8.5"} fantasPts={"134"}/>
        </View>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.heading}>Runner Ups</Text>
        <View style = {styles.runnerUpPart}>
          <TeamPreview imgUrl={Image_URL} name={"TSM"} credits={"8.5"} fantasPts={"134"}/>
          <TeamPreview imgUrl={Image_URL} name={"TSM"} credits={"8.5"} fantasPts={"134"}/>
        </View>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.heading}>Top 8's</Text>
        <View style = {styles.Top8Part}>
          {arr.map((arrObj,index)=>(
            <TeamPreview key={index} style={styles.runnerUpTeams} imgUrl={Image_URL} name={"TSM"} credits={"8.5"} fantasyPts={"134"}/>
          ))}
        </View>
      </View>
    </View>
  )
}

const TeamPreview = (props) => {
  return (
    <View style={{...styles.teamPreviewContainer, ...props.style}}>
      <Image style={styles.teamLogo} source={props.imgUrl}/>
      <Text style={styles.teamName}>{props.name}</Text>
      <View style={styles.teamInfo}>
        <Text style={styles.teamCredits}>{props.credits} Cr</Text>
        {/* <Text style={styles.teamPts}>{props.fantasyPts}</Text> */}
      </View>
    </View>
  )
}

export default DeckPreviewScreen

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    // alignItems: "center"
  },
  teamPreviewContainer:{
    width: 70,
    alignItems: "center",
    marginBottom: 10
  },
  teamLogo:{
    width: 60,
    height: 60,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  teamName: {
    marginTop: -2,
    borderRadius: 4,
    padding: 3,
    backgroundColor: "black",
    color: "white",
    width: 60,
    textAlign: "center"
  },
  teamsContainer:{
    alignItems: "center",
    width: "100%"
  },
  runnerUpPart: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  Top8Part: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap"
  },
  runnerUpTeams:{
    width: "30%"
  },
  heading:{
    marginBottom: 10,
    textDecorationLine: "underline"
  },
  teamCredits:{
    fontSize: 11
  }
})
