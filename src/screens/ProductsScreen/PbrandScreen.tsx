import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

//screens
import CardProduct from '../../components/CardProduct';

const HeaderBrandProduct = ({ headerTitle = undefined }: { headerTitle: String | undefined }) => {
    return (
        <>
            {headerTitle && <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: 1,
                marginHorizontal: 6,
                marginBottom: 7,
                borderBottomColor: '#C2C6CE'
            }}>
                <Text
                    style={{
                        fontWeight: "bold",
                        marginBottom: 5,
                        fontSize: 20
                    }}>
                    {headerTitle.toUpperCase()}
                </Text>
            </View>}
        </>
    )
}


const PbrandScreen = ({ items, name }) => {

    const navigation = useNavigation();

    const onProductPressed = (item) => {
        navigation.navigate("Product", {
            itemID: item.id,
            typeProductID: item.typeProductID
        })
    }
    return (
        <FlatList
            data={items}
            keyExtractor={(__, index) => index.toString()}
            numColumns={2}
            renderItem={({ item, index }) => (
                <Pressable onPress={() => onProductPressed(item)}>
                    <CardProduct item={item} />
                </Pressable>

            )}
            ListHeaderComponent={() => (
                <HeaderBrandProduct headerTitle={name} />
            )}
        />
    )
}

export default PbrandScreen

const styles = StyleSheet.create({})