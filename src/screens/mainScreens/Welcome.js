import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:"25%",color:"white"}}>Welcome</Text>
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
  }
})