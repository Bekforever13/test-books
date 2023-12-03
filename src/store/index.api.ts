import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const api = createApi({
	reducerPath: 'test',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_APP_API_URL,
		prepareHeaders: headers => {
			const key = localStorage.getItem('key')!
			const sign = localStorage.getItem('sign')!
			headers.set('key', key)
			headers.set('sign', sign)
			return headers
		},
	}),
	refetchOnFocus: true,
	tagTypes: ['books', 'search_books'],
	endpoints: build => ({
		default: build.query({
			query: () => 'default',
		}),
	}),
})
