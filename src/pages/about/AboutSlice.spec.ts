/* eslint-disable no-undef */
import aboutReducer, {
	AboutState,
	clear,
	setEmailInputValue,
	setQuote,
} from './AboutSlice'

describe('counter reducer', () => {
	const initialState: AboutState = {
		emailInput: 'test@test.com',
		qoute: 'Hello!',
	}

	it('should handle clear', () => {
		const actual = aboutReducer(initialState, clear())
		expect(actual.emailInput).toEqual('')
	})

	it('should handle set Email Input Value', () => {
		const actual = aboutReducer(
			initialState,
			setEmailInputValue('email@email.com')
		)
		expect(actual.emailInput).toEqual('email@email.com')
	})

	it('should handle set Quote', () => {
		const actual = aboutReducer(initialState, setQuote('New Quote'))
		expect(actual.qoute).toEqual('New Quote')
	})
})
