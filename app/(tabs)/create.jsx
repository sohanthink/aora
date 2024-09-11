import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import FormField from "../../components/FormField"

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



const Create = () => {
    return (
        <SafeAreaView className="bg-primary w-full h-full">
            <ScrollView className="px-4 my-6">
                <Text className="text-2xl font-psemibold text-white">Upload Video</Text>
                <FormField
                    title="Video Title"
                    placeholder="Input an eye cachy title.."
                    otherStyles="mt-5"
                />
                <View>
                    {
                        fetchedData
                            ?
                            <Text>nice</Text>
                            :
                            <Text>nai</Text>

                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Create