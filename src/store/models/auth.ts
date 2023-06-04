import { createModel } from '@rematch/core'
import { RootModel } from './models'
import { Service } from '@/pages/api/Service'
import axios from 'axios'
import { redirect } from 'next/dist/server/api-utils';
import { error } from '../../constants/types';

const $api = new Service(process.env.NEXT_API_BASE_URL || '')
export interface ICredentials {
  email: string
  password: string
}

export interface IRegister {
  email: string
  password: string
  name: string
  passwordConfirm: string
}

export interface IAuthState {}

const state: IAuthState = {}

export const auth = createModel<RootModel>()({
  name: 'auth',

  state,

  reducers: {},

  effects: dispatch => ({
    async login(credentials: ICredentials) {
      const response = await $api.post('/api/auth', credentials)
      console.log(response.data);
      console.log(response);
      const { data } = response
      if (response.error) return null
      return {
        email: data.user.email,
        password: data.user.password,
        name: data.user.name,
        message: response.message,
        statusCode: response.statusCode,
        token: data.token
      }
    },

    async register (payload: IRegister) {
      const response = await $api.post('/api/register', payload)
      const { data } = response
      if (response.error) return null
      return {
        message: response.message,
        statusCode: response.statusCode,
        error: response.error
      }
    }
  })
})
