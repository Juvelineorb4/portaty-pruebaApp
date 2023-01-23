import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'


//scrrens
import ImageCarousel from '../../components/ImageCarousel';
import CarrierList from '../../components/CarrierList';
import BrandList from '../../components/BrandList';
import ProductList from '../../components/ProductList';

//amplify
import { API, graphqlOperation } from 'aws-amplify';

//models 

import * as queries from '../../graphql/queries';

const HomeScreen = () => {
    const [imgCarousel, setImgCarousel] = useState<any[]>([])
    const [carrier, setCarrier] = useState<any[]>([])
    const [productType, setProductType] = useState<any[]>([])
    const [brand, setBrand] = useState<any[]>([])

    const fetchImgCarousel = async () => {
        try {
            const result = await API.graphql(graphqlOperation(queries.listAImageCarousels))
            setImgCarousel(result.data.listAImageCarousels.items)
        } catch (error) {
            Alert.alert(error.message)
        }
    }

    const fetchCarrier = async () => {
        try {
            const result = await API.graphql(graphqlOperation(queries.listACarriers))
            setCarrier(result.data.listACarriers.items)
        } catch (error) {
            Alert.alert(error.message)
        }
    }

    const fetchBrand = async () => {
        try {
            const result = await API.graphql(graphqlOperation(queries.listABrands))
            setBrand(result.data.listABrands.items)
        } catch (error) {
            Alert.alert(error.message)
        }
    }

    const fetchProductType = async () => {
        try {
            const result = await API.graphql(graphqlOperation(queries.listAProductTypes))
            setProductType(result.data.listAProductTypes.items)
        } catch (error) {

        }
    }



    useEffect(() => {
        fetchImgCarousel()
        fetchCarrier()
        fetchBrand()
        fetchProductType()
    }, [])






    return (
        <ScrollView>
            {
                imgCarousel.length > 0 ? <ImageCarousel items={imgCarousel} /> : <ActivityIndicator />
            }
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    {

                        carrier.length > 0 ? <CarrierList items={carrier} /> : <ActivityIndicator />
                    }
                </View>
                <View style={styles.itemContainer}>
                    {
                        brand.length > 0 ? <BrandList items={brand} /> : <ActivityIndicator />
                    }
                </View>
                <View style={styles.itemContainer}>
                    {
                        productType.length > 0 ? <ProductList items={productType} /> : <ActivityIndicator />
                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    itemContainer: {
        marginVertical: 5
    }
})