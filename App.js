import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Routes from './src/routes'
import {Provider} from "react-redux"
import store from "./src/redux/store/index"

const App = () => {
  return (
    <Provider store={store}>
      <Routes/>
      </Provider>
  )
}

export default App

// const styles = StyleSheet.create({
// })