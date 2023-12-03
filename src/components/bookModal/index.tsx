import { FC, useState, useEffect } from 'react'
import { Button, Input, Modal, Select, Spin, notification } from 'antd'
import { TPropsModal } from './bookModal.types'
import { useDebounce } from '@/hooks/useDebounce'
import { useCreateBookMutation } from '@/store/index.endpoints'

type TOptions = {
	label: string
	value: string
}

const BookModal: FC<TPropsModal> = ({ open, setOpen }) => {
	const [title, setTitle] = useState('')
	const debouncedTitle = useDebounce(title, 300)
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState<any[]>([])
	const [options, setOptions] = useState<TOptions[]>([])
	const [selectedBook, setSelectedBook] = useState('')
	const [createBook, { data: bookData, isSuccess }] = useCreateBookMutation()

	useEffect(() => {
		if (debouncedTitle.length) {
			setLoading(true)
			fetch(`https://openlibrary.org/search.json?title=${debouncedTitle}`)
				.then(res => res.json())
				.then(data => setData(data.docs))
				.finally(() => setLoading(false))
		}
	}, [debouncedTitle])

	useEffect(() => {
		if (bookData) {
			console.log(bookData)
			setOpen(false)
		}
	}, [bookData])

	useEffect(() => {
		if (title === '') {
			setOptions([])
		}
	}, [title])

	useEffect(() => {
		if (data) {
			data.map(book => {
				setOptions(prev => [
					...prev,
					{ label: book.title, value: book.isbn?.[0] },
				])
			})
		}
	}, [data])

	useEffect(() => {
		if (isSuccess) {
			notification.success({
				message: 'Successfully added new book',
				placement: 'bottomRight',
				duration: 3,
			})
		}
	}, [isSuccess])

	const handleOk = () => {
		createBook({ isbn: selectedBook })
	}

	const handleCancel = () => {
		setOpen(false)
		setSelectedBook('')
	}

	return (
		<Modal title='Title' open={open} footer={false} onCancel={handleCancel}>
			<label>
				<Input
					value={title}
					className='my-5'
					onChange={e => setTitle(e.target.value)}
					required
					allowClear
					placeholder='Enter title'
				/>
			</label>
			<Spin className='my-5' spinning={loading} />
			{options.length > 0 && (
				<Select
					onSelect={e => setSelectedBook(e)}
					style={{ width: '100%', margin: '20px 0' }}
					options={options}
				/>
			)}
			<div className='flex items-center gap-5 mt-5'>
				<Button type='default' onClick={handleCancel} className='w-full'>
					Close
				</Button>
				<Button
					type='primary'
					onClick={handleOk}
					className='w-full bg-[#6200EE] hover:bg-[#6200EE]'
				>
					Submit
				</Button>
			</div>
		</Modal>
	)
}

export { BookModal }
