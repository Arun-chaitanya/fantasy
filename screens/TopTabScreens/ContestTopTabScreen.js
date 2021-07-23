import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CTopNavigator from '../../components/customNavigator/CTopNavigator'
import DeckListScreen from '../DeckListScreen'
import MyContestScreen from '../MyContestScreen'
import UpcomingContestScreen from '../UpcomingContestScreen'

const ContestTopTabScreen = (props) => {
  const [tabHeadings,setTabHeadings] = useState(["Contests", "My Contests", "My Decks"])
  const [screens, setScreens] = useState([UpcomingContestScreen,MyContestScreen,DeckListScreen])
  return (
    <CTopNavigator tabHeadings={tabHeadings} screens={screens} activeTab={undefined} {...props}/>
  )
}

export default ContestTopTabScreen

const styles = StyleSheet.create({})
