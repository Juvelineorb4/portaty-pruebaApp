import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

//amplify
import { Auth } from 'aws-amplify'

//react hook form
import { useForm } from "react-hook-form";

const NewPasswordScreen = ({ navigation, route }) => {
    // obtenemos el email meidante props que fuer0n emnviados del SignUpScreen
    // el Email se guarda como valor predetermiando del formulario en el valor email
    const { control, handleSubmit, watch } = useForm({ defaultValues: { email: route?.params?.username } })
    // Observamos el email de manera global 
    const email = watch('email')
    const pwd = watch('password');

    const onConfirmPressed = async (data) => {
        try {
            console.log(data);
            const result = await Auth.forgotPasswordSubmit(data.email, data.code, data.password)
            console.log(result)
            navigation.navigate("SignIn") // si la confirmacion fue aprovada dirigirse a la pagina de SignIn
        } catch (error) {
            Alert.alert('Oopss', error.message)
        }
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            horizontal={false}
        >
            <View style={styles.root}>
                <Text style={styles.title}>Confirm New Password</Text>
                {/* Username = Email */}
                <CustomInput
                    control={control}
                    name="email"
                    rules={{ required: "Email is required" }}
                    placeholder={"Enter your email"}
                    editable={false}
                    styled={styles.textInput}
                />
                {/* code */}
                <CustomInput
                    control={control}
                    name="code"
                    rules={{ required: "code is required" }}
                    placeholder={"Enter your confirmation code"}
                    styled={styles.textInput}
                />
                {/* New Password */}
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
                {/* ConfirmPassword */}
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
                {/* Buitton Confirm */}
                <CustomButton text="Confirm New Password" onPress={handleSubmit(onConfirmPressed)} />
            </View>
        </ScrollView>
    )
}

export default NewPasswordScreen

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
        marginVertical: 1
    }
})