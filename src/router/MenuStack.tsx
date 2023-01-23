import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigators
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();

//screens
import MenuScreen from '../screens/MenuScreen'
import SellScreen from '../screens/SellScreen'
import SellProductsScreen from '../screens/SellProductsScreen'
import SellProductScreen from '../screens/SellProductScreen'








const MenuStack = () => {
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
                name="Menu"
                component={MenuScreen}
            />
            <Stack.Screen
                name="Sell"
                component={SellScreen}
            />
            <Stack.Screen
                name="SellProducts"
                component={SellProductsScreen}
            />
            <Stack.Screen
                name="SellProduct"
                component={SellProductScreen}
            />

        </Stack.Navigator>
    )
}

export default MenuStack

const styles = StyleSheet.create({})