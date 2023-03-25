// Home Page Functions
import React from 'react';
import { Outlet } from "react-router-dom"
import { Component } from 'react';
import Header from './Header';

export default class Home extends Component {
	render() {
		return (
			<div className='aboutBackground'>
				<Header />
				<Outlet />
			</div>
		);
	}
}
