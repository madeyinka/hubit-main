import React, {createContext, useReducer} from 'react'
import contactReducer from './reducers/contact'
import contactInitialState from './initialState/contactInitialState'
import registerInitialState from './initialState/registerInitialState'
import registerReducer from './reducers/register'

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) => {

    const [contactState, contactDispatch] = useReducer(contactReducer, contactInitialState)
    const [registerState, registerDispatch] = useReducer(registerReducer, registerInitialState)

    return  (<GlobalContext.Provider value={
        {
            contactState,
            contactDispatch,
            registerState,
            registerDispatch
        }
    }>{children}</GlobalContext.Provider>)
}