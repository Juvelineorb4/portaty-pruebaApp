import { StyleSheet, Text, View, Image, useWindowDimensions, Pressable, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'

// icono
import Ionicons from '@expo/vector-icons/Ionicons';

//componentes personalziado s
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import SocialSignInButtons from '../../components/SocialSignInButtons'

//amplify 
import { Auth } from 'aws-amplify'

//react hook form
import { useForm } from 'react-hook-form';


const SignInScreen = ({ navigation }) => {
    const { control, handleSubmit, watch } = useForm();

    // dimensiones de pantalla 
    const { width } = useWindowDimensions()

    // Ver campo email
    const email = watch('email')

    const [loading, setLoading] = useState(false);

    const onSignInPressed = async (data) => {
        // si esta en true quiere decir que esta cargando por lo tanto slate d ela rutina 
        if (loading) return;
        // si estaba en false pasa a caragnado, realiaza la rutina 
        setLoading(true);
        try {
            // esperamos respuesta de amplify Authentication pasnadole el username y password 
            const response = await Auth.signIn(data.email, data.password)
        } catch (error) {
            //  if (error.message === "User is not confirmed.") return navigation.navigate("ConfirmEmail", { email })
            Alert.alert('Oops', error.message);
        }
        // al terminar la rutina significa que ya no esta cargado por lo tanto pasa al false 
        setLoading(false);
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword")
    }
    const SignUpPressed = () => {
        navigation.navigate("SignUp")
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            horizontal={false}
        >
            <View style={styles.root}>
                <View style={styles.logo}>
                    <Ionicons name="logo-buffer" size={width * 0.5} />
                </View>

                <CustomInput
                    control={control}
                    name="email"
                    rules={{ required: 'Email is Required' }}
                    placeholder={"Email"}
                    styled={styles.textInput}
                />
                <CustomInput
                    control={control}
                    name="password"
                    rules={{
                        required: 'Password is Required',
                        minLength: { value: 3, message: "Password short" }
                    }}
                    placeholder={"Password"}
                    secureTextEntry
                />
                <CustomButton
                    text={loading ? "Loading..." : "Sign In"}
                    onPress={handleSubmit(onSignInPressed)}
                />



                <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY" />

                <SocialSignInButtons />

                <View style={{ flexDirection: "row", marginVertical: 5, padding: 15 }}>
                    <Text style={{ color: "gray" }}>Don't have account? </Text>
                    <Pressable onPress={SignUpPressed}>
                        <Text style={{ color: "#4765a9", fontWeight: "bold" }}>Create One</Text>
                    </Pressable>
                </View>

            </View>
        </ScrollView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 20,
    },
    logo: {
        maxHeight: 200,
        width: "70%",
        maxWidth: 300,
        alignItems: "center",
        marginBottom: 40
    },
    textInput: {
        marginVertical: 5
    }
})
