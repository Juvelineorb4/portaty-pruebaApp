import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigators
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();

//screen
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen'
import ProductScreen from '../screens/ProductScreen'





const HomeStack = () => {
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
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Products"
                component={ProductsScreen}
                initialParams={{
                    category: undefined,
                    subCategory: undefined
                }}
            />
            <Stack.Screen
                name="Product"
                component={ProductScreen}
            />
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})