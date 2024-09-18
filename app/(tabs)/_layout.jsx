import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '../../constants/Colors'

export default function _layout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.BLACK
        }}>
            <Tabs.Screen name='mytrip' options={{
                tabBarLabel: "My Trip",
                tabBarIcon: ({ color }) => <FontAwesome6 name="location-arrow" size={24} color={color} />
            }} />
            <Tabs.Screen name='discover' options={{
                tabBarLabel: "Discover",
                tabBarIcon: ({ color }) => <FontAwesome name="globe" size={24} color={color} />
            }} />
            <Tabs.Screen name='profile' options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => <FontAwesome name="user-circle-o" size={24} color={color} />
            }} />
        </Tabs>
    )
}