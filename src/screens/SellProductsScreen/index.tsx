import { StyleSheet, Text, View, Alert, FlatList, Pressable, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

// amplify 
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';

//componentes personalziafos
import CardProduct from '../../components/CardProduct';

const TypeProductList = ({ item, navigation }) => {

    const onProductPressed = (i) => {
        navigation.navigate("SellProduct", {
            item: i
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

const SellProductsScreen = ({ route, navigation }) => {
    const [items, setItems] = useState<any[]>([])
    const { params } = route
    const { typePId, typeP } = params

    const fecthPtype = async () => {
        try {
            switch (typeP) {
                case "phone":
                    const { data } = await API.graphql(graphqlOperation(queries.listAPhones))
                    const { listAPhones } = data
                    const { items } = listAPhones
                    let arrayNew: any[] = [] // arreglo que tendra el nuevo formato 
                    items.map(r => { // recorremo el resultado de la base de datos
                        let encontroMarca = false
                        arrayNew.map(a => {  // recorremos el array que tenemos 
                            if (r.brand.name == a.brand) { // si existe la marca en el arreglo neuvo 
                                a.cont = a.cont + 1 // contamos uno 
                                encontroMarca = true // se encontro 
                                a.data = [...a.data, { ...r }] // se hace un psuh del elemento  econtrado 
                                return;
                            }
                        })
                        if (!encontroMarca) { // si no existe la marca quiere decir que no se encontro 
                            arrayNew.push({ // enconces se crea la amrca nueva 
                                brand: r.brand.name,
                                cont: 1,
                                data: [r]
                            })
                        }
                    })
                    setItems(arrayNew)
                    break;
                case "lapto":
                    Alert.alert("seleciono a lapto")
                    break;
                default:
                    break;
            }

        } catch (error) {
            Alert.alert(error.message)
        }
    }

    useEffect(() => {
        if (!typePId && !typeP) navigation.goBoack()
        fecthPtype();
    }, [])


    return (
        <FlatList
            data={items}
            keyExtractor={(__, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            style={{
                marginBottom: 10
            }}
            renderItem={(item) =>
                <TypeProductList item={item.item} navigation={navigation} />
            }

        />
    )
}

export default SellProductsScreen

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