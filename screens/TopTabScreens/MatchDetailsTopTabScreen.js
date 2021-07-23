import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CTopNavigator from '../../components/customNavigator/CTopNavigator'
import DeckListScreen from '../DeckListScreen'
import MatchDetailsContestListScreen from '../MatchDetailsContestListScreen'
import MatchResultScreen from '../MatchResultScreen'

const MatchDetailsTopTabScreen = (props) => {
  const [tabHeadings,setTabHeadings] = useState(["Contests", "My Decks", "Result"])
  const [screens, setScreens] = useState([MatchDetailsContestListScreen,DeckListScreen,MatchResultScreen])
  return (
    <CTopNavigator tabHeadings={tabHeadings} screens={screens} activeTab={undefined}/>
  )
}

export default MatchDetailsTopTabScreen

const styles = StyleSheet.create({})
