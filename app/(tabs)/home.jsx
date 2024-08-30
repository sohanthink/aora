import { View, Text, SafeAreaView, FlatList, Image } from 'react-native'
import React from 'react'

import { images } from '../../constants'


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


const Home = () => {
    return (
        <SafeAreaView className="bg-primary">
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text>{item.title}</Text>
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
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default Home
