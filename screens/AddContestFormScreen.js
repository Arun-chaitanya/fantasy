import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Platform, Dimensions } from 'react-native'
import CSelect from '../components/CSelect'
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/Colors';

const AddContestFormScreen = (props) => {
  const [input, setInput] = React.useState("");
  const [noOfTeams, setNoOfTeams] = React.useState("");
  const [fees, setFees] = React.useState("");
  const [maxTeamsAllowed, setMaxTeamsAllowed] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create new contest</Text>
      <TextInput
        style={{...styles.input,...styles.name}}
        onChangeText={setInput}
        value={input}
        placeholder="Enter contest Name"
      />
      <View style={styles.contestDetails}>
        <TextInput
          style={{...styles.input,...styles.noOfTeams}}
          onChangeText={setNoOfTeams}
          value={noOfTeams}
          placeholder="No. of teams"
        />
        <TextInput
          style={{...styles.input,...styles.fees}}
          onChangeText={setFees}
          value={fees}
          placeholder="Entry Fees"
        />
      </View>
      <View style={styles.multiTeams}>
        <CSelect onPress={()=>{}} isSelected={false}/>
        <Text style={styles.multiTeamsLabel}>Allow multiple teams per participant</Text>
      </View>
      <TextInput
        style={{...styles.input,...styles.maxTeamsAllowed}}
        onChangeText={setMaxTeamsAllowed}
        value={maxTeamsAllowed}
        placeholder="Maximum Teams"
      />
      <View style={styles.flexibility}>
        <CSelect onPress={()=>{}} isSelected={false}/>
        <Text style={styles.flexibilityLabel}>Allow flexibility for total participants for contest</Text>
      </View>
      <Text style={styles.flexibilityContext}>The contest will take place if more than 1 team participate in contest. Prize distribution will dependd on number of spots filled</Text>
      <View style={styles.totalWinners}>
        <Text style={styles.totalWinnersLabel}>Total number of winners: <Text>500</Text></Text>
        <Button title="Change"/>
      </View>
      <View style={styles.buttonView}>
        <PrimaryButton title="CREATE CONTEST" onPress={()=>{
          props.navigation.navigate("ULContestDetailTab")
        }}/>
      </View>
    </View>
  )
}

export default AddContestFormScreen

const styles = StyleSheet.create({
  input:{
    borderBottomColor: "black",
    borderBottomWidth: 1,
    backgroundColor: "white",
    paddingLeft: 10,
    marginBottom: 10,
    height: 50
  },
  noOfTeams:{
    width: "48%"
  },
  fees:{
    width: "48%"
  },
  maxTeamsAllowed:{
    width: "48%"
  },
  container: {
    height: "100%",
    width: "100%",
    padding: 20,
    position: "relative"
  },
  contestDetails:{
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  multiTeams:{
    flexDirection: "row",
    width: "100%",
    marginBottom: 10
  },
  flexibility:{
    flexDirection: "row",
    width: "100%"
  },
  totalWinners:{
    borderTopColor: "darkgrey",
    borderTopWidth: 1,
    paddingTop: 10,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    justifyContent:"space-between"
  },
  flexibilityContext:{
    marginLeft: 30,
    marginTop: 4,
    fontSize: 12,
  },
  heading:{
    marginBottom: 20
  },
  flexibilityLabel:{
    marginLeft: 10
  },
  multiTeamsLabel:{
    marginLeft: 10
  },
  
  buttonView:{
    position: "absolute",
    bottom: 10,
    width: Dimensions.get('window').width,
    alignItems: "center",
    flex: 1
  }
})
