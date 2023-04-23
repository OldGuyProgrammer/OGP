import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import ContactForm from '../components/ContactForm/ContactForm';
import DisplayMessages from '../components/DisplayMessages/DisplayMessages';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route index element={<Home />} />
				<Route path="contactus" element={<ContactForm />} />
				<Route path="messages" element={<DisplayMessages />} />
			</Routes>
		</BrowserRouter>
	);
};
