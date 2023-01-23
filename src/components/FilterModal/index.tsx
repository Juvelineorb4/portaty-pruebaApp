import { StyleSheet, Text, View, Modal, Alert, Pressable } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'

const FilterModal = ({ showModal, setShowModal }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setShowModal(!showModal);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30 }}>
                        <View style={styles.filters}>
                            <Text style={styles.modalText}>Carrier</Text>
                            <View style={styles.containerPicker}>
                                <Picker
                                    style={styles.picker}
                                    selectedValue={""}
                                    onValueChange={() => { }}
                                >
                                    <Picker.Item
                                        value={""}
                                        label="- - - -"
                                    />
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.filters}>
                            <Text style={styles.modalText}>Condition</Text>
                            <View style={styles.containerPicker}>
                                <Picker
                                    style={styles.picker}
                                    selectedValue={""}
                                    onValueChange={() => { }}
                                >
                                    <Picker.Item
                                        value={""}
                                        label="- - - -"
                                    />
                                </Picker>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30 }}>
                        <View style={styles.filters}>
                            <Text style={styles.modalText}>Color</Text>
                            <View style={styles.containerPicker}>
                                <Picker
                                    style={styles.picker}
                                    selectedValue={""}
                                    onValueChange={() => { }}
                                >
                                    <Picker.Item
                                        value={""}
                                        label="- - - -"
                                    />
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.filters}>
                            <Text style={styles.modalText}>Storage</Text>
                            <View style={styles.containerPicker}>
                                <Picker
                                    style={styles.picker}
                                    selectedValue={""}
                                    onValueChange={() => { }}
                                >
                                    <Picker.Item
                                        value={""}
                                        label="- - - -"
                                    />
                                </Picker>
                            </View>
                        </View>
                    </View>




                    <Pressable
                        style={[styles.buttonModal, styles.buttonClose]}
                        onPress={() => setShowModal(!showModal)}
                    >
                        <Text style={[styles.textStyle, { fontWeight: "bold" }]}>Confirm</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default FilterModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(255,255,255,0.8)'
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 10
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        textAlign: "center"
    },
    buttonModal: {
        borderRadius: 5,
        padding: 10,
    },
    filters: {
        width: 100,
        marginHorizontal: 5,
    },
    containerPicker: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#d1d1d1',
    },
    picker: {
        height: 50
    },
    itemPicker: {
        color: 'red'
    }
})