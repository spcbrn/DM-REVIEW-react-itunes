import React from 'react'
import logo from  '../../assets/itunes-logo.png'
import './Logo.css'


export default function Logo(){
	return(
		<div className="logo-wrap">
			<img src={logo}
			     alt="Apple Music"/>
		</div>
	)
}