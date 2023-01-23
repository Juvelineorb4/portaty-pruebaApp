import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'



// screens
import PbrandScreen from './PbrandScreen';
import PtypeScreen from './PtypeScreen'
//compoents 

// amplify 
import { API, graphqlOperation } from 'aws-amplify'

import * as queries from '../../graphql/queries'

const valueCategory = ["carrier", "brand", "typeProduct"]

const ProductsScreen = ({ route }) => {
    const { params } = route
    const { category, subCategory } = params;

    // variable que gaurdare los datos obtebnidos 
    const [items, setItems] = useState<any[]>([])


    const fecthCarrier = async () => {
        try {

        } catch (error) {
            Alert.alert(error.message)
        }

    }
    const fecthBrand = async () => {
        let filter = {
            brandID: {
                eq: subCategory.id // filter priority = 1
            }
        };
        try {
            const result = await API.graphql({ query: queries.listAPhones, variables: { filter: filter } })
            setItems(result.data?.listAPhones.items)
        } catch (error) {
            Alert.alert(error.message)
        }


    }
    const fecthPtype = async () => {
        try {
            switch (subCategory.name) {
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
        switch (category) {
            case valueCategory[0]: // carrier
                fecthCarrier();
                break;
            case valueCategory[1]: //brand
                fecthBrand();
                break;
            case valueCategory[2]: // product type
                fecthPtype();
                break;
            default:
                throw new Error("Algo salio mal");
        }
    }, [])



    return (
        <View>
            {/* Nota v1: aqui se mostrara la vista dependiendo de lo selecioando en home Screen */}
            {/* 
                 1.Carriers Phone: mostrara un cojunto de listas identificados por marca y proveedor
                -y dichas lista mostrara los telefonos disponibles del proveedor y lista especifica
            */}
            {/* 
                2.Brand: mostrara una lista de todos los productos relacionados 
                con la marca elegida   
            */}

            {/* 
                3 typeProduct mostrara un conjunto de listas de todos los productos disponibles que seleciono
                el cliente, divididos por las marcas donde se encuentre en  existencia
            */}
            {
                category === valueCategory[0] ?
                    <View>
                        <Text>Algo ocurrio Carrier</Text>
                    </View> :
                    category === valueCategory[1] ? //brand
                        <PbrandScreen items={items} name={subCategory.name} />
                        :
                        category === valueCategory[2] ?
                            <PtypeScreen items={items} />
                            :
                            <View>
                                <Text>Algo ocurrio</Text>
                            </View>
            }
        </View>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({})