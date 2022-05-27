/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import LandingLayout from '../../layouts/Landing'
import axiosInstance from '../../helpers/axiosInstance'

function LandingComponent() {
  const initialValue = {sender:"", email:"", unit:{}, subject:"", message:"", "client_id":process.env.REACT_APP_CLIENT_ID} 
  const [formValues, setFormValues] = useState(initialValue)
  const [units, setUnits] = useState([])
  const [services, setServices] = useState([])
  const [status, setStatus] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [contactBtn, setContactBtn] = useState('Send Message')

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

  useEffect(() => {
    if (services.length === 0) {
      axiosInstance().get('/service/pull?sortby=createdAt&orderby=desc&client_id='+process.env.REACT_APP_CLIENT_ID)
      .then(res => {
        if (!res.data.error){
          setServices(res.data.response)
        }
      })
    }
  }, [services])

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }

  const handleCategory = (e) => {
    const unit = units.find((item) => item._id === e.target.value)
    setFormValues({...formValues, "unit_name":unit.name, "unit_email":unit.email})
  }

  const validateForm = !formValues.sender?.length || !formValues.email?.length || !formValues.subject?.length

  const onSubmit = async (e) => {
    e.preventDefault()
    setContactBtn('Message Sending...')
    try {
      const resp = await axiosInstance().post('/contact/create', formValues)
      if (resp && resp.data.error) {
        setContactBtn('Send Message')
        setError(true)
        setMessage(resp.data.message)
      } else {
        setContactBtn('Send Message')
        setStatus(true)
        setMessage(resp.data.message)
        setFormValues(initialValue)
        setUnits([])
      }
    } catch (err) {
      setContactBtn('Send Message')
      setError(true)
      setMessage('Could not submit at this time')
    }
  }


  /* pricing form handling */
  const EMAIL_REGEX = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const NUM_REGEX = new RegExp('^[0-9]+$');


  const [firstname, setFirstname] = useState('')
  const [validFname, setValidFname] = useState(false)
  const [fnameFocus, setFnameFocus] = useState(false)

  const [lastname, setLastname] = useState('')
  const [validLname, setValidLname] = useState(false)
  const [lnameFocus, setLnameFocus] = useState(false)

  const [company, setCompany] = useState('')
  const [validComp, setValidComp] = useState(false)
  const [compFocus, setCompFocus] = useState(false)

  const [plan, setPlan] = useState('')

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)

  const [phone, setPhone] = useState('')
  const [validPhone, setValidPhone] = useState(false)
  const [phoneFocus, setPhoneFocus] = useState(false)

  const [pwd, setPwd] = useState()
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [pwd2, setPwd2] = useState()
  const [validPwd2, setValidPwd2] = useState(false)
  const [pwd2Focus, setPwd2Focus] = useState(false)

  const [msg, setMsg] = useState('')
  const [success, setSuccess] = useState(null)
  const [err, setErr] = useState(null)
  const [priceBtn, setPriceBtn] = useState('Sign Up Now')


  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  }, [email, EMAIL_REGEX])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd))
    setValidPwd2(pwd === pwd2)
  }, [pwd, pwd2, PWD_REGEX])

  useEffect(() => {
    setValidPhone(NUM_REGEX.test(phone))
  },[phone, NUM_REGEX])

  useEffect(() => {
    setValidFname(firstname !== "")
  }, [firstname])

  useEffect(() => {
    setValidLname(lastname !== "")
  }, [lastname])

  useEffect(() => {
    setValidComp(company !== "")
  },[company])



  const handlePriceForm = async (e) => {
    e.preventDefault()
    setPriceBtn('Sending...')
    const v1 = EMAIL_REGEX.test(email)
    const v2 = NUM_REGEX.test(phone)
    const v3 = PWD_REGEX.test(pwd)
    const v4 = !firstname?.length || !lastname?.length || !company?.length || !plan?.length
  
    if (!v1 || !v2 || !v3 || v4) {
      setMsg("Invalid Entry")
      return;
    }
    const data = {
      firstname:firstname, 
      lastname:lastname,
      email:email,
      phone:phone,
      password:pwd,
      company:company,
      plan:plan
    }

    try {
      const response = await axiosInstance().post('utility/new-client', data)
      if (response && response.data.error) {
        setPriceBtn('Sign Up Now')
        setMsg(response.data.message)
        setErr(true)
      } else {
        setPriceBtn('Sign Up Now')
        setMsg(response.data.message)
        setSuccess(true)
        setFirstname(''); setLastname(''); setEmail(''); setPwd(''); setPhone('')
        setCompany(''); setPwd2('')
      }
    } catch (err) {
        setErr(true)
        setMsg('Server error')
        setPriceBtn('Sign Up Now')
    }  
  }
  
  return (
    <LandingLayout 
      handleChange={handleChange}
      handleCategory={handleCategory}
      onSubmit={onSubmit}
      status={status}
      error={error}
      message={message}
      formValues={formValues}
      units={units}
      validateForm={validateForm}
      services={services}
      validEmail={validEmail}
      emailFocus={emailFocus}
      setEmailFocus={setEmailFocus}
      email={email}
      setEmail={setEmail}
      handlePriceForm={handlePriceForm} 
      pwd={pwd}
      pwd2={pwd2}
      setPwd={setPwd}
      setPwd2={setPwd2}
      validPwd={validPwd}
      validPwd2={validPwd2}
      pwdFocus={pwdFocus}
      pwd2Focus={pwd2Focus}
      setPwdFocus={setPwdFocus}
      setPwd2Focus={setPwd2Focus}
      plan={plan}
      setPlan={setPlan}
      phone={phone}
      setPhone={setPhone}
      validPhone={validPhone}
      phoneFocus={phoneFocus}
      setPhoneFocus={setPhoneFocus}
      firstname={firstname}
      lastname={lastname}
      setFirstname={setFirstname}
      setLastname={setLastname}
      validFname={validFname}
      validLname={validLname}
      fnameFocus={fnameFocus}
      setFnameFocus={setFnameFocus}
      lnameFocus={lnameFocus}
      setLnameFocus={setLnameFocus}
      company={company}
      setCompany={setCompany}
      validComp={validComp}
      compFocus={compFocus}
      setCompFocus={setCompFocus}
      success={success}
      err={err}
      msg={msg}
      priceBtn={priceBtn}
      contactBtn={contactBtn}
    />
  )
}

export default LandingComponent