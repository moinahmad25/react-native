import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

const searchField = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Search',
            headerTitleStyle: {
                fontFamily: 'outfit-medium',
                fontSize: 24
            }
        })
    }, [])

    return (
        <View style={styles.search_container}>
            <Text>searchField</Text>
        </View>
    )
}

export default searchField

const styles = StyleSheet.create({
    search_container: {
        padding: 25,
        paddingTop: 80
    }
})