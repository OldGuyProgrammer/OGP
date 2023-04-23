import * as React from 'react';
import MainMenuBar from './MainMenuBar';
import About from "./About";

export default function Header() {
	return (
		<div>
			<MainMenuBar />
			{/* <div className='position-relative center'>
				<figure className='position-relative left'>
				<figure>
					<Image
						style={{ width: '50%' }}
						src="default.png"
						alt='OGP Logo'
					/>
				</figure>
			</div> */}
			<About />
		</div>
	);
}
