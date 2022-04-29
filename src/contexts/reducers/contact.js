import {ADD_CONTACT_ERROR, ADD_CONTACT_LOADING, ADD_CONTACT_SUCCESS, CLEAR_ADD_CONTACT} from '../../constants/actionTypes'

const contactReducer = (state, {payload, type}) => {
 switch(type) {
    case ADD_CONTACT_LOADING: {
         return {
             ...state,
             addContact: {
                ...state.addContact,
                error:null,
                loading:true
             }
         }
     }

    case ADD_CONTACT_SUCCESS: {
        return {
            ...state,
            addContact: {
                ...state.addContact,
                loading:false,
                data:payload
            }
        }
    }

    case ADD_CONTACT_ERROR: {
        return {
            ...state,
            addContact: {
                ...state.addContact,
                loading:false,
                err:payload
            }
        }
    }

    case CLEAR_ADD_CONTACT:{
        return {
            ...state,
            addContact: {
                error:null,
                loading:false,
                data:null
            }
        }
    }

    default:
        return state
 }
}

export default contactReducer