import { createSlice } from '@reduxjs/toolkit'

const key = localStorage.getItem('key')
const sign = localStorage.getItem('sign')

const initialState = {
	key: key || '',
	sign: sign || '',
}

const AuthSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {},
})
export const { reducer, actions } = AuthSlice
