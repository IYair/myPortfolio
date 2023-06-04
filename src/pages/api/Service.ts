import axios from 'axios'
import { IApiResponse, IGenericResponse } from '@/constants/types'

class Service {
  withDebug: boolean = false

  $axios: any = null

  baseURL: string = ''

  constructor(baseURL: string) {
    this.withDebug = process.env.NEXT_DEBUG && process.env.PRODUCTION !== 'true' ? true : false
    this.baseURL = baseURL

    this.$axios = axios.create({
      baseURL
    })

    const printLogger = (config: any) =>
      this.withDebug && this._logger(config.method, config.url, config.params || JSON.parse(JSON.stringify(config.data)))

    // Add a request interceptor
    this.$axios.interceptors.request.use(
      function (config: any) {
        printLogger(config)
        return config
      },
      function (error: any) {
        return Promise.reject(error)
      }
    )

    // Add a response interceptor
    this.$axios.interceptors.response.use(
      function (response: any) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        console.log(response);
        return response
      },
      function (error: any) {
        
        return Promise.reject({
          ...error
        })
      }
    )
  }

  createParams(params: string | string[][] | Record<string, string> | URLSearchParams | undefined = {}): string {
    return new URLSearchParams(params).toString()
  }

  async get(url: string, data = {}, multimedia = false): Promise<IApiResponse<any> | IGenericResponse<any, any>> {
    return this.request(url, data, 'get', multimedia)
  }

  async put(url: string, data = {}): Promise<IApiResponse<any> | IGenericResponse<any, any>> {
    return this.request(url, data, 'put')
  }

  async post(url: string, data: object = {}): Promise<IApiResponse<any> | IGenericResponse<any, any>> {
    return this.request(url, data, 'post')
  }

  async patch(url: string, data: object = {}): Promise<IApiResponse<any> | IGenericResponse<any, any>> {
    return this.request(url, data, 'patch')
  }

  async delete(url: string, data: object = {}): Promise<IApiResponse<any> | IGenericResponse<any, any>> {
    return this.request(url, data, 'delete')
  }

  async request(
    url: string,
    data = {},
    method: string,
    multimedia: boolean = false
  ): Promise<IApiResponse<any> | IGenericResponse<any, any>> {

    const returnValue: IApiResponse = {
      statusCode: undefined,
      error: false,
      message: '',
      data: {},
      errors: []
    }

    try {
      const response = await this.$axios({
        url,
        data,
        method,
        responseType: multimedia ? 'blob' : 'json'
      })

      returnValue.message = response.data.message || ''
      returnValue.statusCode = response.data.statusCode
      returnValue.data = response.data.data
    } catch ( error : any) {
      
      // Always return the same structure
      returnValue.error = true
      returnValue.message = (error.message as string) || 'Something went wrong!'
      returnValue.statusCode = (error.statusCode as number) || error.response?.status || 500
    }

    return returnValue
  }

  _logger(method: string, url: string, params: object = {}) {
    if (!this.withDebug) return

    console.group('Debug initial request')
    console.log(`url: ${this.baseURL}${url}`)
    console.log(`method: ${method} `)
    console.log('params:')
    console.log(JSON.stringify(params, null, 4))
    console.groupEnd()
  }
}

export { Service }
