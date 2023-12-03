import { api } from '../index.api'
import { TGetMyselfData, TSignUpDataType } from './auth.types'
import CryptoJS from 'crypto-js'

export const authApi = api.injectEndpoints({
	endpoints: builder => ({
		checkUser: builder.query<TGetMyselfData, void>({
			query: () => {
				const secret = localStorage.getItem('secret')
				localStorage.setItem(
					'sign',
					CryptoJS.MD5(`GET/myself${secret}`).toString()
				)
				return {
					url: '/myself',
					method: 'GET',
				}
			},
		}),
		signUp: builder.mutation<TGetMyselfData, TSignUpDataType>({
			query: body => {
				return {
					url: '/signup',
					method: 'POST',
					body,
				}
			},
		}),
	}),
})
