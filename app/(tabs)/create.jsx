import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import FormField from "../../components/FormField"
import { icons } from '../../constants'
import { Video, resizeMode } from 'expo-av'
import CustomButton from '../../components/CustomButton'
import * as ImagePicker from 'expo-image-picker';


const Create = () => {
    const [uploading, setUploading] = useState(false)
    const [form, setForm] = useState({
        title: "",
        video: null,
        thumbnail: null,
        prompt: ""
    })

    // Request for media library permissions
    const requestPermission = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need media library permissions to make this work!');
        }
    };

    const picker = async (selectType) => {
        await requestPermission();

        let result = await ImagePicker.launchImageLibraryAsync({
            quality: 1,
            mediaTypes: selectType === "image" ? ImagePicker.MediaTypeOptions.Images : ImagePicker.MediaTypeOptions.Videos,
        });

        if (!result.canceled) {
            if (selectType === "image") {
                setForm({ ...form, thumbnail: result.assets[0] })
            }

            if (selectType === "video") {
                setForm({ ...form, video: result.assets[0] })
            }
        } else {
            alert('You did not select any image.');
        }
    }

    const submit = () => {
        console.log(form);
    }


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
                    <TouchableOpacity onPress={() => picker("video")}>
                        {
                            form.video
                                ?
                                <Video
                                    source={{ uri: form.video.uri }}
                                    resizeMode="contain"
                                    className="w-full h-64 rounded-2xl"
                                    useNativeControls
                                    isLooping
                                />
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
                <View className="py-2 space-y-2">
                    <Text className="text-xl font-psemibold text-white">Upload Thumbnail</Text>
                    <TouchableOpacity onPress={() => picker("image")}>
                        {
                            form.thumbnail
                                ?
                                (
                                    <View>
                                        <Image
                                            source={{ uri: form.thumbnail.uri }}
                                            resizeMode='contain'
                                            className="w-full h-64 rounded-2xl"
                                        />
                                    </View>
                                )
                                :
                                <View className="w-full h-20 px-4 bg-black-100 rounded-2xl border border-black-200 flex-row justify-center items-center">
                                    <View className="w-10 h-10 flex justify-center items-center">
                                        <Image
                                            source={icons.upload}
                                            resizeMode="contain"
                                            alt="upload"
                                            className="w-1/2 h-1/2"
                                        />
                                    </View>
                                    <Text className="text-white font-psemibold">Choose A Thumbnail</Text>
                                </View>
                        }
                    </TouchableOpacity>
                </View>
                <View>
                    <FormField
                        title="AI Prompt"
                        placeholder="Input your prompt"
                        otherStyles="mt-5"
                        handleChangeText={(e) => setForm({ ...form, prompt: e })}
                        value={form.prompt}
                    />
                </View>
                <View>
                    <CustomButton
                        title="Upload Video"
                        handlePress={submit}
                        containerStyles='mt-5'
                        isLoading={uploading}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Create