import { atom } from 'recoil'

/*
este js estaran los statdos relacionados al manejo de la venta del producto
*/

//estado inicial del producto a vender 
const initialState = {
    productTypeID: undefined,
    productID: undefined,
    carrierID: undefined,
    storageID: undefined,
    colorID: undefined,
    model: "",
    price: 0,
    serialNumber: "",
    condition: "",
    description: "",
    batteryCondition: "",
    warranty: "",
    images: []
}

//formulario de completar la venta del producto
const formSellProductState = atom({
    key: "formSellProduct",
    default: initialState,
})

const productSellState = atom({
    key: "productSell",
    default: undefined
})


export { formSellProductState, productSellState }