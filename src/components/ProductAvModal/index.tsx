import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button, ScrollView, Image } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'

const ProductAvModal = ({ showPModal, setShowPModal }) => {

    const navigation = useNavigation();

    // const onButtomBuyPressed = () => {
    //     setShowPModal(false);
    //     navigation.navigate("Shopping");
    // }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={showPModal}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setShowPModal(!showPModal);
                }}
            >
                <ScrollView style={styles.centeredView} horizontal={false} showsVerticalScrollIndicator={false}>
                    <View style={styles.modalView}>
                        {/* Button Buy Now and Title */}
                        <View style={{ flexDirection: 'row', borderBottomWidth: 1, paddingBottom: 10, borderBottomColor: '#d1d1d1', alignItems: 'center' }}>
                            <Pressable onPress={() => setShowPModal(false)}>
                                <FontAwesome name='remove' size={25} color='gray' />
                            </Pressable>

                            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>

                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>PIXEL 8</Text>
                            </View>
                            <View>
                                <Button title="Buy Now" onPress={() => { }} />
                            </View>
                        </View>
                        {/* vendor specifications */}
                        <View style={{ flexDirection: 'row', paddingTop: 10, width: '100%', borderBottomWidth: 1, borderBottomColor: '#d1d1d1', paddingBottom: 10 }}>
                            <View>
                                <FontAwesome
                                    name='user-circle-o'
                                    size={40}
                                    color='#2590db'
                                />
                            </View>

                            <View>
                                <Text style={{ textAlign: 'left', marginLeft: 2 }}>Adsystel C.A</Text>
                                <View style={[styles.ratingsContainer]}>
                                    {[0, 0, 0, 0, 0].map((el, i) =>
                                        <FontAwesome
                                            key={i}
                                            style={styles.star}
                                            name='star'
                                            size={18}
                                            color="#e47911" />
                                    )}
                                    <Text style={{ marginLeft: 5, color: '#a8a8a8' }}>Suba, Bogota - Colombia</Text>
                                </View>
                                <Text >• Member since Jan 2015</Text>
                            </View>
                        </View>
                        {/* Caorusel */}
                        <View style={{ alignItems: "center" }}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1587840178393-079769787b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' }}
                                style={{
                                    width: 150,
                                    height: 150
                                }}
                            />
                        </View>
                        <View style={{  flexDirection: 'row', paddingTop: 10, borderBottomWidth: 1, borderBottomColor: '#d1d1d1', paddingBottom: 10 }}>
                            <View style={{ borderRightWidth: 1, borderRightColor: '#d1d1d1', flex: 1 }}>
                                <View style={styles.textSpecs}>
                                    <Text style={{ fontSize: 18 }}>Specs</Text>
                                </View>
                                <View style={styles.textSpecs}>
                                    <Text >Condition</Text>
                                </View>
                                <View style={styles.textSpecs}>
                                    <Text >Carrier</Text>
                                </View>
                                <View style={styles.textSpecs}>
                                    <Text >Color</Text>
                                </View>
                                <View style={{ width: 70, height: 30, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text >Storage</Text>
                                </View>

                            </View>
                            <View style={{ flex: 3 }}>
                                <View style={styles.textSpecs}>
                                </View>
                                <View style={[styles.textSpecs, { paddingLeft: 5 }]}>
                                    <Text >Condition</Text>
                                </View>
                                <View style={[styles.textSpecs, { paddingLeft: 5 }]}>
                                    <Text >Carrier</Text>
                                </View>
                                <View style={[styles.textSpecs, { paddingLeft: 5 }]}>
                                    <Text >Color</Text>
                                </View>
                                <View style={{ width: 70, height: 30, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 5 }}>
                                    <Text >Storage</Text>
                                </View>
                            </View>
                        </View>
                        {/* features */}
                        <View style={{ paddingTop: 10, borderBottomWidth: 1, borderBottomColor: '#d1d1d1', paddingBottom: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Features</Text>
                        </View>

                    </View>
                </ScrollView>
            </Modal >
        </View >
    )
}

export default ProductAvModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.8)'

    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        // borderRadius: 20,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        overflow: 'hidden',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    star: {
        margin: 1
    },
    textSpecs: {
        borderBottomWidth: 1,
        borderBottomColor: '#d1d1d1',
        height: 30,
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
})