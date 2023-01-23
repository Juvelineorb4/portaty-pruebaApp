import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

//componentes personalizado s
import CustomButton from '../../components/CustomButton'
import FontAwesome from '@expo/vector-icons/FontAwesome5';
//revoil
import { useRecoilValue } from 'recoil';
import { userAuthState } from '../../_state/user';

const ProfileScreen = ({ navigation }) => {
    const userAuth = useRecoilValue(userAuthState);

    //si el usuario no esta logeado aparecera un bottom que le permitira acceder a las pantallas de login
    const onToLoginPressed = () => {
        navigation.navigate("SignIn");
    }


    const onAddressPressed = async () => {
        try {
            // console.log(user.attributes)
        } catch (error) {
            // console.log(error.message)
        }

    }

    if (!userAuth) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 10 }}>
                <Text>Dont Login!!!</Text>
                <CustomButton
                    text='Go to Login'
                    onPress={onToLoginPressed}
                />
            </View>
        )
    }

    return (
        <ScrollView
            horizontal={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.root}>
                {/* iMAGEN Cargada */}
                <View style={styles.container}>
                    <Image
                        source={{ uri: "https://www.fillmurray.com/100/100" }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Text style={styles.username}>{userAuth.attributes?.name}</Text>
                    <Text>{userAuth.attributes?.email}</Text>
                </View>

                {/* menu de acceso  */}
                <Text style={styles.textTitle}>Account</Text>
                <View style={styles.container}>
                    <TouchableOpacity onPress={onAddressPressed} style={styles.itemContainer}>
                        <FontAwesome name='bell' size={25} style={{ width: 35 }} />
                        <Text style={styles.textContainer}>Push Notification</Text>
                        <FontAwesome name='angle-right' size={20} />
                    </TouchableOpacity>
                    <View style={{ width: "100%", borderBottomWidth: 1, borderBottomColor: "lightgray" }} />
                    <TouchableOpacity style={styles.itemContainer}>
                        <FontAwesome name='map-marker-alt' size={25} style={{ width: 35 }} />
                        <Text style={styles.textContainer}>Location</Text>
                        <FontAwesome name='angle-right' size={20} />
                    </TouchableOpacity>
                    <View style={{ width: "100%", borderBottomWidth: 1, borderBottomColor: "lightgray" }} />
                    <TouchableOpacity style={styles.itemContainer}>
                        <FontAwesome name='globe' size={25} style={{ width: 35 }} />
                        <Text style={styles.textContainer}>Lenguaje</Text>
                        <FontAwesome name='angle-right' size={20} />
                    </TouchableOpacity>
                </View>
                {/* Market */}
                <Text style={styles.textTitle}>Market</Text>
                <View style={styles.container}>
                    <TouchableOpacity onPress={onAddressPressed} style={styles.itemContainer}>
                        <FontAwesome name='poll-h' size={25} style={{ width: 35 }} />
                        <Text style={styles.textContainer}>My Products</Text>
                        <FontAwesome name='angle-right' size={20} />
                    </TouchableOpacity>
                    <View style={{ width: "100%", borderBottomWidth: 1, borderBottomColor: "lightgray" }} />
                    <TouchableOpacity style={styles.itemContainer}>
                        <FontAwesome name='shopping-bag' size={25} style={{ width: 35 }} />
                        <Text style={styles.textContainer}>My Shopping</Text>
                        <FontAwesome name='angle-right' size={20} />
                    </TouchableOpacity>
                    <View style={{ width: "100%", borderBottomWidth: 1, borderBottomColor: "lightgray" }} />
                    <TouchableOpacity style={styles.itemContainer}>
                        <FontAwesome name='comments-dollar' size={25} style={{ width: 35 }} />
                        <Text style={styles.textContainer}>My Sales</Text>
                        <FontAwesome name='angle-right' size={20} />
                    </TouchableOpacity>
                </View>
            </View >
        </ScrollView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    root: {
        padding: 10,
        alignItems: "center"
    },
    container: {
        alignItems: "center",
        backgroundColor: "white",
        width: "100%",
        paddingVertical: 5,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textContainer: {
        fontSize: 16,
        flex: 2
    },
    itemContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    username: {
        fontSize: 20
    },
    textTitle: {
        fontSize: 16,
        paddingVertical: 10,
        color: "gray",
        width: "100%",
        paddingHorizontal: 10
    }

})