import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { setSidebarOpenedValue } from '../Sidebar/SidebarSlice';


export function Header() {
	const { t } = useTranslation();
	const dispatch = useAppDispatch()

	const openSidebar = () => {
		dispatch(setSidebarOpenedValue(true))
  }

	return (
		<div>
			<header className="w-auto bg-magenta flex z-index-0">
				<button type="submit" className="mobile-menu-button p-4 focus:outline-none focus:bg-magenta100" onClick={() => openSidebar()}>
					<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
				<div className="flex flex-wrap place-content-center h-16">
					<Link to='/'>
						<div className="shadow text-white font-medium text-lg">{t('common.applicationName')}</div>
					</Link>
				</div>
			</header>
		</div>
	)
}

export default Header
