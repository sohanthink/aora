import { View, Text, Image } from 'react-native'
import React from 'react'

import { images } from '../constants'

const ProfileHeader = ({ profileName }) => {
    return (
        <View className="flex justify-center items-center">
            <View className="flex justify-center items-center gap-1">
                <Image resizeMode='contain' source={images.profile} className="w-12 h-12 rounded-lg" />
                <Text className="text-white font-pbold text-xl">{profileName}</Text>
            </View>
            <View className="flex-row gap-5 mt-1">
                <View className="flex items-center">
                    <Text className="text-white font-pbold">10</Text>
                    <Text className="text-gray-100">posts</Text>
                </View>
                <View className="flex items-center">
                    <Text className="text-white font-pbold">1.2K</Text>
                    <Text className="text-gray-100">Views</Text>
                </View>
            </View>
        </View>
    )
}

export default ProfileHeader