// Home Page Functions
import React from 'react';
import MainMenuBar from './MainMenuBar';
import About from "./About";

const Home = () => {
	return (
		<>
			<div className='aboutBackground'>
				<MainMenuBar />
				<About />
			</div>
		</>
	);
};

export default Home;
