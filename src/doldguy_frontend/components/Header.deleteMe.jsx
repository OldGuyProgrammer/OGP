import * as React from 'react';
import MainMenuBar from './MainMenuBar';
import About from "./About";

export default function Header() {
	return (
		<div>
			<MainMenuBar />
			<About />
		</div>
	);
}
