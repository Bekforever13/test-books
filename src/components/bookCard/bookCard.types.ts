import { TBook } from '@/store/books/books.types'
import { Dispatch, SetStateAction } from 'react'

export type TEditModalProps = {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
	book: TBook
}
