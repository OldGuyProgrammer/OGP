import React from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter } from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../assets/main.css';

import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Home from "../components/Home"

const Router = () => {

	return (
		<Routes>
			<Route path="/" element={<Home />}>
				<Route path="/Contact" element={<ContactForm />} />
			</Route>
		</Routes>
	)

	// {
	// 	path: 'About',
	// 	element: <About />,
	// },
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</React.StrictMode>
);
