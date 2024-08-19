import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const App = () => {
    return (
        <View className="flex-1 items-center justify-center bg-green-50">
            <Text className="text-3xl font-pblack">Auro</Text>
            <Text className="text-3xl bg-black text-white p-5 mb-2">nice</Text>
            <StatusBar style='auto' />
            <Link href="/profile" style={{ color: 'blue' }}>go to profile</Link>
        </View>
    )
}

export default App
