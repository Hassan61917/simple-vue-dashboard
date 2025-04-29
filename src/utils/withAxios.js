import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com'

const axiosClient = axios.create({
  baseURL,
  withCredentials: true,
})

axiosClient.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`;
  return config;
})

export default axiosClient
