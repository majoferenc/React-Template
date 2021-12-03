import { gql } from 'apollo-boost';
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Input from '../../components/input/Input';
import { client } from '../../index';

import {
	setEmailInputValue,
    setPasswordInputValue,
    login,
    selectEmailInput,
    selectPasswordInput
} from './LoginSlice'

export function Login() {
    useEffect(() => {
        client
        .query({
          query: gql`
            query GetRates {
              rates(currency: "USD") {
                currency
              }
            }
          `
        })
        .then(result => console.log(result));
    });
    const { t } = useTranslation();
    const emailInput = useAppSelector(selectEmailInput)
    const passwordInput = useAppSelector(selectPasswordInput)
    const dispatch = useAppDispatch()
    const history = useHistory()
    const handleFormSubmit = (e:any) => {
        e.preventDefault();
    };

    const classes = {
        pageBody: 'h-screen flex bg-gray-bg1',
        formContainer:
            'w-full max-w-md m-auto bg-white rounded-lg md:border-4 border-primaryBorder shadow-default py-20 px-5 prose',
        formHeading: 'text-2xl  font-medium text-primary mt-4 mb-12 text-center',
        formBody: 'border-0',
        btnContainer: 'flex justify-center items-center hover:bg-gray-700 mt-6 bg-magenta md:mx-16 text-white',
    };
    return (
        <div className={classes.pageBody}>
            <div className={classes.formContainer}>
                <h1 className={classes.formHeading}>
                    {t('common.applicationName')}
                </h1>

                <form onSubmit={handleFormSubmit} className={classes.formBody}>
                    <Input
                        id='email'
                        label={t('login.emailLabel')}
                        type='email'
                        value={emailInput}
                        onChange={(e:any) => dispatch(setEmailInputValue(e.target.value))}
                        placeholder={t('login.emailPlaceholder')}
                    />
                    <Input
                        id='password'
                        label={t('login.passwordLabel')}
                        value={passwordInput}
                        onChange={(e:any) => dispatch(setPasswordInputValue(e.target.value))}
                        type='password'
                        placeholder={t('login.passwordPlaceholder')}
                    />

                    <div className={classes.btnContainer}>
                        <button className="w-full" type='submit' onClick={() => dispatch(login(history))}>
                            {t('login.loginButton')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login
