import { StyleSheet, Text, View, Image, FlatList, Pressable, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ProductList = ({ items }) => {
    const navigation = useNavigation();
    const onSelectProductPressed = ({ id, name }: { id: String, name: String }) => {
        navigation.navigate("Products", {
            category: 'typeProduct',
            subCategory: {
                id,
                name
            }
        })
    }
    return (
        <View>
            {
                items.map((item, index) => (
                    <Pressable key={index} onPress={() => onSelectProductPressed(item)}>
                        <View style={parseInt(index + 1) % 2 == 0 ? styles.row : styles.rowInverse}>
                            {/* Imagen */}
                            <Image style={styles.image} source={{ uri: item.image }} />
                            {/* Title */}
                            <View style={styles.container}>
                                <Text>{item.name.toUpperCase()}</Text>
                            </View>
                        </View>
                    </Pressable>
                ))
            }
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#d1d1d1',
        backgroundColor: 'white',
        height: 150,
        overflow: 'hidden',
    },
    rowInverse: {
        flexDirection: 'row-reverse',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#d1d1d1',
        height: 150,
        overflow: 'hidden',
        marginBottom: 5,
        backgroundColor: 'white',
    },
    image: {
        flex: 3,
        width: 200,
        resizeMode: 'cover',

    },
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    }
})