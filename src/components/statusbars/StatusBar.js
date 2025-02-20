import { View, Text, StatusBar } from 'react-native'
import React from 'react'


const GrowStatusBar = ({isDarkMode,theme}) => {
  const background = isDarkMode ? theme.core.border : theme.core.text
  return (
    <StatusBar
    barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  )
}

export default GrowStatusBar