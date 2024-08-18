import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Link } from 'expo-router'

const RootLayout = () => {
    return (
        <View style={styles.container}>
            <Text>rootLayout</Text>
            <Link href="/profile" style={{ color: 'blue' }}>go to profile</Link>
        </View>
    )
}

export default RootLayout

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: '1',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
})