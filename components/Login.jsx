import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

const Login = () => {

  //defining router for traveling from one page to another with a button or any small interaction. It is different from traversing from one page to another pages

  const router = useRouter()

  return (
    <View>
      <Image source={require('./../assets/images/start_poster.png')} style={styles.loginPoster} />
      <View style={styles.container}>
        <Text style={styles.loginText}>AI Travel Planner</Text>
        <Text style={styles.subText}>Discover your next adventure effortlessly. Personalized itineraries at your fingertips. Travel smarter with AI-Driven insights.</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('auth/sign-in')}>
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  loginPoster: {
    width: '100%',
    height: 530
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
    textAlign: 'center',
    marginTop: 20
  },
  subText: {
    fontFamily: 'outfit',
    fontSize: 17,
    textAlign: 'center',
    color: Colors.GRAY,
    marginTop: 12
  },
  button: {
    backgroundColor: Colors.BLACK,
    borderRadius: 20,
    padding: 16,
    marginTop: '18%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'outfit'

  },
})