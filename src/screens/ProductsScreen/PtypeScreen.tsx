import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, Pressable } from 'react-native'
import React from 'react'

import CardProduct from '../../components/CardProduct'
import { useNavigation } from '@react-navigation/native'

const TypeProductList = ({ item }) => {
    const navigation = useNavigation()
    const onProductPressed = (i) => {
        navigation.navigate("Product", {
            itemID: i.id,
            productTypeID: i.productTypeID
        })
    }
    return (
        <View style={styles.root}>
            <View style={styles.headerContainer}>
                <View style={styles.headerLine} />
                <Text>
                    {item.brand.toUpperCase()}
                </Text>
                <View style={styles.headerLine} />
            </View>
            <FlatList
                data={item.data}
                keyExtractor={(__, index) => index.toString()}
                renderItem={({ item }) => (
                    <Pressable onPress={() => onProductPressed(item)}>
                        <CardProduct item={item} />
                    </Pressable>

                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <View style={styles.footerContainer} >
                <TouchableOpacity onPress={() => Alert.alert(`Show ${item?.brand} All`)}>
                    <Text style={styles.footerText}>  Show All  </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const PtypeScreen = ({ items }) => {
    return (
        <FlatList
            data={items}
            keyExtractor={(__, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            style={{
                marginBottom: 10
            }}
            renderItem={(item) =>
                <TypeProductList item={item.item} />
            }
            
        />
    )
}

export default PtypeScreen

const styles = StyleSheet.create({
    root: {

    },
    headerContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerLine: {
        flex: 1,
        backgroundColor: '#d1d1d1',
        height: 3,
        marginHorizontal: 10
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    footerText: {
        borderBottomWidth: 1,
        borderBottomColor: '#0366d6',
        color: '#0366d6'
    }
})