import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Screen</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0078FF',
  },
  heading:{
    fontSize:30,
    color:"white",
  }
})