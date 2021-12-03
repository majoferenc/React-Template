import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import aboutReducer from '../pages/about/AboutSlice'
import loginReducer from '../pages/login/LoginSlice'
import sidebarRedurer from '../components/Sidebar/SidebarSlice'

export const store = configureStore({
	reducer: {
		about: aboutReducer,
		login: loginReducer,
		sidebar: sidebarRedurer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
