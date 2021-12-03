import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface SidebarState {
	sidebarOpened: boolean,
}

const initialState: SidebarState = {
	sidebarOpened: false,
}

export const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		clear: state => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.sidebarOpened = false
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		setSidebarOpenedValue: (state, action: PayloadAction<boolean>) => {
			state.sidebarOpened = action.payload
		},
	},
})

export const { clear, setSidebarOpenedValue } = sidebarSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selecSidebarOpened = (state: RootState) => state.sidebar.sidebarOpened

export default sidebarSlice.reducer
