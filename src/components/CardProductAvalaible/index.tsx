import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const URI2 = 'https://images.unsplash.com/photo-1587840178393-079769787b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'


const CardProductAvalaible = () => {
    return (
        <View style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderColor: '#d1d1d1',
            borderRadius: 5,
        }}>
            {/* image */}
            <Image
                source={{ uri: URI2 }}
                style={[styles.productImage]}
            />
            {/* info */}
            <View >
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <View style={{ alignItems: 'flex-end', paddingHorizontal: 5 }}>
                        <Text>Adsystel C.A</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome name='map-marker' size={20} color='#2590db' />
                            <Text style={{ marginLeft: 5 }}>Suba, Bogota - Colombia</Text>
                        </View>
                        <View style={[styles.ratingsContainer]}>
                            {[0, 0, 0, 0, 0].map((el, i) =>
                                <FontAwesome
                                    key={i}
                                    style={styles.star}
                                    name='star'
                                    size={18}
                                    color="#e47911" />
                            )}
                        </View>
                        <View>
                            <Text style={styles.price}>$200</Text>
                        </View>
                    </View>
                    <FontAwesome
                        name='user-circle-o'
                        size={40}
                        color='#2590db'
                        style={{ marginRight: 5 }}
                    />
                </View>
                <Text>OTHER</Text>
            </View>
        </View>
    )
}

export default CardProductAvalaible

const styles = StyleSheet.create({
    productImage: {
        height: 150,
        width: 150,
        resizeMode: 'cover'
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3,
    },
    star: {
        margin: 1
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
})