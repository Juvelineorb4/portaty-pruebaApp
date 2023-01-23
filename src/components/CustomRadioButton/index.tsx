import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { Controller } from "react-hook-form";
import { RadioButton } from 'react-native-paper';


const index = ({ name = "", descriptioms, values, control, rules = {} }) => {


    const LetterFirstUp = (i: String) => {
        return i ? i[0].toUpperCase() + i.slice(1) : undefined;
    }

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
                <RadioButton.Group onValueChange={newValue => onChange(newValue)} value={value} >
                    {values.map((v, index) => (
                        <Pressable onPress={() => onChange(v.name)} style={styles.containerRadioButton} key={index}>
                            <RadioButton value={v.name}
                                color='rgb(37, 144, 219)'
                            />
                            <Text style={styles.textValue}>{LetterFirstUp(v.name)} - </Text>
                            <Text style={styles.textDescription}>{descriptioms[index]}</Text>
                        </Pressable >
                    ))}
                    {error && <Text style={{ color: "red", textAlign: "center" }}>{error.message || "Error"}</Text>}
                </RadioButton.Group>

            )}

        />
    )
}

export default index

const styles = StyleSheet.create({
    containerRadioButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    textValue: {
        fontWeight: "bold"
    },
    textDescription: {
        color: "gray"
    }
})