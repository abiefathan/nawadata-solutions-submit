import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const KonsonanVokal = () => {
  const [valueVocal, setValueVocal] = useState('')

  const [resultValue1, setResultValue1] = useState('')
  const [resultValue2, setResultValue2] = useState('')

  const handleVocal = () => {
    let vocal = 'aiueoAIUEO';

    let handleProcess1 = []
    let handleProcess2 = []

    for (let i = 0; i < valueVocal.length; i++) {
      if (vocal.includes((valueVocal[i]))) {
        handleProcess1.push(valueVocal[i])
      } else {
        handleProcess2.push(valueVocal[i])
      }
    }

    setResultValue1(handleProcess1.toString().toLocaleLowerCase())
    setResultValue2(handleProcess2.toString().toLocaleLowerCase())
  }
  return (
    <View style={{
      marginVertical: 16
    }}>
      <Text style={{ textAlign: 'center', marginBottom: 8, color: 'black' }}>MENGECEK HURUF VOKAL & KONSONAN</Text>
      <View style={{
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 16,
        paddingHorizontal: 16,
        marginBottom: 8
      }}>
        <TextInput
          value={valueVocal}
          onChangeText={(v: string) => setValueVocal(v)}
          placeholder='Masukan kata'
          placeholderTextColor={'gray'}
        />
      </View>

      <TouchableOpacity style={{
        alignSelf: 'center',
        marginBottom: 8,
        backgroundColor: 'orange',
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 16
      }} onPress={() => handleVocal()}>
        <Text style={{ color: 'black', fontSize: 12 }}>Cek</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <View style={{ flex: 1 }}>
          <Text>Karakter Vokal:</Text>
        </View>
        <View style={{ width: '50%', height: 32, backgroundColor: '#bec4c0', borderRadius: 8, alignItems: 'center', paddingHorizontal: 8, justifyContent: 'center' }}>
          <Text>{resultValue1}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <View style={{ flex: 1 }}>
          <Text>Karakter Konsonan:</Text>
        </View>
        <View style={{ width: '50%', height: 32, backgroundColor: '#bec4c0', borderRadius: 8, alignItems: 'center', paddingHorizontal: 8, justifyContent: 'center' }}>
          <Text>{resultValue2}</Text>
        </View>
      </View>
    </View>
  )
}

export default KonsonanVokal

const styles = StyleSheet.create({})