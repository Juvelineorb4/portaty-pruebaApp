import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { Controller } from "react-hook-form";

interface PropsPicker {
    name: string,
    control: Control<FieldValues, any>
    rules: {}
    items: [object] | undefined
    styled: {}
    isName: boolean
}


const CustomPicker = ({ name = "", control, rules = {}, items = undefined, styled = {}, isName = true }: PropsPicker) => {


    const LetterFirstUp = (i: String) => {
        return i ? i[0].toUpperCase() + i.slice(1) : undefined;
    }
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <View style={[{ flex: 1 }, styled]}>
                    {isName && <Text style={styles.title}>{LetterFirstUp(name)}</Text>}
                    <View style={[styles.picker, error && { borderColor: "red" }]} >
                        <Picker
                            selectedValue={value}
                            onValueChange={onChange}
                        >
                            <Picker.Item
                                label={`----${name}----`}
                                value={null}
                            />
                            {items && items.map((item, index) => (
                                <Picker.Item
                                    label={LetterFirstUp(item.name)}
                                    value={item.id}
                                    key={index.toString()}
                                />
                            ))}

                        </Picker>
                    </View>
                    {error && <Text style={{ color: "red", alignSelf: "stretch" }}>{error.message || "Error"}</Text>}
                </View>
            )}

        />



    )
}

export default CustomPicker

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        padding: 5,
    },
    picker: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#cccccc',
        overflow: "hidden",

    }
})