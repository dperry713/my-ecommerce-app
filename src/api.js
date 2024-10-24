import axios from 'axios'

const API_URL = 'https://your-api-endpoint.com'

export const api = {
  products: {
    getAll: () => axios.get(`${API_URL}/products`),
    getById: (id) => axios.get(`${API_URL}/products/${id}`),
  },
  auth: {
    login: (credentials) => axios.post(`${API_URL}/auth/login`, credentials),
    register: (userData) => axios.post(`${API_URL}/auth/register`, userData),
  },
  cart: {
    checkout: (cartItems) => axios.post(`${API_URL}/cart/checkout`, cartItems),
  },
}
