import React from 'react';
import { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import TokenContext from '../../context/TokenContext.js';
import './header.css';
function Header() {
	const token = localStorage.getItem('authToken');
	const { user } = useContext(TokenContext);
	console.log('user', user);
	const logout = () => {
		localStorage.removeItem('authToken');
		window.location.href = '/login';
	};

	return (
		<div>
			<nav className="header bg-slate-200 flex justify-between items-center">
				<div className="logo w-1/4 text-center font-bold ">
					<NavLink to="/">Task Manager</NavLink>
				</div>
				
			</nav>
			<Outlet />
		</div>
	);
}

export default Header;
