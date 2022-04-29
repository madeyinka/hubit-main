import {ADD_CONTACT_ERROR, ADD_CONTACT_SUCCESS, ADD_CONTACT_LOADING} from '../../../constants/actionTypes'
import axiosInstance from '../../../helpers/axiosInstance'

export const submit = (formData) => (dispatch) => {
 dispatch({
     type: ADD_CONTACT_LOADING
 })
 axiosInstance().post('/contact/create', formData)
 .then(res => {
     dispatch({
         type:ADD_CONTACT_SUCCESS,
         payload:res.data
     })
 })
 .catch(err => {
     dispatch({
         type:ADD_CONTACT_ERROR,
         payload: err.response ? err.response.data : "CONNECTION ERROR"
     })
 })
}