import { StyleSheet, View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Constants from 'expo-constants'

//navigators
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

//routes
import BottomTabNav from './BottomTabNav'

// aws-amplify
import { Auth, Hub } from 'aws-amplify';

//recoil
import { userAuthState } from '../_state/user'
import { useRecoilState } from 'recoil'

//vistas de logins
import {
    SignInScreen,
    SignUpScreen,
    ConfirmEmailScreen,
    ForgotPasswordScreen,
    NewPasswordScreen
} from '../screens/LoginScreen'



const ShoppingScreen = () => {
    return (
        <View>
            <Text>ShoppingScreen</Text>
        </View>
    )
}




// router/index la raiz de la navegacion de esta app 
const Root = createStackNavigator();
const Routes = () => {
    const [userAuth, setUserAuth] = useRecoilState(userAuthState)

    const checkUserAuth = async () => {
        try {
            const result = await Auth.currentAuthenticatedUser({ bypassCache: true })
            setUserAuth(result);
        } catch (error) {
            console.log("AuthError: ", error.message)
            setUserAuth(null)
        }

    }

    // al caragr la apliacion se verifica si hay un usuario logeado
    useEffect(() => {
        checkUserAuth();
    }, [])


    //para esuchar que esta succdiendo con auth 
    useEffect(() => {
        const listener = data => {
            console.log("HubAuth: ", data.payload.event);
            if (data.payload.event === "signOut" || data.payload.event === "signIn") {
                checkUserAuth();
            }
        }
        Hub.listen("auth", listener)
        return () => { Hub.listen("auth", listener) }
    }, [])





    return (
        <NavigationContainer>
            <Root.Navigator
                screenOptions={{
                    headerTitleAlign: "center",
                    cardStyle: {
                        backgroundColor: "#f9fbfc"
                    }
                }}
                initialRouteName="BottomTabs"
            >

                {/* Bottom Tabs  ruta que coloca los bototnes de navegacion inferior*/}
                <Root.Screen
                    component={BottomTabNav}
                    name="BottomTabs"
                    options={{
                        headerShown: false
                    }}
                />
                {/* Ruta para acceder a la compra  */}
                <Root.Screen
                    name='Shopping'
                    component={ShoppingScreen}
                />
                {/* si no existe usuario crear las vvista para la gestion del login and register */}
                {
                    !userAuth &&
                    <>
                        {/* Login Screens */}
                        <Root.Screen
                            name="SignIn"
                            component={SignInScreen}
                        />
                        <Root.Screen
                            name="SignUp"
                            component={SignUpScreen}
                        />
                        <Root.Screen
                            name="ConfirmEmail"
                            component={ConfirmEmailScreen}
                        />
                        <Root.Screen
                            name="ForgotPassword"
                            component={ForgotPasswordScreen}
                        />
                        <Root.Screen
                            name="NewPassword"
                            component={NewPasswordScreen}
                        />
                    </>
                }


            </Root.Navigator>
        </NavigationContainer>
    )
}

export default Routes

const styles = StyleSheet.create({
    root: {
        paddingTop: Constants.statusBarHeight + 10
    }
})