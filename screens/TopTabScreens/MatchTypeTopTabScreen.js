import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CTopNavigator from '../../components/customNavigator/CTopNavigator'
import MatchesListScreen from '../MatchesListScreen'


const MatchTypeTopTabScreen = (props) => {
  const [tabHeadings,setTabHeadings] = useState(["Match", "Day", "Tournament"])
  const [screens, setScreens] = useState([MatchesListScreen,MatchesListScreen,MatchesListScreen])
  return (
    <CTopNavigator tabHeadings={tabHeadings} screens={screens} activeTab={undefined} {...props}/>
  )
}

export default MatchTypeTopTabScreen

const styles = StyleSheet.create({})
