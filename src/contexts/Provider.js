import React, {createContext, useReducer} from 'react'
import contactReducer from './reducers/contact'
import contactInitialState from './initialState/contactInitialState'

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) => {

    const [contactState, contactDispatch] = useReducer(contactReducer, contactInitialState)

    return  (<GlobalContext.Provider value={
        {
            contactState,
            contactDispatch
        }
    }>{children}</GlobalContext.Provider>)
}