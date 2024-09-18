import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';

const TripComponent = () => {
    const router = useRouter()
    return (
        <View style={styles.trip_overview}>
            <Ionicons name="location" size={30} color={Colors.BLACK} />
            <Text style={styles.trip_heading}>No trip planned yet!</Text>
            <Text style={{
                fontSize: 18, textAlign: 'center', fontFamily: 'outfit', color: Colors.GRAY
            }}>Look's Like it's time to plan a new travel experience! Get started below.</Text>
            <TouchableOpacity style={styles.trip_btn} onPress={() => router.push('/create-trip/searchField')}>
                <Text style={{ fontFamily: 'outfit-medium', fontSize: 18, color: Colors.WHITE }}>Start A New Trip</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TripComponent

const styles = StyleSheet.create({
    trip_overview: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: 30,
    },
    trip_heading: {
        fontSize: 24,
        fontFamily: 'outfit-semibold'
    },
    trip_btn: {
        padding: 20,
        paddingHorizontal: 60,
        backgroundColor: Colors.BLACK,
        borderRadius: 18,
        marginTop: 20
    }
})