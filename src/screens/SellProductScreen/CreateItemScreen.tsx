import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomPicker from '../../components/CustomPicker'
import CustomInput from '../../components/CustomInput'
import CustomRadioButton from '../../components/CustomRadioButton'


//recoil 
import { productSellState } from '../../_state/productSell'
import { useRecoilValue } from 'recoil'

//aws amplify
import * as queries from '../../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'

const CreateItemScreen = ({ control }) => {
    const product = useRecoilValue(productSellState);

    const [carrier, setCarrier] = useState<any[]>([])
    const fetchCarrier = async () => {
        const customListACarriers = /* GraphQL */ `
        query ListDataHome{
            listACarriers{
                items{
                    id
                    name
                }
            }
        }
    `;
        const { data } = await API.graphql(graphqlOperation(
            customListACarriers
        ))
        setCarrier(data.listACarriers.items)
        // console.log(data.listACarriers.items);
    }

    useEffect(() => {
        fetchCarrier()
    }, [])


    return (

        <View style={styles.root}>
            {/* Title */}
            <Text style={{ fontSize: 20 }}>Create New</Text>
            <Text style={{ fontSize: 20, color: "gray", }}>{product?.name.toUpperCase()}</Text>
            {/* Image Product */}
            <Image
                source={{ uri: product?.images[0] }}
                style={styles.image}
                resizeMode="contain"
            />
            {/* Detalles del producto  */}
            <View style={styles.stages}>
                <View style={styles.stagesTitle}>
                    <Text style={styles.stagesText}>Detalles del Producto</Text>
                </View>
                <View style={styles.stagesContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <CustomPicker
                            name="carrier"
                            control={control}
                            rules={{ required: "carrier is required" }}
                            items={carrier}
                            styled={{ marginHorizontal: 2 }}
                        />
                        <CustomPicker
                            name="color"
                            control={control}
                            rules={{ required: "color is required" }}
                            items={[{ id: "black", name: "black" }, { id: "white", name: "white" }]}
                            styled={{ marginHorizontal: 2 }}
                        />

                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <CustomPicker
                            name="storage"
                            control={control}
                            rules={{ required: "storage is required" }}
                            items={[{ id: "64 GB", name: "64 GB" }]}
                            styled={{ marginHorizontal: 2 }}
                        />
                        <CustomPicker
                            name="model"
                            control={control}
                            rules={{ required: "model is required" }}
                            items={[{ id: "X", name: "X" }]}
                            styled={{ marginHorizontal: 2 }}
                        />
                    </View>
                </View>
            </View>

            {/* Precio establecido */}
            <View style={styles.stages}>
                <View style={styles.stagesTitle}>
                    <Text style={styles.stagesText}>Establece un Precio</Text>
                </View>
                <View style={styles.stagesContainer}>
                    <CustomInput
                        control={control}
                        name="price"
                        rules={{ required: 'Price is Required' }}
                        placeholder={"Price"}
                        number={true}
                    />
                </View>
            </View>
            {/* Imei */}
            <View style={styles.stages}>
                <View style={styles.stagesTitle}>
                    <Text style={styles.stagesText}>Ingrese Imei del Producto</Text>
                </View>
                <View style={styles.stagesContainer}>
                    <CustomInput
                        control={control}
                        name="serial-number"
                        rules={{ required: 'imei is Required' }}
                        placeholder={"Imei"}
                        number={true}
                    />
                </View>
            </View>
            {/* Condicion del product */}
            <View style={styles.stages}>
                <View style={styles.stagesTitle}>
                    <Text style={styles.stagesText}>Condiciones del Producto</Text>
                </View>
                <View style={styles.stagesContainer}>
                    <CustomRadioButton
                        control={control}
                        name="condition"
                        values={[{ id: 1, name: "new" }, { id: 2, name: "mind" },
                        { id: 3, name: "good" }, { id: 4, name: "fair" }]}
                        descriptioms={["New is new", "Mind is mind", "Good is Good", "Fair is fair"]}
                        rules={{ required: "Condition is required" }}
                    />
                </View>
            </View>
            {/* Descripcion del daño */}
            <View style={styles.stages}>
                <View style={styles.stagesTitle}>
                    <Text style={styles.stagesText}>Descripcion del daño</Text>
                </View>
                <View style={styles.stagesContainer}>
                    <CustomInput
                        control={control}
                        name="description"
                        rules={{ required: "Description is required" }}
                        placeholder="Enter Description"
                        multiline={true}
                        numberOfLines={4}
                    />
                </View>
            </View>


        </View>
    )
}

export default CreateItemScreen

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        paddingHorizontal: 10
    },
    stages: {
        width: "100%",
    },
    stagesTitle: {
        backgroundColor: 'rgba(37, 144, 219,0.3)',
        padding: 16,
        borderRadius: 5,
    },
    stagesText: {
        textAlign: 'center',
    },
    stagesContainer: {
        marginVertical: 10
    },
    image: {
        height: 250,
        width: 250,
        marginVertical: 10
    }

})