import { Dispatch, SetStateAction } from 'react'

export type TPropsModal = {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export type TBookData = {
	title: string
	author: string
	cover: string
	published: string
	pages: number
}
