import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'

// componentes personalizados
import ProductList from '../../components/ProductList'
import CardTypeP from '../../components/CardTypeP'
//amplify
import { API, graphqlOperation } from 'aws-amplify'
import * as queries from '../../graphql/queries'

const SellScreen = ({ navigation }) => {
    const [typeP, setTypeP] = useState<any[]>([])

    const fecthTypeP = async () => {
        try {
            const { data } = await API.graphql(
                graphqlOperation(
                    queries.listAProductTypes
                ))

            setTypeP(data.listAProductTypes.items)
        } catch (error) {
            console.warn(error.message);
        }
    }

    useEffect(() => {
        fecthTypeP()
    }, [])

    const onCardPressed = (typePId: String, typeP: String) => {
        navigation.navigate("SellProducts", {
            typePId: typePId,
            typeP: typeP
        })
    }

    return (
        <FlatList
            data={typeP}
            keyExtractor={(__, index) => index.toString()}
            renderItem={({ item, index }) => (
                <Pressable style={{ flex: 1 }} onPress={() => onCardPressed(item.id, item.name)}>
                    <CardTypeP item={item} />
                </Pressable>
            )}
            numColumns={2}
            columnWrapperStyle={{
                justifyContent: "space-around",
            }}
            contentContainerStyle={{
                paddingHorizontal: 5
            }}
        />
    )
}

export default SellScreen

const styles = StyleSheet.create({
    root: {
        padding: 10
    }
})