import { View, Text, SafeAreaView, FlatList, Image, RefreshControl } from 'react-native'
import React, { useState } from 'react'

import { images } from '../../constants'
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

// const DATA = [];
const TRENDINGDATA = [

];

// const TRENDINGDATA = [
//     {
//         id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//         title: 'Trending 1',
//     },
//     {
//         id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//         title: 'Trending 2',
//     },
//     {
//         id: '58694a0f-3da1-471f-bd96-145571e29d72',
//         title: 'Trending 3',
//     },
// ];


const Home = () => {

    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = async () => {
        setRefreshing(true)
        // logic for refresh/ fetch data again to the array
        setRefreshing(false)
    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text className="text-white">{item.title}</Text>
                )}
                ListHeaderComponent={() => (
                    <View className="flex my-6 px-4 space-y-6">
                        <View className="flex justify-between flex-row">
                            <View>
                                <Text className="text-gray-100 font-pmedium text-sm">Welcome Back</Text>
                                <Text className="text-white text-2xl font-psemibold">Sohanthink</Text>
                            </View>
                            <View>
                                <Image
                                    source={images.logoSmall}
                                    resizeMode='contain'
                                    className="h-9 w-8"
                                />
                            </View>
                        </View>

                        <SearchInput
                            placeholder="Search something here!!"
                        />

                        <View>
                            <Text className="text-gray-100 font-pmedium text-lg">Trending Videos</Text>
                            <Trending posts={TRENDINGDATA} />
                        </View>

                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                        title="No videos Found"
                        subtitle="No Videos Created Yet"
                    />
                )}
                refreshControl={
                    <RefreshControl onRefresh={onRefresh} refreshing={refreshing}
                    />}

            />
        </SafeAreaView>
    )
}

export default Home
