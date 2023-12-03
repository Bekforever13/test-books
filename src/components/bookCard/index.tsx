import { FC, useState } from 'react'
import trash from '@/assets/img/trash.svg'
import edit from '@/assets/img/edit.svg'
import no_cover from '@/assets/img/no_cover.png'
import { useDeleteBookMutation } from '@/store/index.endpoints'
import { Popconfirm } from 'antd'
import { EditModal } from './editModal'

const BookCard: FC<{ book: any }> = ({ book }) => {
	const [hover, setHover] = useState(false)
	const [deleteBook] = useDeleteBookMutation()
	const [open, setOpen] = useState(false)

	const handleDelete = (id: number) => {
		deleteBook(id)
	}

	return (
		<div
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className={`p-8 rounded-xl flex items-start gap-5 w-full transition-all relative border border-black shadow-md bg-white ${
				+book?.status === 1 && 'bg-yellow-500'
			}
			${+book?.status === 3 && 'bg-green-500'}`}
		>
			{book.book.cover.length ? (
				<img src={book.book.cover} alt='book img' width={100} height={70} />
			) : (
				<img
					src={no_cover}
					alt='book img'
					width={100}
					height={70}
					className='border border-black'
				/>
			)}
			<div className='flex flex-col w-full gap-y-5'>
				<h2 className='font-semibold'>{book.book.title}</h2>
				<div>
					{book.book.author}: {book.book.published}
				</div>
				<div className='text-[#9654F4] bg-[#EFE6FD] py-[2px] px-3 rounded-lg w-fit'>
					{book.book.pages} pages
				</div>
			</div>
			{hover ? (
				<div className='absolute top-3 right-[-33px] flex flex-col gap-1'>
					<Popconfirm
						onConfirm={() => handleDelete(book?.book?.id)}
						placement='left'
						okButtonProps={{ style: { backgroundColor: '#9654F4' } }}
						title='Do you want to delete the book?'
					>
						<div className='p-2 rounded-lg bg-[#FF4D4F] cursor-pointer hover:opacity-70'>
							<img src={trash} alt='trash' />
						</div>
					</Popconfirm>
					<div
						onClick={() => setOpen(true)}
						className='p-2 rounded-lg bg-[#6200EE] cursor-pointer hover:opacity-70'
					>
						<img src={edit} alt='edit' />
					</div>
					<EditModal open={open} setOpen={setOpen} book={book} />
				</div>
			) : (
				''
			)}
		</div>
	)
}

export { BookCard }
