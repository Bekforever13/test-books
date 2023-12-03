import { authApi } from './auth/auth.api'
import { booksApi } from './books/books.api'

export const { useSignUpMutation, useCheckUserQuery } = authApi

export const {
	useGetBooksQuery,
	useFindBookFromOpenLibQuery,
	useCreateBookMutation,
	useDeleteBookMutation,
	useEditBookMutation,
	useSearchBooksQuery,
} = booksApi
