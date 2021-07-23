import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProfileScreen = (props) => {
  return (
    <View style={styles.profileContainer}>
      <Text>Profile Page</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  profileContainer: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

