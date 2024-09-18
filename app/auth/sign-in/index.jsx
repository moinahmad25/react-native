import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors'
import { auth } from '../../../configs/FirebaseConfig.js'
import { signInWithEmailAndPassword } from 'firebase/auth'

const SingIn = () => {
    const navigation = useNavigation()
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const signInUser = () => {
        (!email && !password) && ToastAndroid.show("Please fill the necessary inputs!!!", ToastAndroid.LONG)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                router.replace('/mytrip')
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, " ", errorMessage)
            });
    }


    return (
        <View style={styles.signInContainer}>
            <Text style={styles.signInText}>Let's Sign You In</Text>
            <Text style={styles.sm_desc}>Welcome Back</Text>
            <Text style={styles.sm_desc}>You've been missed!</Text>
            <View style={{ marginTop: 50 }}>
                <Text style={styles.input_head}>Email</Text>
                <TextInput style={styles.input} onChangeText={(value) => setEmail(value)} inputMode='email' placeholder='Enter Your Email' />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.input_head}>Password</Text>
                <TextInput style={styles.input} secureTextEntry={true} onChangeText={(value) => setPassword(value)} placeholder='Enter Your Password' />
            </View>

            {/* buttons */}
            <TouchableOpacity onPress={signInUser} style={{ padding: 20, backgroundColor: Colors.BLACK, borderRadius: 20, marginTop: 50 }}>
                <Text style={{ color: Colors.WHITE, fontFamily: 'outfit', textAlign: 'center', fontSize: 16 }}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('auth/sign-up')} style={{ padding: 20, backgroundColor: Colors.WHITE, borderRadius: 20, marginTop: 20, borderWidth: 1 }}>
                <Text style={{ color: Colors.BLACK, fontFamily: 'outfit', textAlign: 'center', fontSize: 16 }}>Create A New Account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SingIn

const styles = StyleSheet.create({
    signInContainer: {
        flex: 1,
        padding: 25,
        paddingTop: 124,
        height: '100%',
        backgroundColor: Colors.WHITE
    },
    signInText: {
        fontFamily: 'outfit-bold',
        fontSize: 30,
    },
    sm_desc: {
        fontSize: 24,
        color: Colors.GRAY,
        marginTop: 16,
        fontFamily: 'outfit'
    },
    input_head: {
        fontFamily: 'outfit',
        fontSize: 14,
    },
    input: {
        width: '100%',
        padding: 16,
        borderWidth: 1,
        borderColor: Colors.BLACK,
        borderRadius: 20,
        marginTop: 8
    }
})