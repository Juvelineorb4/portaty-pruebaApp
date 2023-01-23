import { StyleSheet, Text, View, Pressable, ScrollView, Alert, TabBarIOSItem } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'


//amplify 
import { Auth } from 'aws-amplify'
//react hook form
import { useForm } from "react-hook-form";

const EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
const SignUpScreen = ({ navigation }) => {
    const { control, handleSubmit, watch } = useForm()

    // La funcion es un hook que analiza e valor del campo seleccionado
    // con el fin de poder analziarlo de manera global 
    const pwd = watch('password');


    const onSignInPressed = () => {
        navigation.navigate("SignIn")
    }

    // funcion que permite enviar una solicitud de reguisistro al Auth amplify
    const onRegisterPressed = async (data) => {
        try {
            const { password, email, name } = data
            console.log(data)
            const response = await Auth.signUp({
                username: email,
                password,
                attributes: { name }
            })

            //  si el registro es Success se dirigi la la vsita de confirmacion de email y pasamos el imei mediante props
            console.log(response)
            navigation.navigate("ConfirmEmail", { email })
        } catch (error) {
            Alert.alert('Oops', error.message)
        }
    }

    const onTermsOfUsePressed = () => {
        console.warn("Terms of Use")
    }
    const onPrivacyPolicy = () => {
        console.warn("Privacy Policy")
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            horizontal={false}

        >
            <View style={styles.root}>
                <Text style={styles.title}>Create Account</Text>
                <CustomInput
                    control={control}
                    name="name"
                    rules={{
                        required: "Name is required",
                        minLength: {
                            value: 3,
                            message: "Min 3 characters"
                        },
                        maxLength: {
                            value: 24,
                            message: "Max 24 characters"
                        }
                    }}
                    placeholder={"Name"}
                    styled={styles.textInput}
                />
                <CustomInput
                    control={control}
                    name="email"
                    rules={{
                        required: "Email is required",
                        pattern: { value: EMAIL_REGEX, message: "Invalid Email" }
                    }}
                    placeholder={"Email"}
                    styled={styles.textInput}
                />
                <CustomInput
                    control={control}
                    name="password"
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Min 8 characters"
                        },
                    }}
                    placeholder={"Password"}
                    secureTextEntry
                    styled={styles.textInput}
                />
                <CustomInput
                    control={control}
                    name="password-repeat"
                    rules={{
                        required: "Password Repeat is required",
                        validate: value =>
                            value == pwd || 'Password do not match'
                    }}
                    placeholder={"Repeat Password"}
                    secureTextEntry
                    styled={styles.textInput}
                />

                <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)} />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>Term of Use</Text> and{' '}
                    <Text style={styles.link} onPress={onPrivacyPolicy}>Privacy Policy</Text>
                </Text>

                <SocialSignInButtons />



                <View style={{ flexDirection: "row", marginVertical: 5, padding: 15 }}>
                    <Text style={{ color: "gray" }}>Have account? </Text>
                    <Pressable onPress={onSignInPressed}>
                        <Text style={{ color: "#4765a9", fontWeight: "bold" }}>Sign In</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUpScreen

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
    text: {
        color: "gray",
        marginVertical: 10
    },
    link: {
        color: "orange"
    },
    textInput: {
        marginVertical: 5
    }
})