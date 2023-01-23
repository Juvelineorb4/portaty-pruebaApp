import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigators
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();

//screens
import ProfileScreen from '../screens/ProfileScreen'




const ProfileStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                cardStyle: {
                    backgroundColor: "#f9fbfc"
                }
            }}>
            {/* Screen Principal */}
            <Stack.Screen
                name='Profile'
                component={ProfileScreen}
            />
        </Stack.Navigator>
    )
}

export default ProfileStack

const styles = StyleSheet.create({})