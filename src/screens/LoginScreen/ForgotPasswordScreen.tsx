import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'


//amplify
import { Auth } from 'aws-amplify'

//react hook form
import { useForm } from "react-hook-form";


const SignInScreen = ({ navigation }) => {
    const { control, handleSubmit } = useForm()

    const onSendPressed = async (data) => {
        try {
            const result = await Auth.forgotPassword(data.email)
            navigation.navigate("NewPassword", {
                username: data.email
            })
            console.log(result)
        } catch (error) {
            Alert.alert('Oops', error.message)
        }
    }

    const onBackToSignInPressed = () => {
        navigation.navigate("SignIn")
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            horizontal={false}
        >
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>

                <CustomInput
                    control={control}
                    name="email"
                    rules={{ required: 'Email is required' }}
                    placeholder={"Enter your Email"} />

                <CustomButton text="SEND" onPress={handleSubmit(onSendPressed)} />

                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-evenly", marginVertical: 20 }}>
                    <View>
                        <Text style={styles.link} onPress={onBackToSignInPressed}>Back to Sign in</Text>
                    </View>
                </View>
            </View>
        </ScrollView >
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 20
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#051C68",
        marginVertical: 20
    },
    link: {
        color: "orange"
    }
})