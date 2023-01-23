import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'
const index = () => {

    const onSignInFacebook = () => {
        console.warn("Sign In Facebook")
    }
    const onSignInGoogle = () => {
        console.warn("Sign In Google")
    }
    return (
        <>
            <CustomButton
                text="Sign In with Facebook"
                onPress={onSignInFacebook}
                bgColor="#E7EAF4"
                fgColor="#4765a9"

            />
            <CustomButton
                text="Sign In with Google"
                onPress={onSignInGoogle}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />
        </>
    )
}

export default index

const styles = StyleSheet.create({})