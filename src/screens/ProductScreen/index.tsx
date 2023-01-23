import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity, Pressable, FlatList, RefreshControl } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';

//modal
import FilterModal from '../../components/FilterModal';
import ProductAvModal from '../../components/ProductAvModal'
import CardProductAvalaible from '../../components/CardProductAvalaible'
//amplify 
import { API, graphqlOperation } from 'aws-amplify'
import * as queries from '../../graphql/queries'


const Header = ({ product, setShowModal }) => {
    return (
        <View style={styles.productContainer}>
            {/* product Selected */}
            {/* title pruduct */}
            <Text style={styles.textTitle} >{product.title}</Text>
            {/* Image */}
            <Image
                source={{ uri: product?.images && product?.images[0] }}
                style={styles.imageContainer}
            />

            <View style={{ width: '100%', paddingHorizontal: 5 }}>
                {/* Btn Filter */}
                <TouchableOpacity onPress={() => setShowModal(true)}>
                    <View style={styles.button}>
                        <FontAwesome name='filter' size={18} color="white" />
                        <Text style={styles.buttonText}>Filter</Text>
                    </View>
                </TouchableOpacity>
                {/* Show List Avalaible */}
                <View style={styles.showListView}>
                    <Text style={styles.showListText}>Showing 298 approved listings</Text>
                </View>
                {/* Show Text Button filters select */}
                {true && <View style={styles.filtersContainer}>
                    <TouchableOpacity style={styles.tagFilter}>
                        <Text style={styles.tagText}>Carrier</Text>
                        <FontAwesome name='remove' size={18} color='gray' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tagFilter}>
                        <Text style={styles.tagText}>Condition</Text>
                        <FontAwesome name='remove' size={18} color='gray' />
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.tagFilter}>
                        <Text style={styles.tagText}>Color</Text>
                        <FontAwesome name='remove' size={18} color='gray' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tagFilter}>
                        <Text style={styles.tagText}>Storage</Text>
                        <FontAwesome name='remove' size={18} color='gray' />
                    </TouchableOpacity>
                </View>}
            </View>
        </View>
    )
}


const ProductScreen = ({ route }) => {
    //destructuramos a route
    const { params } = route
    const { itemID, productTypeID } = params

    const [pType, setPtype] = useState<any[]>([])
    const [product, setProduct] = useState<any[]>([])

    //modal
    const [showModal, setShowModal] = useState(false)
    const [showPModal, setShowPModal] = useState(false)

    const fecthPtype = async () => {
        const result = await API.graphql(
            graphqlOperation(
                queries.getAProductType,
                {
                    id: productTypeID
                }
            )
        )

        setPtype(result.data.getAProductType)
    }

    const fecthPhone = async () => {
        const { data } = await API.graphql(
            graphqlOperation(
                queries.getAPhone,
                {
                    id: itemID
                }
            )
        )
        setProduct(data.getAPhone)

    }


    useEffect(() => {
        if (!itemID && !productTypeID) return
        fecthPtype();
    }, [route])

    useEffect(() => {
        if (!pType?.name) return;
        switch (pType?.name) {
            case "phone":
                fecthPhone()
                break;

            default:
                break;
        }
    }, [pType])

    useEffect(() => {
        console.log(params);
    }, [])


    return (
        <>
            <FlatList
                data={[{}]}
                keyExtractor={(__, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Pressable onPress={() => setShowPModal(true)}>
                        <CardProductAvalaible />
                    </Pressable>
                )}
                ListHeaderComponent={() => <Header product={product} setShowModal={setShowModal} />}
                style={{
                    backgroundColor: "white"
                }}
            />
            <FilterModal showModal={showModal} setShowModal={setShowModal} />
            <ProductAvModal showPModal={showPModal} setShowPModal={setShowPModal} />
        </>

    )
}

export default ProductScreen

const styles = StyleSheet.create({
    productContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    textTitle: {

    },
    imageContainer: {
        height: 250,
        width: 250,
        resizeMode: "contain"
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#2196F3',
        marginVertical: 5,
    },
    buttonText: {
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        color: 'white',

    },
    showListView: {
        backgroundColor: 'rgba(37, 144, 219,0.3)',
        padding: 16,
        borderRadius: 5,

    },
    showListText: {
        textAlign: 'center',
        color: '#17401e',
    },
    filtersContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    tagFilter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightblue',
        borderRadius: 15,
        paddingHorizontal: 5,
        backgroundColor: 'rgba(37, 144, 219,0.3)',
        marginRight: 2

    },
    tagText: {
        marginRight: 2
    }

})