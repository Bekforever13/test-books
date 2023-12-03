import { Home, NotFound } from '@/pages'

export const routes = [
	{ path: '/', element: <Home /> },
	{ path: '*', element: <NotFound /> },
]
