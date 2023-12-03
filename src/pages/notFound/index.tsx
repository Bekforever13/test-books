import { FC } from 'react'
import notFound from '@/assets/img/404.png'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
	return (
		<div className='w-full h-screen flex items-center justify-center gap-y-14 flex-col'>
			<img src={notFound} alt='not found page' />
			<div className='flex items-center gap-3'>
				<Link to='/'>
					<Button type='primary' className='bg-[#6200EE]'>
						Go Home Page
					</Button>
				</Link>
				<Button
					type='default'
					onClick={() => window.location.reload()}
					className='text-[#6200EE] border-[#6200EE]'
				>
					Reload Page
				</Button>
			</div>
		</div>
	)
}

export { NotFound }
