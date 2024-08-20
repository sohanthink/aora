import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import FormField from '../../components/FormField'

const SignIn = () => {

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center px-4 my-6">
                    <Image
                        source={images.logo}
                        className="w-[115px] h-[34px]"
                        resizeMode='contain'
                    />

                    <Text className="text-white font-psemibold text-2xl mt-6">Log in to Aora.</Text>

                    <FormField
                        title='E-mail'
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                        placeholder="Enter Your Email"
                    />

                    <FormField
                        title='Password'
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                        placeholder="Enter Your Password"
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn