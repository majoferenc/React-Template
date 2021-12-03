import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector, useComponentVisible } from '../../app/hooks';
import telekomLogoMagenta from'../../images/telekom-logo-magenta.png';
import { selecSidebarOpened, setSidebarOpenedValue } from './SidebarSlice';

export function Sidebar() {
  const [skipMount, setSkipMount] = useState(true);
	const { t } = useTranslation();
  const parentSideBarRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
	const sidebarOpened = useAppSelector(selecSidebarOpened)
  const dispatch = useAppDispatch()

  const closeSidebar = () => {
    sidebarRef.current?.classList.add("-translate-x-full");
    parentSideBarRef.current?.classList.remove("z-10");
    parentSideBarRef.current?.classList.add("-z-10");
  }
  
  const { isComponentVisible } = useComponentVisible(false, parentSideBarRef, closeSidebar, dispatch, setSidebarOpenedValue);

  useEffect(() => {
    if (skipMount) setSkipMount(false);
    if (!skipMount) {
      if(sidebarOpened === true && !isComponentVisible) {
        openSidebar()
      }
      if (sidebarOpened === true) {
        openSidebar()
      }
    }
  }, [sidebarOpened, isComponentVisible])

  const openSidebar = () => {
    sidebarRef.current?.classList.remove("-translate-x-full");
    parentSideBarRef.current?.classList.add("z-10");
    parentSideBarRef.current?.classList.remove("-z-10");
  }


	return (
    <div ref={parentSideBarRef} className="absolute min-h-screen flex -z-10">
      <div ref={sidebarRef} className="sidebar bg-black text-magenta w-64 space-y-6 py-7 px-2 absolute inset-y-0 -translate-x-full left-0 transform relative translate-x-0 transition duration-200 ease-in-out">
        <div className="text-magenta flex items-center space-x-2 px-4 justify-between">
        <img src={telekomLogoMagenta} className="mx-2" width='60rem' alt="Telekom Logo" />
          <span className="text-sm font-bold text-xl">{t('common.applicationNameShort')}</span>
          <button type="submit" onClick={() => { closeSidebar(); dispatch(setSidebarOpenedValue(false))} }>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav>
          <NavLink exact to='/' activeClassName="bg-magenta"  className="block py-2.5 px-4 rounded transition duration-200 hover:bg-magenta text-white font-bold">
            Home
          </NavLink>
          <NavLink to="/ipv4-addresssen" activeClassName="bg-magenta" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-magenta text-white font-bold">
            IPv4 Addresses
          </NavLink>
          <NavLink to="/ipv4-address-pools" activeClassName="bg-magenta" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-magenta text-white font-bold">
            IPv4 Address-Pools
          </NavLink>
          <NavLink to="/ipv4-address-pool-units" activeClassName="bg-magenta" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-magenta text-white font-bold">
            IPv4 Address-Pool-Units
          </NavLink>
          <NavLink to="/ipv6-praefix-pools" activeClassName="bg-magenta" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-magenta text-white font-bold">
            IPv6 Praefix-Pools
          </NavLink>
          <NavLink to="/ipv6-praefix-pool-units" activeClassName="bg-magenta" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-magenta text-white font-bold">
            IPv6 Praefix-Pool-Units
          </NavLink>
          <NavLink to="/ip-universe" activeClassName="bg-magenta" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-magenta text-white font-bold">
            IP-Universe
          </NavLink>
        </nav>
      </div>
    </div>
	)
}

export default Sidebar
