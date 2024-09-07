import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {

    const [showPassword, setshowPassword] = useState(false)

    return (
        <View className="flex justify-center items-center">
            <Text className="text-gray-200 text-base font-pmedium">{title}</Text>
            <View className="border-2 border-black-200 w-full rounded-xl bg-black-100 px-4 focus:border-secondary flex-row items-center">
                <TextInput
                    className="text-white text-base flex-1 font-psemibold h-full mb-5"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7D7D8D"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                    {...props}
                />
                <TouchableOpacity>
                    <Image source={icons.search} resizeMode='contain' className="h-5 w-5" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchInput