import { FC } from 'react'
import logo from '@/assets/img/logo.svg'
import search from '@/assets/img/search.svg'
import { useNavigate } from 'react-router-dom'
import { Avatar, Badge } from 'antd'
import ava from '@/assets/img/avatar.png'
import { BellOutlined } from '@ant-design/icons'

const Header: FC = () => {
	const navigate = useNavigate()
	return (
		<div className='flex items-center justify-between w-full py-3'>
			<div className='flex items-center gap-6'>
				<div
					className='flex items-center gap-5 cursor-pointer'
					onClick={() => navigate('/')}
				>
					<img src={logo} alt='logo' />
					<span className='flex gap-2 text-white'>
						<span className='text-[#6200EE]'>Books</span> List
					</span>
				</div>
				<label className='flex items-center gap-2'>
					<img src={search} alt='search icon' />
					<input
						placeholder='Search for any training you want '
						className='bg-transparent outline-none border-none text-white w-60'
					/>
				</label>
			</div>
			<div className='flex items-center gap-x-5'>
				<Badge dot>
					<BellOutlined style={{ fontSize: 24 }} />
				</Badge>
				<Avatar size={48} icon={<img src={ava} alt='avatar' />} />
			</div>
		</div>
	)
}

export { Header }
