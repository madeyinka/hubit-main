import axios from 'axios'
const axiosInstance = () => {
    const baseURL = process.env.REACT_APP_BASE_URL
    const headers = {'Content-type':'application/json'}

    
    const axiosInstance = axios.create({
        baseURL:baseURL,
        headers
    })

    axiosInstance.interceptors.response.use(
        (response) =>
        new Promise((resolve, reject) =>{
            resolve(response)
        }),
        (error) => {
            if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error)
            }); 
            }
        }
    )
    return axiosInstance
}

export default axiosInstance
