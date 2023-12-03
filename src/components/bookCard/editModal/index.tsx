import { FC } from 'react'
import { Modal, Select } from 'antd'
import { TEditModalProps } from '../bookCard.types'
import { useEditBookMutation } from '@/store/index.endpoints'

const options = [
	{ value: 0, label: 'New' },
	{ value: 1, label: 'Reading' },
	{ value: 2, label: 'Finished' },
]

const EditModal: FC<TEditModalProps> = ({ open, setOpen, book }) => {
	const [editBook] = useEditBookMutation()

	const handleOk = (e: (typeof options)[0]) => {
		editBook({ status: e.value, id: book.book.id })
		setOpen(false)
	}

	const handleCancel = () => {
		setOpen(false)
	}
	return (
		<Modal title='Title' open={open} footer={false} onCancel={handleCancel}>
			<Select
				onSelect={e => handleOk(e)}
				style={{ width: '100%', margin: '20px 0' }}
				defaultValue={options[book.status]}
				options={options}
			/>
		</Modal>
	)
}

export { EditModal }
