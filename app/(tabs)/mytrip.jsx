import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors'
import TripComponent from '../../components/TripComponent/TripComponent';

const mytrip = () => {
    // list of trip for showing trip directly to this page
    const [trip, setTrip] = useState([])



    return (
        <View style={styles.main_container}>
            <View style={styles.trip_container}>
                <Text style={{ textTransform: 'capitalize', fontSize: 30, fontFamily: 'outfit-bold' }}>my trip</Text>
                <Ionicons name="add-circle" size={35} color="black" />
            </View>
            {
                trip.length === 0 ? <TripComponent /> : null
            }
        </View>
    )
}

export default mytrip

const styles = StyleSheet.create({
    main_container: {
        padding: 25,
        paddingTop: 60,
        height: '100%',
        backgroundColor: Colors.WHITE
    },
    trip_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})