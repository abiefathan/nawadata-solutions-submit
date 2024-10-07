import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Psbb = () => {
    const [totalKeluarga, setTotalKeluarga] = useState<any>('')
    const [totalAnggotaKeluarga, setTotalAnggotaKeluarga] = useState<any>('')
    const [totalBus, setTotalBus] = useState(0)



    const handleCheck = () => {
        let newArr = totalAnggotaKeluarga.split(" ")

        if (newArr.length != parseInt(totalKeluarga)) {
            ToastAndroid.showWithGravityAndOffset(
                'Input harus sama dengan jumlah keluarga',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
            );
        } else {
            let kapasitasBus = 4
            let count = 0;
            for (let i = 0; i < newArr.length; i++) {
                let toNumber = parseInt(newArr[i]);

                count = count + toNumber
            }


            let result = Math.ceil(count / kapasitasBus);

            setTotalBus(result)
        }

    }

    return (
        <View style={{ marginVertical: 16 }}>
            <Text style={{ textAlign: 'center', marginBottom: 8, color: 'black' }}>CEK MOBIL YANG DIPERLUKAN PADA SETIAP KELUARGA</Text>
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
                    value={totalKeluarga}
                    onChangeText={(v: string) => setTotalKeluarga(parseInt(v))}
                    placeholder='Masukan jumlah keluarga'
                    placeholderTextColor={'gray'}
                    keyboardType='numeric'
                />
            </View>
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
                    value={totalAnggotaKeluarga}
                    onChangeText={(v: string) => setTotalAnggotaKeluarga(v)}
                    placeholder='Masukan jumlah anggota keluarga'
                    placeholderTextColor={'gray'}
                    keyboardType='numeric'
                />
            </View>

            <TouchableOpacity style={{
                alignSelf: 'center',
                marginBottom: 8,
                backgroundColor: 'orange',
                paddingHorizontal: 8,
                paddingVertical: 8,
                borderRadius: 16,
                marginTop: 8
            }} onPress={() => handleCheck()}>
                <Text style={{ color: 'black', fontSize: 12 }}>Cek</Text>
            </TouchableOpacity>


            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                <View style={{ flex: 1 }}>
                    <Text>Bus minimum yang dibutuhkan adalah:</Text>
                </View>
                <View style={{ width: '50%', height: 32, backgroundColor: '#bec4c0', borderRadius: 8, alignItems: 'center', paddingHorizontal: 8, justifyContent: 'center' }}>
                    <Text>{totalBus}</Text>
                </View>
            </View>
        </View>
    )
}

export default Psbb

const styles = StyleSheet.create({})