import React, {useContext, useEffect, useState} from 'react'
import LandingLayout from '../../layouts/Landing'
import {GlobalContext} from '../../contexts/Provider'
import {submit} from '../../contexts/actions/contact/addContact'
import axiosInstance from '../../helpers/axiosInstance'

function LandingComponent() {
  const initialValue = {sender:"", email:"", unit:{}, subject:"", message:"", "client_id":process.env.REACT_APP_CLIENT_ID} 
  const [formValues, setFormValues] = useState(initialValue)
  const [units, setUnits] = useState([])

  const {contactState:{addContact:{loading, data:{error, message}}}, contactDispatch} = useContext(GlobalContext)

  useEffect(() => {
    if (units.length === 0) {
      axiosInstance().get('/contact/unit/pull?sortby=createdAt&orderby=desc&client_id='+process.env.REACT_APP_CLIENT_ID)
      .then(res => {
        if (!res.data.error) {
          setUnits(res.data.response)
        }
      })
    }
  }, [units])

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }

  const handleCategory = (e) => {
    const unit = units.find((item) => item._id === e.target.value)
    setFormValues({...formValues, "unit_name":unit.name, "unit_email":unit.email})
  }

  const validateForm = !formValues.sender?.length || !formValues.email?.length || !formValues.subject?.length

  const onSubmit = (e) => {
    e.preventDefault()
    submit(formValues)(contactDispatch)   
    setFormValues(initialValue)
  }

  return (
    <LandingLayout 
      handleChange={handleChange}
      handleCategory={handleCategory}
      onSubmit={onSubmit}
      loading={loading}
      error={error}
      message={message}
      formValues={formValues}
      units={units}
      validateForm={validateForm}
    />
  )
}

export default LandingComponent