import { AsyncStorage } from 'react-native'
const resolveStorage = () => {
    if (typeof localStorage !== 'undefined') {
        return localStorage
    } else if (typeof AsyncStorage !== 'undefined') {
        return AsyncStorage
    }
    return null
}
const storage = resolveStorage()

const getToken = async () => {
    await storage.getItem('token')
}

const setToken = async (token) => {
    await storage.setItem('token', token)
}
const initialState = getToken()
    .then(token => token)

export const token = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            setToken(action.payload)
                .then(() => {
                    console.log(action.payload)
                })
            return action.payload
        case 'LOGOUT':
            storage.removeItem('token')
            return null
        default:
            return state
    }
}