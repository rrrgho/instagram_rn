import React, { useEffect, useState } from 'react'
import {Text, View, TouchableOpacity} from 'react-native'

const Home = ({route, navigation}) => {
    const { data } = route.params;
    const back = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
            <Text>Selamat datang : {data.email}</Text>
            <TouchableOpacity onPress={() => {back()}} style={{width:100, height:50, borderRadius:20, marginTop:20, backgroundColor:'blue', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'#fff'}}>Kembali</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home