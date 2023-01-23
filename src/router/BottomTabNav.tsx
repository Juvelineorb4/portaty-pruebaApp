import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigator tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


//nagigator stacks pricipales
import HomeStack from './HomeStack'
import MenuStack from './MenuStack'
import ProfileStack from './ProfileStack'
import FavoriteCartStack from './FavoriteCartStack'


//iconos
import FontAwesome from '@expo/vector-icons/FontAwesome'

// ruta d enavigeacion basada en tabs para la interaccion del usuario
const Tab = createBottomTabNavigator();
const BottomTabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeStack}
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" color={color} size={25} />
                    )
                }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileStack}
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" color={color} size={25} />
                    )
                }}
            />
            <Tab.Screen
                name="CartFavTab"
                component={FavoriteCartStack}
                options={{
                    title: "Cart",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="shopping-cart" color={color} size={25} />
                    )
                }}
            />
            <Tab.Screen
                name="MenuTab"
                component={MenuStack}
                options={{
                    title: "Menu",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="bars" color={color} size={25} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNav

const styles = StyleSheet.create({})