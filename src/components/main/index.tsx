import { FC, useState, Dispatch, SetStateAction } from 'react'
import { Button, Input, Spin } from 'antd'
import { BookModal } from '..'
import { ISearchBooksData } from '@/store/books/books.types'

type TProps = {
	numberOfBooks: number
	searchBook: string
	searchData: ISearchBooksData | undefined
	setSearchBook: Dispatch<SetStateAction<string>>
	isLoading: boolean
}

const MainHeading: FC<TProps> = ({
	numberOfBooks,
	searchBook,
	searchData,
	isLoading,
	setSearchBook,
}) => {
	const [open, setOpen] = useState(false)

	return (
		<div className='flex items-center justify-between'>
			<div className='text-4xl text-white'>
				You've got <span className='text-[#6200EE]'>{numberOfBooks} book</span>
			</div>
			<div className='flex items-center gap-6'>
				<div className='flex flex-col w-full relative'>
					<Input
						allowClear
						value={searchBook}
						onChange={e => setSearchBook(e.target.value)}
						placeholder='Enter your name'
						className='w-[400px]'
					/>
					{isLoading ? <Spin spinning={isLoading} /> : ''}
					{searchData?.data?.length && (
						<ul className='absolute bg-white border border-black top-10 max-h-60 overflow-y-auto z-10 p-2'>
							{searchData?.data?.map(book => (
								<li
									key={book.title}
									className='hover:bg-gray-200 transition-all cursor-pointer'
								>
									{book.title}
								</li>
							))}
						</ul>
					)}
				</div>
				<Button
					onClick={() => setOpen(true)}
					className='bg-[#6200EE] text-white'
				>
					+ Create a book
				</Button>
				<BookModal open={open} setOpen={setOpen} />
			</div>
		</div>
	)
}

export { MainHeading }
