import React from 'react'
import { BrowserRouter as Router, Route, Switch, RouteProps, Redirect, useLocation } from 'react-router-dom'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { About } from '../about/About'
import { Home } from '../home/Home'
import { Login } from '../login/Login'
import { IPv4Addressen } from '../ipv4Addressen/IPv4Addressen'
import { IPv4AddressPools } from '../ipv4AddressPools/IPv4AddressPools'
import { IPv4AddressPoolUnits } from '../ipv4AddressPoolUnits/IPv4AddressPoolUnits'
import { IPv6PraefixPools } from '../ipv6PraefixPools/IPv6PraefixPools'
import { IPv6PraefixPoolUnits } from '../ipv6PraefixPoolUnits/IPv6PraefixPoolUnits'
import { IPUniverse } from '../ipUniverse/IPUniverse'
import './App.scss'

import {
	selectLoggedIn
} from '../login/LoginSlice'
import { useAppSelector } from '../../app/hooks'
import Sidebar from '../../components/Sidebar/Sidebar'


export function App() {
	const isLoggedIn = useAppSelector(selectLoggedIn)	
	return (
		<div className=' App flex flex-col h-screen justify-between'>
		<Router>
			{isLoggedIn === true &&
			<span>
				<Sidebar />
				<Header />
			</span>
			}
			<div className="flex-1 text-2xl font-bold z-index-0">
				<Switch>
					<PrivateRoute exact path='/' component={Home} />
					<PrivateRoute exact path='/about' component={About} />
					<PrivateRoute exact path='/ipv4-addresssen' component={IPv4Addressen} />
					<PrivateRoute exact path='/ipv4-address-pools' component={IPv4AddressPools} />
					<PrivateRoute exact path='/ipv4-address-pool-units' component={IPv4AddressPoolUnits} />
					<PrivateRoute exact path='/ipv6-praefix-pools' component={IPv6PraefixPools} />
					<PrivateRoute exact path='/ipv6-praefix-pool-units' component={IPv6PraefixPoolUnits} />
					<PrivateRoute exact path='/ip-universe' component={IPUniverse} />
					<Route exact path='/login'>
						<Login />
					</Route>
				</Switch>
			</div>
		</Router>
		<Footer />
	</div>
	)
}

function PrivateRoute({ component: Component, ...rest }: RouteProps) {
	const isLoggedIn = useAppSelector(selectLoggedIn)
	const location = useLocation();
	let shouldRedirect = false;
	if (location.pathname !== '/login' && isLoggedIn === false) {
		shouldRedirect = true
	}
	console.log(shouldRedirect)
	if (!Component) return null;
	return (
	  <Route
		{...rest}
		render={(props: any) =>
		shouldRedirect ? (
			<Redirect to={{ pathname: '/login' }} />
		  ) : (
			<Component {...props} />			
		  )
		}
	  />
	)
}

export default App
