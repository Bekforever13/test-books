import { api } from '../index.api'
import { ISearchBooksData, TEditBook, TGetBooksData } from './books.types'
import CryptoJS from 'crypto-js'

export const booksApi = api.injectEndpoints({
	endpoints: builder => ({
		getBooks: builder.query<TGetBooksData, void>({
			query: () => {
				const secret = localStorage.getItem('secret')
				localStorage.setItem(
					'sign',
					CryptoJS.MD5(`GET/books${secret}`).toString()
				)
				return { url: '/books' }
			},
			providesTags: ['books'],
		}),
		searchBooks: builder.query<ISearchBooksData, string>({
			query: search => {
				if (search.length) {
					const secret = localStorage.getItem('secret')
					localStorage.setItem(
						'sign',
						CryptoJS.MD5(`GET/books/${search}${secret}`).toString()
					)
					return `/books/${search}`
				} else {
					throw new Error('Error')
				}
			},
			providesTags: ['search_books'],
		}),
		createBook: builder.mutation<any, any>({
			query: body => {
				const secret = localStorage.getItem('secret')
				localStorage.setItem(
					'sign',
					CryptoJS.MD5(`POST/books${JSON.stringify(body)}${secret}`).toString()
				)
				return {
					url: '/books',
					method: 'POST',
					body,
				}
			},
			invalidatesTags: ['books'],
		}),
		deleteBook: builder.mutation<any, number>({
			query: id => {
				const secret = localStorage.getItem('secret')
				localStorage.setItem(
					'sign',
					CryptoJS.MD5(
						`DELETE/books/${id}${JSON.stringify({ id: id })}${secret}`
					).toString()
				)
				return {
					url: `/books/${id}`,
					method: 'DELETE',
					body: { id: id },
				}
			},
			invalidatesTags: ['books'],
		}),
		editBook: builder.mutation<any, TEditBook>({
			query: ({ status, id }) => {
				const secret = localStorage.getItem('secret')
				localStorage.setItem(
					'sign',
					CryptoJS.MD5(
						`PATCH/books/${id}${JSON.stringify({
							status: status,
							id: id,
						})}${secret}`
					).toString()
				)
				return {
					url: `/books/${id}`,
					method: 'PATCH',
				}
			},
			invalidatesTags: ['books'],
		}),
		findBookFromOpenLib: builder.query<any, any>({
			query: (body: string = '') => ({
				url: `https://openlibrary.org/search.json?title=${body}`,
			}),
		}),
	}),
})
