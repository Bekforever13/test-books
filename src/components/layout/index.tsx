import { useCheckUserQuery } from '@/store/index.endpoints'
import { FC, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout: FC = () => {
	const { data } = useCheckUserQuery()
	const navigate = useNavigate()

	useEffect(() => {
		if (data?.isOk) {
			navigate('/')
		}
		if (!data?.isOk) {
			navigate('/sign_up')
		}
	}, [data?.isOk])

	return (
		<div className='relative overflow-hidden min-h-screen px-20'>
			<div className='z-[-1] bg-[#333] w-full h-[150vh] rotate-[-45deg] rounded-[50px] translate-x-[-450px] translate-y-[-250px] absolute' />
			<Outlet />
		</div>
	)
}

export { Layout }
