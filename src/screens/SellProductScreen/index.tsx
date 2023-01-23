import { StyleSheet, Text, View, ScrollView, Alert, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'


//react native paper
import { ProgressBar } from 'react-native-paper'

//Customn 
import CustomButton from '../../components/CustomButton'

//screens
import CreateItemScreen from './CreateItemScreen'
import UploadPhotosScreen from './UploadPhotosScreen'
import ReviewItemScreen from './ReviewItemScreen'

//recoil
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil'
import { userAuthState } from '../../_state/user'
import { formSellProductState, productSellState } from '../../_state/productSell'

//react hook form
import { useForm } from "react-hook-form";

// amplfiy 
import { DataStore, API } from 'aws-amplify'
import * as queries from '../../graphql/queries'
import { Phone } from '../../models'

const StepperHeader = ({ step, steps }: { step: number, steps: any[] }) => {
    return (
        <View style={[styles.container]}>
            <ProgressBar progress={step / steps.length} color={"#2596be"} style={{ height: 8 }} />
            <View style={{ flexDirection: "row" }}>
                {
                    steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <View style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                paddingVertical: 10,
                                borderBottomWidth: 1,
                                borderColor: "lightgray"

                            }}>
                                <Text style={{ textAlign: "center" }}>{step.name}</Text>
                            </View>
                        </React.Fragment>
                    ))
                }
            </View>
        </View>
    )
}
const StepperViews = ({ step, control }: { step: number }) => {
    return (
        <View style={styles.container}>
            {
                step === 1 ?
                    <CreateItemScreen control={control} />
                    :
                    step === 2 ?
                        <UploadPhotosScreen control={control} />
                        :
                        step === 3 ?
                            <ReviewItemScreen control={control} />
                            :
                            <View>
                                <Text>Error</Text>
                            </View>
            }
        </View>
    )
}
const StepperButtons = ({ step, steps, onNext, onBack }: { step: number, steps: any[], onNext: () => void, onBack: () => void }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                {step > 1 && < View >
                    <CustomButton
                        text='Back'
                        onPress={onBack}
                    />
                </View>}
                <View>
                    <CustomButton
                        text={steps[step - 1].text ? steps[step - 1].text : steps[step - 1].name}
                        onPress={(onNext)}
                    />
                </View>
            </View>
        </View >
    )
}

const steps = [
    {
        id: "1",
        name: "Create Item"
    },
    {
        id: "2",
        name: "Upload Photos"
    },
    {
        id: "3",
        name: "Review Item",
        text: "Finish Review"
    },
]
const SellProductScreen = ({ route, navigation }) => {
    const { params } = route
    const { item } = params
    //recoil statdos globales
    //usuario autenticado
    const userAuth = useRecoilValue(userAuthState);
    //formulario para la cventa del producto
    const [formData, setFormData] = useRecoilState(formSellProductState);
    //estado del productro a vender
    const [product, setProduct] = useRecoilState(productSellState)

    //useState
    const [activeStep, setActiveStep] = useState<any | number>(1);
    const [refScroll, setRefScroll] = useState<ScrollView | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    //fform Hook
    const { control, handleSubmit, watch, } = useForm({
        defaultValues: formData
    })

    //suscriptions para saber en que momento cambia un campo del formulario
    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            //si hay un cambio de algun valor del formulario actualziar la variable global
            if (type === "change") setFormData(value)
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    //useEfffect para modificar el state de product id and typeProduct, ademas que
    //guardara el producto a vender
    useEffect(() => {
        if (!route?.params) return
        setIsLoading(true)
        setProduct(route.params.item)
        setIsLoading(false)
    
        setFormData({
            ...formData,
            productTypeID: item.productTypeID,
            productID: item.id
        })
        return () => setProduct(undefined)
    }, [])



    const onNextPressed = (data) => {
        // Alert.alert(JSON.stringify(data))
        setActiveStep(Math.min(activeStep + 1, steps.length));
        refScroll?.scrollTo({ offSet: 0 });
    };

    const onBackPressed = () => {
        setActiveStep(Math.max(1, activeStep - 1));

    };

    //si se esta buscando un producto sale una barra de carga 
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>)
    }

    // si el producto no existe o es undefined o null
    if (!product) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "red" }}>Hay un error en la bsuqueda del producto</Text>
            </View>
        )
    }

    return (
        <ScrollView
            ref={(ref) => setRefScroll(ref)}
        >
            <View style={styles.root}>
                {userAuth ?
                    <>
                        {/* Header*/}
                        <StepperHeader
                            step={activeStep}
                            steps={steps}
                        />
                        {/* Views */}
                        <StepperViews step={activeStep} control={control} />
                        {/* Buttons */}
                        <StepperButtons
                            step={activeStep}
                            steps={steps}
                            onNext={handleSubmit(onNextPressed)}
                            onBack={onBackPressed}


                        />
                    </> :
                    <View >
                        <View >
                            <Text >Oops. You have not logged!!</Text>
                        </View>
                        <View >
                            <CustomButton
                                text='Login to Sell'
                                onPress={() => navigation.navigate("SignIn")}
                            />
                        </View>
                    </View>
                }
            </View>
        </ScrollView>
    )
}

export default SellProductScreen

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 5,
    },
    container: {
        marginBottom: 10
    }
})