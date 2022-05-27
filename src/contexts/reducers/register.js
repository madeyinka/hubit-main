import { REGISTER_USER_LOADING, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from "../../constants/actionTypes";

const registerReducer = (state, {payload, type}) => {
    switch(type) {
        case REGISTER_USER_LOADING: {
            return {
                ...state,
                addUser: {
                    ...state.addUser,
                    error:null,
                    loading:true
                }
            }
        }

        case REGISTER_USER_SUCCESS: {
            return {
                ...state,
                addUser: {
                    ...state.addUser,
                    loading:false,
                    data:payload
                }
            }
        }

        case REGISTER_USER_ERROR: {
            return {
                ...state,
                addUser: {
                    ...state.addUser,
                    loading:false,
                    err:payload
                }
            }
        }

        default:
            return state
    }
}

export default registerReducer