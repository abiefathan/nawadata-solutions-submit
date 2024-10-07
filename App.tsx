import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import KonsonanVokal from './KonsonanVokal'
import Psbb from './Psbb'

const App = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{paddingHorizontal: 16, paddingVertical: 16}}>
      <KonsonanVokal />
      <Psbb />
      </View>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({})