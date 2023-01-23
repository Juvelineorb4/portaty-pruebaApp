import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

//componentes ppersonalziados 
import CustomButton from '../../components/CustomButton';

// recoil
import { useRecoilValue } from 'recoil';
import { userAuthState } from '../../_state/user';
// aws aplify
import { Auth } from 'aws-amplify';

const MenuScreen = ({ navigation }) => {
    const userAuth = useRecoilValue(userAuthState);


    const onSellPressed = () => {
        navigation.navigate("Sell")
    }

    const onForumPressed = () => {
        console.warn("Forums Pressed")
    }

    const onSignOut = () => {
        Auth.signOut()
    }

    return (
        <View style={styles.root}>
            {/* Conatainer contienen loa botones mostrados */}
            <View style={styles.container}>
                <TouchableOpacity onPress={onSellPressed} style={styles.itemContainer}>
                    <FontAwesome name='dollar' size={25} style={{ width: 35 }} />
                    <Text style={styles.textContainer}>Sell</Text>
                    <FontAwesome name='angle-right' size={20} />
                </TouchableOpacity>
                <View style={{ width: "100%", borderBottomWidth: 1, borderBottomColor: "lightgray" }}></View>
                <TouchableOpacity onPress={onForumPressed} style={styles.itemContainer}>
                    <FontAwesome name='comments-o' size={25} style={{ width: 35 }} />
                    <Text style={styles.textContainer}>Forums</Text>
                    <FontAwesome name='angle-right' size={20} />
                </TouchableOpacity>
            </View>
            {
                userAuth &&
                <Text
                    onPress={onSignOut}
                    style={{
                        width: "100%",
                        textAlign: "center",
                        marginTop: "auto",
                        color: "red",
                        marginVertical: 20,
                        fontSize: 20
                    }}>
                    Sign Out
                </Text>
            }
        </View>
    )
}

export default MenuScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    container: {
        marginVertical: 10,
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

})