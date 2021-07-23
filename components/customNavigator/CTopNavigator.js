import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView,TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native'
import UpcomingContestScreen from '../../screens/UpcomingContestScreen'

const CTopNavigator = (props) => {
  const {tabHeadings, screens} = props
  let number = props.activeTab ? props.activeTab : 0
  const [activeTab, setActiveTab] = useState(number)

  let ActiveComp = screens[activeTab]
  let TouchableCmp = TouchableOpacity
  let width = (100/screens.length)+ "%"
  if(Platform.OS === "android" && Platform.Version >= 21){
    TouchableCmp = TouchableNativeFeedback
  }
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {
          tabHeadings.map((tab,index)=>(
            <View style={{width:width, height:"100%"}}  key={index}>
              <TouchableCmp onPress={()=>setActiveTab(index)}>
              <View style={{...activeTab === index ? styles.activeTab : styles.tab}}>
                <Text>{tab}</Text>
              </View>
            </TouchableCmp>
            </View>
          ))
        }
      </View>

      <View style={styles.screen}>
        {
          <ActiveComp navigation={props.navigation} route={props.route}/>
        }
      </View>
    </View>
  )
}

export default CTopNavigator

const styles = StyleSheet.create({
  container:{
    width: "100%",
    height: "100%"
  },
  tabBar:{
    width: "100%",
    height: 50,
    flexDirection: "row",
  },
  tab:{
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkgrey",
    borderBottomWidth: 3,
    borderColor: "darkgrey"
  },
  activeTab: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkgrey",
    borderBottomWidth: 3,
    borderColor: "black"
  },
  screen:{
    width: "100%"
  }
})
