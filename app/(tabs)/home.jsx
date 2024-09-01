import { View, Text, SafeAreaView, FlatList, Image, RefreshControl } from 'react-native'
import React, { useState } from 'react'

import { images } from '../../constants'
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';
import DataFetch from '../../utils/DataFetch';
import VideoCard from '../../components/VideoCard';
import { StatusBar } from 'expo-status-bar';


const fetchedData = () => {

    // logic goes here to fetch data from APIS

    return [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Paar chanaa de - music video',
            thumbnail: 'https://images.pexels.com/photos/27845119/pexels-photo-27845119/free-photo-of-a-blurry-photo-of-trees-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            video: 'https://youtu.be/J7bYXNM9oBQ',
            creator: 'Muhammad SOhan MOllah',
            avatar: 'https://scontent.fcgp36-1.fna.fbcdn.net/v/t39.30808-1/439426752_1114499739876223_724619995359030685_n.jpg?stp=c0.234.1580.1580a_dst-jpg_s480x480&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEhex-IEYxGE_1WrHy24hfrp1IdgCY4OOqnUh2AJjg46gT4cUwbUAW6aR0zK0L9sIgfUNER1aPaWCGBug2Xwtnr&_nc_ohc=1ys26Xgv_RAQ7kNvgHkLAJT&_nc_ht=scontent.fcgp36-1.fna&oh=00_AYBo40wStVCNb2nxnVbSa65kHOJJ5g_1Ea20QNWdRX4vxA&oe=66D8778C'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-NNDFKBJ',
            title: 'Paar chanaa de 22',
            thumbnail: 'https://images.pexels.com/photos/11845517/pexels-photo-11845517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            video: 'https://videos.pexels.com/video-files/15138893/15138893-sd_640_360_30fps.mp4',
            creator: 'sohanthink',
            avatar: 'https://scontent.fcgp36-1.fna.fbcdn.net/v/t39.30808-1/439426752_1114499739876223_724619995359030685_n.jpg?stp=c0.234.1580.1580a_dst-jpg_s480x480&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEhex-IEYxGE_1WrHy24hfrp1IdgCY4OOqnUh2AJjg46gT4cUwbUAW6aR0zK0L9sIgfUNER1aPaWCGBug2Xwtnr&_nc_ohc=1ys26Xgv_RAQ7kNvgHkLAJT&_nc_ht=scontent.fcgp36-1.fna&oh=00_AYBo40wStVCNb2nxnVbSa65kHOJJ5g_1Ea20QNWdRX4vxA&oe=66D8778C'
        },

    ];
}

const TRENDINGDATA = () => {

    // logic goes here to fetch data from APIS

    return [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Paar chanaa de - music video',
            thumbnail: 'https://images.pexels.com/photos/27845119/pexels-photo-27845119/free-photo-of-a-blurry-photo-of-trees-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            video: 'https://videos.pexels.com/video-files/4630705/4630705-sd_640_360_24fps.mp4',
            creator: 'Muhammad SOhan MOllah',
            avatar: 'https://scontent.fcgp36-1.fna.fbcdn.net/v/t39.30808-1/439426752_1114499739876223_724619995359030685_n.jpg?stp=c0.234.1580.1580a_dst-jpg_s480x480&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEhex-IEYxGE_1WrHy24hfrp1IdgCY4OOqnUh2AJjg46gT4cUwbUAW6aR0zK0L9sIgfUNER1aPaWCGBug2Xwtnr&_nc_ohc=1ys26Xgv_RAQ7kNvgHkLAJT&_nc_ht=scontent.fcgp36-1.fna&oh=00_AYBo40wStVCNb2nxnVbSa65kHOJJ5g_1Ea20QNWdRX4vxA&oe=66D8778C'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-NNDFKBJ',
            title: 'Paar chanaa de 22',
            thumbnail: 'https://images.pexels.com/photos/11845517/pexels-photo-11845517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            video: 'https://videos.pexels.com/video-files/1321208/1321208-uhd_2560_1440_30fps.mp4',
            creator: 'sohanthink',
            avatar: 'https://scontent.fcgp36-1.fna.fbcdn.net/v/t39.30808-1/439426752_1114499739876223_724619995359030685_n.jpg?stp=c0.234.1580.1580a_dst-jpg_s480x480&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEhex-IEYxGE_1WrHy24hfrp1IdgCY4OOqnUh2AJjg46gT4cUwbUAW6aR0zK0L9sIgfUNER1aPaWCGBug2Xwtnr&_nc_ohc=1ys26Xgv_RAQ7kNvgHkLAJT&_nc_ht=scontent.fcgp36-1.fna&oh=00_AYBo40wStVCNb2nxnVbSa65kHOJJ5g_1Ea20QNWdRX4vxA&oe=66D8778C'
        },
        {
            id: 'bd7acbea-fedsvds-46c2-aed5-NNDFKBJ',
            title: 'Paar chanaa de 22',
            thumbnail: 'https://images.pexels.com/photos/11845517/pexels-photo-11845517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            video: 'https://videos.pexels.com/video-files/3629511/3629511-sd_360_450_24fps.mp4',
            creator: 'sohanthink',
            avatar: 'https://scontent.fcgp36-1.fna.fbcdn.net/v/t39.30808-1/439426752_1114499739876223_724619995359030685_n.jpg?stp=c0.234.1580.1580a_dst-jpg_s480x480&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEhex-IEYxGE_1WrHy24hfrp1IdgCY4OOqnUh2AJjg46gT4cUwbUAW6aR0zK0L9sIgfUNER1aPaWCGBug2Xwtnr&_nc_ohc=1ys26Xgv_RAQ7kNvgHkLAJT&_nc_ht=scontent.fcgp36-1.fna&oh=00_AYBo40wStVCNb2nxnVbSa65kHOJJ5g_1Ea20QNWdRX4vxA&oe=66D8778C'
        },
        {
            id: 'bd7acbea-c1b1-bfdgdf-aed5-NNDFKBJ',
            title: 'Paar chanaa de 22',
            thumbnail: 'https://images.pexels.com/photos/11845517/pexels-photo-11845517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            video: 'https://videos.pexels.com/video-files/15138893/15138893-sd_640_360_30fps.mp4',
            creator: 'sohanthink',
            avatar: 'https://scontent.fcgp36-1.fna.fbcdn.net/v/t39.30808-1/439426752_1114499739876223_724619995359030685_n.jpg?stp=c0.234.1580.1580a_dst-jpg_s480x480&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEhex-IEYxGE_1WrHy24hfrp1IdgCY4OOqnUh2AJjg46gT4cUwbUAW6aR0zK0L9sIgfUNER1aPaWCGBug2Xwtnr&_nc_ohc=1ys26Xgv_RAQ7kNvgHkLAJT&_nc_ht=scontent.fcgp36-1.fna&oh=00_AYBo40wStVCNb2nxnVbSa65kHOJJ5g_1Ea20QNWdRX4vxA&oe=66D8778C'
        },

    ];
}


const Home = () => {

    const { data, isLoading, refetch } = DataFetch(fetchedData)

    // console.log(data);


    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = async () => {
        setRefreshing(true)
        await refetch()
        setRefreshing(false)
    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <StatusBar backgroundColor='#161622' style='light' />
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <VideoCard
                        title={item.title}
                        avatar={item.avatar}
                        creator={item.creator}
                        thumbnail={item.thumbnail}
                        video={item.video}
                    />
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
