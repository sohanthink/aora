import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'
import { Video, ResizeMode } from 'expo-av'

const VideoCard = ({ title, avatar, creator, thumbnail, video }) => {

    const [play, setPlay] = useState(false)

    return (
        <View className="px-4 space-y-5 py-4">
            <View className="flex flex-row gap-5 justify-center items-center">
                <View>
                    <Image source={{ uri: avatar }} resizeMode='cover' className="w-12 h-12 border-2 border-secondary-100 rounded-lg" />
                </View>
                <View className="flex-1 flex-row justify-between items-center">
                    <View>
                        <Text numberOfLines={1} className="font-psemibold text-lg text-white">{title}</Text>
                        <Text className="text-sm font-pregular text-gray-100">{creator}</Text>
                    </View>
                    <View>
                        <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
                    </View>
                </View>
            </View>
            <View>
                {
                    play
                        ?
                        (
                            <Video
                                source={{ uri: video }}
                                className="w-full h-[200px] rounded-xl bg-white/10"
                                resizeMode={ResizeMode.CONTAIN}
                                useNativeControls
                                shouldPlay
                                onPlaybackStatusUpdate={(status) => {
                                    if (status.didJustFinish) {
                                        setPlay(false);
                                    }
                                }}
                            />)
                        :
                        (
                            <TouchableOpacity
                                className="relative flex items-center justify-center"
                                onPress={() => setPlay(true)}
                                activeOpacity={0.7}
                            >
                                <Image source={{ uri: thumbnail }} resizeMode='cover' className="w-full h-[200px] rounded-xl" />
                                <Image source={icons.play} resizeMode='contain' className="w-12 h-12 absolute" />
                            </TouchableOpacity>
                        )

                }

            </View>
        </View>
    )
}

export default VideoCard