import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CTopNavigator from '../../components/customNavigator/CTopNavigator'
import MyMatchesListScreen from '../MyMatchesListScreen'


const MyMatchTopTabScreen = (props) => {
  const [tabHeadings,setTabHeadings] = useState(["Upcoming", "Live", "Completed"])
  const [screens, setScreens] = useState([MyMatchesListScreen,MyMatchesListScreen,MyMatchesListScreen])
  return (
    <CTopNavigator tabHeadings={tabHeadings} screens={screens} activeTab={undefined}/>
  )
}

export default MyMatchTopTabScreen

const styles = StyleSheet.create({})
