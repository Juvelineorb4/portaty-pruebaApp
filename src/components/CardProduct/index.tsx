import React from 'react'
import { Image, StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';


const CardProduct = ({ item }) => {

    const LetterFirstUp = (i: String) => {
        return i ? i[0].toUpperCase() + i.slice(1) : undefined;
    }

    return (
        <View style={[styles.root]}>
            {/* image */}
            <Image style={styles.image} source={{ uri: item.images[0] }} />
            {
                //item.OS == 'IOS' && <FontAwesome name='apple' size={18} />
            }
            {
                //  item.OS == 'ANDROID' && <FontAwesome name='android' size={20} />
            }
            <View style={styles.container}>
                {/* Title */}
                <Text style={[styles.title]} >
                    {item.name} - {LetterFirstUp(item.brand.name)}
                </Text>
                {/* Ratings */}
                <View style={[styles.ratingsContainer]}>
                    {item.avgRating > 0 ? [0, 0, 0, 0, 0].map((el, i) =>
                        <FontAwesome
                            key={i}
                            style={styles.star}
                            name={i < Math.round(item.avgRating) ? 'star' : 'star-o'}
                            size={18}
                            color="#e47911" />
                    ) : [0, 0, 0, 0, 0].map((el, i) =>
                        <FontAwesome
                            key={i}
                            style={styles.star}
                            name='star-o'
                            size={18}
                            color="#e47911" />
                    )}
                </View>
                {/* Price */}
                <Text style={styles.price} >${item.suggestedPrice !== null ? item.suggestedPrice : 0}</Text>
            </View>
        </View >
    )
}

export default CardProduct

const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginHorizontal: 5,
        marginVertical: 5,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 5,
        backgroundColor: 'white',
        maxWidth: 190,
        paddingBottom: 5

    },
    image: {
        height: 150,
        width: 150,
        resizeMode: 'contain'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3,
    },
    star: {
        margin: 1
    },
})