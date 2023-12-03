import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { api } from './index.api'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { reducer as auth } from './auth/auth.slice'

const reducers = combineReducers({
	auth,
	[api.reducerPath]: api.reducer,
})

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)
