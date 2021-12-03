import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface LoginState {
	emailInput: string
	passwordInput: string
	loggedIn: boolean
}

const initialState: LoginState = {
	emailInput: '',
	passwordInput: '',
	loggedIn: false,
}

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		clear: state => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.emailInput = ''
			state.passwordInput = ''
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		setEmailInputValue: (state, action: PayloadAction<string>) => {
			state.emailInput = action.payload
		},
		setPasswordInputValue: (state, action: PayloadAction<string>) => {
			state.passwordInput = action.payload
		},
		setLoggedIn: (state, action: PayloadAction<boolean>) => {
			state.loggedIn = action.payload
		},
		login: (state, action: any) => {
			console.log('login')
			state.loggedIn = true
			action.payload.push('/')
		},
		sendToLoginPage: (state, action: any) => {
			action.payload.push('/login')
		},
		logout: state => {
			state.emailInput = ''
			state.passwordInput = ''
			state.loggedIn = false
		},
	},
})

export const {
	clear,
	setEmailInputValue,
	setPasswordInputValue,
	login,
	logout,
	sendToLoginPage,
} = loginSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectEmailInput = (state: RootState) => state.login.emailInput
export const selectPasswordInput = (state: RootState) =>
	state.login.passwordInput
export const selectLoggedIn = (state: RootState) => state.login.loggedIn
export default loginSlice.reducer
