import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PaymentsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Payments Screen</Text>
    </View>
  )
}

export default PaymentsScreen

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
