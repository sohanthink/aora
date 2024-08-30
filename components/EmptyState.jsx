import { View, Text, Image } from 'react-native'
import React from 'react'

import { images } from '../constants'
import CustomButton from './CustomButton'
import { router } from 'expo-router'

const EmptyState = ({ subtitle, title }) => {
    return (
        <View className="flex justify-center items-center space-y-3 px-4">
            <Image source={images.empty} className="w-[270px] h-[215px]" resizeMode='contain' />
            <Text className="text-white text-xl font-pmedium">{title}</Text>
            <Text className="text-white text-sm font-pregular">{subtitle}</Text>
            <CustomButton title="Back to explore"
                containerStyles="w-full mt-4"
                handlePress={() => router.push('/create')}
            />
        </View>
    )
}

export default EmptyState