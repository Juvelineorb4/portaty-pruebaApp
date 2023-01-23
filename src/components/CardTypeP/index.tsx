import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CardType = ({ item }) => {

    const LetterFirstUp = (i: String) => {
        return i ? i[0].toUpperCase() + i.slice(1) : undefined;
    }
    return (
        <View style={styles.root}>
            <Image
                source={{ uri: item.image }}
                style={styles.image}

            />
            <Text style={styles.title}>{LetterFirstUp(item.name)}</Text>
        </View>
    )
}

export default CardType

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: 10,
        marginVertical: 5,
        paddinTop: 5,

        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 5,
        backgroundColor: 'white',
        maxWidth: 190,
        marginHorizontal: 5,
        overflow: "hidden"
    },
    image: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    title: {
        marginVertical: 5,
        fontSize: 18,
        textAlign: 'center',
    }
})