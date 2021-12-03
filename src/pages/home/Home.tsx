import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import IPv4Addressen from '../../images/IPv4-Addressen.svg';
import IPv4AddressPools from'../../images/IPv4-Address-Pools.svg';
import IPv4AddressPoolUnits from'../../images/IPv4-Address-Pool-Units.svg';
import IPUniverseImg from'../../images/IP-Universe.svg';
import IPv6PrafixPools from'../../images/IPv6-Prafix-Pools.svg';
import IPv6PrafixPoolUnits from'../../images/IPv6-Prafix-Pool-Units.svg';
import Card from '../../components/Card/Card';
import { useAppSelector } from '../../app/hooks';
import { selecSidebarOpened } from '../../components/Sidebar/SidebarSlice';


export function Home() {
	const bodyRef = useRef<HTMLDivElement | null>(null);
	const sidebarOpened = useAppSelector(selecSidebarOpened)
	useEffect(() => {
		if (sidebarOpened === true) {
			addBlur()
		} else {
			removeBlur()
		}
  }, [sidebarOpened])

	const addBlur = () => {
    bodyRef.current?.classList.add("filter", "blur-sm");
  }

	const removeBlur = () => {
   bodyRef.current?.classList.remove("filter", "blur-sm");
  }

	return (
		<div className="m-auto md:pt-40">
			<div ref={bodyRef} className=" h-1/4 overflow-visible">
				<h1 className="md:text-4xl text-xl font-mono my-4">Bitte wählen Sie eine Aktion aus</h1>
				<section className="text-white body-font">
					<div className="container px-5 py-10 mx-auto">
						<div className="grid md:grid-cols-3 gap-4 grid-cols-">
							<Link to='/ipv4-addresssen'>
								<Card imageSrc={IPv4Addressen} cardText="IPv4 Adresses"/>
							</Link>
							<Link to='/ipv4-address-pools'>
								<Card imageSrc={IPv4AddressPools} cardText="IPv4 Adress-Pools"/>
							</Link>
							<Link to='/ipv4-address-pool-units'>
								<Card imageSrc={IPv4AddressPoolUnits} cardText="IPv4 Adress-Pool-Units"/>
							</Link>
							<Link to='/ipv6-praefix-pools'>
								<Card imageSrc={IPv6PrafixPools} cardText="IPv6 Präfix-Pools"/>
							</Link>
							<Link to='/ipv6-praefix-pool-units'>
								<Card imageSrc={IPv6PrafixPoolUnits} cardText="IPv6 Präfix-Units"/>
							</Link>
							<Link to='/ip-universe'>
								<Card imageSrc={IPUniverseImg} cardText="IP-Universe"/>
							</Link>
						</div>
					</div>
				</section>
				<div>
					<Link to='/about'>
						<button type="submit" className="bg-magenta hover:bg-gray-700 text-white font-bold py-2 m-4 px-4 rounded">
							About
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
