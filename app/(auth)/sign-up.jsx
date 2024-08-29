import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {

    const [form, setForm] = useState({
        email: "",
        password: "",
        username: ""
    })

    const [isSubmitting, setSubmitting] = useState(false)

    const submit = () => {

    }

    return (
        <SafeAreaView className="bg-primary flex-1">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className="w-full flex-1 justify-center px-4 my-6 ">
                    <Image
                        source={images.logo}
                        className="w-[115px] h-[34px]"
                        resizeMode='contain'
                    />

                    <Text className="text-white font-psemibold text-2xl mt-6">Register account to Aora.</Text>

                    <FormField
                        title='E-mail'
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                        placeholder="Enter Your Email"
                    />

                    <FormField
                        title="Username"
                        value={form.username}
                        handleChangeText={(e) => setForm({ ...form, username: e })}
                        otherStyles="mt-7"
                        keyboardType="username"
                        placeholder="Enter Your Username"
                    />

                    <FormField
                        title='Password'
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                        placeholder="Enter Your Password"
                    />

                    <CustomButton
                        title="Submit"
                        containerStyles="mt-7"
                        handlePress={submit}
                        isLoading={isSubmitting}
                    />
                    <View className="justify-center items-center flex flex-row gap-2 mt-4">
                        <Text className="text-gray-300 text-sm font-pmedium">Don't have an account?</Text>
                        <Link className='text-sm font-pmedium text-secondary' href="/sign-in">Sigin</Link>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp