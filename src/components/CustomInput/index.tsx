import { StyleSheet, Text, View, TextInput, ViewStyle } from 'react-native'
import React from 'react'
import { Controller } from "react-hook-form";
interface PropsTextInput {
    control: Control<FieldValues, any>
    rules: {}
    name: string
    placeholder: string
    secureTextEntry: boolean
    number: boolean
    styled: ViewStyle
}


const CustomInput = ({ control, rules = {}, name, placeholder, number = false, styled = {}, ...props }: PropsTextInput) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View style={[styles.container, error && { borderColor: "red" }, styled]}>
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            keyboardType={!number ? "default" : "decimal-pad"}
                            {...props}
                        />

                    </View>
                    {error && <Text style={{ color: "red", alignSelf: "stretch" }}>{error.message || "Error"}</Text>}
                </>
            )}
        />
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#e8e8e8",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
})