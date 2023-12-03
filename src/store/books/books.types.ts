export type TBook = {
	book: {
		id: number
		isbn: string
		title: string
		cover: string
		author: string
		published: number
		pages: number
	}
	status: 0
}

export type TSearchBook = {
	author: string
	cover: string
	isbn: string
	published: number
	title: string
}

export interface TGetBooksData {
	data: TBook[] | null
	isOk: boolean
	message: string
}
export interface ISearchBooksData {
	data: TSearchBook[] | null
	isOk: boolean
	message: string
}

export type TEditBook = {
	status: number
	id: number
}
