import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

//amplify
import { Auth } from 'aws-amplify'

//react hook form
import { useForm } from "react-hook-form";

const ConfirmEmailScreen = ({ navigation, route }) => {
    // obtenemos el email meidante props que fuer0n emnviados del SignUpScreen
    // el Email se guarda como valor predetermiando del formulario en el valor email
    const { control, handleSubmit, watch } = useForm({ defaultValues: { email: route?.params?.email } })
    // Observamos el email de manera global 
    const email = watch('email')

    // funcion que permite enviar una solicitud de confirmacion de email a aws Auth amplify
    const onConfirmPressed = async (data) => {
        try {
            const response = await Auth.confirmSignUp(data.email, data.code)
            console.log(response)
            navigation.navigate("SignIn") // si la confirmacion fue aprovada dirigirse a la pagina de SignIn
        } catch (error) {
            Alert.alert('Oopss', error.message)
        }
    }

    //  funcion para reenviar el codigo de confirmacion 
    const onResendCodePressed = async () => {
        try {
            const response = await Auth.resendSignUp(email);
            console.log(response);
            // en caso de reenviar el codigo enivar una alarta 
            Alert.alert('SUCESS', "code was resend to your Email")
        } catch (error) {
            Alert.alert('Oopss', error.message)
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
                <Text style={styles.title}>Confirm Sign Up</Text>
                <CustomInput
                    control={control}
                    name="email"
                    rules={{ required: "Email is required" }}
                    placeholder={"Enter your email"}
                    editable={false}
                />
                <CustomInput
                    control={control}
                    name="code"
                    rules={{ required: "code is required" }}
                    placeholder={"Enter your confirmation code"}
                />
                <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-evenly", marginVertical: 20 }}>
                    <View>
                        <Text style={styles.link} onPress={onResendCodePressed}>Resend code</Text>
                    </View>
                    <View>
                        <Text style={styles.link} onPress={onBackToSignInPressed}>Back to Sign in</Text>
                    </View>
                </View>
            </View>
        </ScrollView >
    )
}

export default ConfirmEmailScreen

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
    }
})