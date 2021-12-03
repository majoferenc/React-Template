import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useState, useEffect, MutableRefObject } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useComponentVisible = (initialState: boolean, ref: MutableRefObject<HTMLDivElement | null>, methodRef: Function, 
    dispatch: Function, setSidebarOpenedValue: ActionCreatorWithPayload<boolean, string>) => {
    const [isComponentVisible, setIsComponentVisible] = useState(initialState);

    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
            methodRef()
            dispatch(setSidebarOpenedValue(false))
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return { ref, isComponentVisible, setIsComponentVisible };
}