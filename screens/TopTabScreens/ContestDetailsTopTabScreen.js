import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CTopNavigator from '../../components/customNavigator/CTopNavigator'
import ContestParticipantsListScreen from '../ContestParticipantsListScreen'
import MatchResultScreen from '../MatchResultScreen'
import PrizePoolDetails from '../PrizePoolDetails'


const ContestDetailsTopTabScreen = (props) => {
  const [tabHeadings,setTabHeadings] = useState(["Participants", "Prize", "Result"])
  const [screens, setScreens] = useState([ContestParticipantsListScreen,PrizePoolDetails,MatchResultScreen])
  return (
    <CTopNavigator tabHeadings={tabHeadings} screens={screens} activeTab={undefined}/>
  )
}

export default ContestDetailsTopTabScreen

const styles = StyleSheet.create({})

