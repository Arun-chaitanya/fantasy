import React from 'react'
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import UpcomingContestCard from '../components/UpcomingContestCard'
import Colors from '../constants/Colors';

const SearchContestScreen = (props) => {
  const arr = [1,2,3,4,5]
  const [input, setInput] = React.useState("");
  return (
    <View style = {styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setInput}
          value={input}
          placeholder="Enter contest code"
        />
        <Button title="Search"/>
      </View>
      <FlatList 
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()} 
        data={arr} 
        renderItem={()=><UpcomingContestCard navigation={props.navigation}/>}
        style = {{width: "90%"}}
      />
    </View>
  )
}

export default SearchContestScreen

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center"
  },
  input:{
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    backgroundColor: "white",
    paddingLeft: 5
  },
  inputContainer:{
    flexDirection: "row",
    width: "80%",
    justifyContent:"center",
    marginBottom: 5,
    marginTop: 15
  }
})
