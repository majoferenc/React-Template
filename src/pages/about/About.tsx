import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Input from '../../components/input/Input'

import {
	selectEmailInput,
	selectQuote,
	setQuote,
	setEmailInputValue
} from './AboutSlice'

export function About() {
	const [isLoading, setIsLoading] = useState(false);
  	const [isError, setIsError] = useState(false);
	const emailInput = useAppSelector(selectEmailInput)
	const qouteString = useAppSelector(selectQuote)
	const dispatch = useAppDispatch()
	
	useEffect(() => {
		setIsError(false);
      	setIsLoading(true);
		const getQuotesFromApi = async () => {
			try {
				const result = await axios(
					'https://quotes.rest/qod?language=en',
				  );
				  dispatch(setQuote(result.data.contents.quotes[0].quote));
			} catch (error) {
				console.log(error);
				setIsError(true);
			}
			setIsLoading(false);
		};
		getQuotesFromApi();
	  }, []);
	return (
		<div className="m-auto md:w-3/6 p-6">
			<h1 className="text-4xl	font-bold font-mono">About page</h1>
			<Input id='email'
				label='Email'
				type='email'
				value={emailInput}
				onChange={(e:any) => dispatch(setEmailInputValue(e.target.value))}
				placeholder='you@youremail.com' />
			{isError && <div>Something went wrong during Quote loading...</div>}
			{isLoading ? (
        <div>Loading ...</div>
		) : (
			<p>{qouteString}</p>
		)}
    </div>
	)
}

export default About
