import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors'
import { auth } from '../../../configs/FirebaseConfig.js'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const SignUp = () => {
    const navigation = useNavigation();
    const router = useRouter()
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])


    const submitUserAuthentication = () => {
        (!fullName && !email && !password) && ToastAndroid.show("Please add all the fields before proceeding forward!", ToastAndroid.BOTTOM)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: fullName
                }).then(() => {
                    console.log('User profile updated with full name:', user.displayName);
                    router.replace('/mytrip');
                }).catch((error) => {
                    console.log("Error updating profile: ", error);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, " ", errorMessage)
            });
    }

    return (
        <View style={styles.signInContainer}>
            <Text style={styles.signInText}>Create A New Account</Text>
            <Text style={styles.sm_desc}>Start Your Journey with Us</Text>
            <View style={{ marginTop: 50 }}>
                <Text style={styles.input_head}>Full Name</Text>
                <TextInput style={styles.input} onChangeText={(value) => setFullName(value)} placeholder='Enter Your Name' />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.input_head}>Email</Text>
                <TextInput style={styles.input} inputMode='email' onChangeText={(value) => setEmail(value)} placeholder='Enter Your Email' />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.input_head}>Password</Text>
                <TextInput style={styles.input} secureTextEntry={true} onChangeText={(value) => setPassword(value)} placeholder='Enter Your Password' />
            </View>

            {/* buttons */}
            <TouchableOpacity onPress={submitUserAuthentication} style={{ padding: 20, backgroundColor: Colors.BLACK, borderRadius: 20, marginTop: 50 }}>
                <Text style={{ color: Colors.WHITE, fontFamily: 'outfit', textAlign: 'center', fontSize: 16 }}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('auth/sign-in')} style={{ padding: 20, backgroundColor: Colors.WHITE, borderRadius: 20, marginTop: 20, borderWidth: 1 }}>
                <Text style={{ color: Colors.BLACK, fontFamily: 'outfit', textAlign: 'center', fontSize: 16 }}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    signInContainer: {
        flex: 1,
        padding: 25,
        paddingTop: 116,
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