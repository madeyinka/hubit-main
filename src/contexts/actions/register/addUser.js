import { REGISTER_USER_LOADING, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from "../../../constants/actionTypes";
import axiosInstance from '../../../helpers/axiosInstance'

export const register = (formData) => (dispatch) => {
    dispatch({
        type:REGISTER_USER_LOADING
    })
    axiosInstance().post('client/new-user', formData)
    .then(res => {
        dispatch({
            type:REGISTER_USER_SUCCESS,
            payload:res.data
        })
    })
    .catch (err => {
        dispatch({
            type:REGISTER_USER_ERROR,
            payload:err.response ? err.response.data : "CONNECTION ERROR"
        })
    })
}