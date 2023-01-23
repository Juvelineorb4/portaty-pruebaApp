import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

// Props interface Button
interface PropsCustomButton {
    text: string,
    onPress: () => void
    type: string
    bgColor: ViewStyle
    fgColor: ViewStyle
}


const CustomButtom = ({ onPress, text, bgColor, fgColor }: PropsCustomButton) => {
    return (
        <Pressable onPress={onPress}
            style={[
                styles.container,
                bgColor && { backgroundColor: bgColor }
            ]}>
            <Text
                style={[
                    styles.text,
                    fgColor && { color: fgColor }
                ]}>
                {text}
            </Text>
        </Pressable>
    )
}

export default CustomButtom

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: "#2596be",
    },
    text: {
        color: "white"
    },

})