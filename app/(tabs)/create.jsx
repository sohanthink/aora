import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import FormField from "../../components/FormField"
import { icons } from '../../constants'



const Create = () => {
    const [form, setForm] = useState({
        title: "",
        video: null,
        thumbnail: null,
        prompt: ""
    })


    return (
        <SafeAreaView className="bg-primary w-full h-full">
            <ScrollView className="px-4 my-6">
                <Text className="text-2xl font-psemibold text-white">Upload Video</Text>
                <FormField
                    title="Video Title"
                    placeholder="Input an eye cachy title.."
                    otherStyles="mt-5"
                    handleChangeText={(e) => setForm({ ...form, title: e })}
                />
                <View className="py-2 space-y-2">
                    <Text className="text-xl font-psemibold text-white">Upload Video</Text>
                    <TouchableOpacity>
                        {
                            form.video
                                ?
                                <View><Text>video ache</Text></View>
                                :
                                <View className="w-full h-40 px-4 bg-black-100 rounded-2xl border border-black-200 flex justify-center items-center">
                                    <View className="w-14 h-14 border border-dashed border-secondary-100 flex justify-center items-center">
                                        <Image
                                            source={icons.upload}
                                            resizeMode="contain"
                                            alt="upload"
                                            className="w-1/2 h-1/2"
                                        />
                                    </View>
                                </View>

                        }
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Create