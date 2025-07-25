import axios from 'axios'
export type { AxiosRequestConfig as RequestConfig } from 'axios'
export type { AxiosResponse as ResponseConfig } from 'axios'
export type { AxiosError as ResponseErrorConfig } from 'axios'

export default axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json',
  },
})
