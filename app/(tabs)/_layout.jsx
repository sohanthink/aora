import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

import { icons } from '../../constants'


const TabIcon = ({ icon, focused, color, name }) => {
    return (
        <View className="justify-center items-center gap-1">
            <Image source={icon} resizeMode='contain' tintColor={color} className='w-6 h-6' />
            <Text style={{ color: color }} className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
                {name}
            </Text>
        </View>
    )
}


const TabLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#FFA001',
            tabBarInactiveTintColor: '#CDCDE0',
            tabBarStyle: {
                backgroundColor: '#161622',
                borderTopWidth: 1,
                borderTopColor: '#232533',
                height: 84
            }
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon name="Home" color={color} focused={focused} icon={icons.home} />
                    )
                }}
            />
            <Tabs.Screen
                name="bookmark"
                options={{
                    title: 'Bookmark',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon name="Bookmark" color={color} focused={focused} icon={icons.bookmark} />
                    )
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    title: 'Create',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon name="Create" color={color} focused={focused} icon={icons.plus} />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon name="Profile" color={color} focused={focused} icon={icons.profile} />
                    )
                }}
            />
        </Tabs>
    )
}

export default TabLayout