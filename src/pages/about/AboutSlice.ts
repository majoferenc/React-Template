import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface AboutState {
	emailInput: string
	qoute: string
}

const initialState: AboutState = {
	emailInput: '',
	qoute: '',
}

export const aboutSlice = createSlice({
	name: 'about',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		clear: state => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.emailInput = ''
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		setEmailInputValue: (state, action: PayloadAction<string>) => {
			state.emailInput = action.payload
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		setQuote: (state, action: PayloadAction<string>) => {
			state.qoute = action.payload
		},
	},
})

export const { clear, setEmailInputValue, setQuote } = aboutSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectEmailInput = (state: RootState) => state.about.emailInput
export const selectQuote = (state: RootState) => state.about.qoute

export default aboutSlice.reducer
