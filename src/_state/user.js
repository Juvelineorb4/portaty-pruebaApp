import { atom } from 'recoil';

const userAuthState = atom({
    key: "userAuth",
    default: undefined
})

export { userAuthState }