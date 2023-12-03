import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components'
import { routes } from '@/routes'
import { SignIn, SignUp } from '@/pages'

const App: FC = () => {
	return (
		<Routes>
			<Route element={<Layout />} path='/'>
				<Route element={<SignIn />} path='/sign_in' />
				<Route element={<SignUp />} path='/sign_up' />
				{routes.map(({ element, path }) => (
					<Route path={path} element={element} key={path} />
				))}
			</Route>
		</Routes>
	)
}

export { App }
