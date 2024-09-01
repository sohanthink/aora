import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable';
import DataFetch from '../utils/DataFetch';
import { icons } from '../constants';
import { Video, ResizeMode } from 'expo-av';

const ZoomIn = {
    0: {
        scale: 0.9
    },
    1: {
        scale: 1
    }
}
const ZoomOut = {
    0: {
        scale: 1
    },
    1: {
        scale: 0.9
    }
}

const TrendinItem = ({ activeItem, item }) => {
    const [play, setPlay] = useState(false)
    return (
        <Animatable.View
            className="mr-3"
            animation={activeItem === item.id ? ZoomIn : ZoomOut}
            duration={500}
        >
            {
                play
                    ?
                    <Video
                        source={{ uri: item.video }}
                        className="w-52 h-72 rounded-[33px] overflow-hidden mt-5"
                        resizeMode={ResizeMode.CONTAIN}
                        useNativeControls
                        shouldPlay
                        onPlaybackStatusUpdate={(status) => {
                            if (status.didJustFinish) {
                                setPlay(false)
                            }
                        }}
                    />
                    :
                    <TouchableOpacity activeOpacity={0.7} className="relative justify-center items-center" onPress={() => setPlay(true)}>
                        <ImageBackground source={{ uri: item.thumbnail }}
                            resizeMode='cover'
                            className="w-52 h-72 rounded-[33px] overflow-hidden shadow-lg shadow-black/40 mt-5" />
                        <Image source={icons.play} resizeMode='contain' className="absolute w-12 h-12" />
                    </TouchableOpacity>
            }
        </Animatable.View>
    )
}


const Trending = ({ posts }) => {
    const { data, isLoading, refetch } = DataFetch(posts)
    const [activeItem, setActiveItem] = useState(posts[0])

    const viewableItemsChanged = ({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveItem(viewableItems[1].key)
        }
    }

    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TrendinItem item={item} activeItem={activeItem} />
            )}
            horizontal
            onViewableItemsChanged={viewableItemsChanged}
            contentOffset={{ x: 170 }}
        />
    )
}

export default Trending