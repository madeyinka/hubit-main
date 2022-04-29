import { CLEAR_ADD_CONTACT } from "../../../constants/actionTypes";

export const clearContact = () => (dispatch) => {
    dispatch({
        type: CLEAR_ADD_CONTACT
    })
}

export default clearContact