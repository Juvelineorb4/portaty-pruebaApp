import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigators
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();

// Screens
//import CartFavScreen from '../screens/CartFavScreen'

const CartFavScreen = () => {
    return (
        <View>
            <Text>CartFavScreen</Text>
        </View>
    )
}

const FavoriteCartStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                cardStyle: {
                    backgroundColor: "#f9fbfc"
                }
            }}
        >
            <Stack.Screen
                name="CartFav"
                component={CartFavScreen}
            />
        </Stack.Navigator>
    )
}

export default FavoriteCartStack

const styles = StyleSheet.create({})