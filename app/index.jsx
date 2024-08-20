import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../constants'
import CustomButton from '../components/CustomButton'


const App = () => {
    return (
        <SafeAreaView className="h-full bg-primary">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full justify-center h-full items-center px-4">
                    <Image
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode='contain'
                    />
                    <Image
                        source={images.cards}
                        className="max-w-[380px] h-[300px] w-full"
                        resizeMode='contain'
                    />

                    <View className="relative mt-5">
                        <Text className="text-3xl text-white font-bold text-center ">
                            Discover Endless Possibilites with{' '}
                            <Text className="text-secondary">Aora</Text>
                        </Text>
                        <Image
                            source={images.path}
                            className="absolute w-[136px] h-[15px] -bottom-2 right-2"
                            resizeMode='contain'
                        />
                    </View>

                    <Text className="text-sm font-pregular text-gray-100 text-center mt-7 mx-2">Where creativity meets innovation: embark on a journey of limitless exploration with Aora</Text>
                    <CustomButton
                        title="Continue With Email"
                        handlePress={() => router.push('/sign-up')}
                        containerStyles="w-full mt-7"
                    />
                </View>
                <StatusBar style='light' backgroundColor='#161622' />
            </ScrollView>
        </SafeAreaView>
    )
}

export default App
