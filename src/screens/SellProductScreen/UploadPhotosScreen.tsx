import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'


const UploadPhotosScreen = ({ control }) => {
    return (
        <View>
            <CustomInput
                control={control}
                name="image"
                rules={{ required: 'image is Required' }}
                placeholder={"Image"}
            />
        </View>
    )
}

export default UploadPhotosScreen

const styles = StyleSheet.create({})