import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const Login = () => {
  return (
    <View>
      <Image source={require('./../assets/images/start_poster.png')} style={styles.loginPoster} />
      <View style={styles.container}>
        <Text style={styles.loginText}>AI Travel Planner</Text>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    loginPoster:{
        width: '100%',
        height: 450
    },
    container: {
        width: '100%',
        marginTop: -20,
        backgroundColor: Colors.WHITE,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '100%',
        padding: 20
    },
    loginText: {
        fontSize: 28,
        fontFamily: 'outfit-bold',
        textAlign: 'center'
    }
})