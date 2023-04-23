import * as React from 'react';
import { Link } from 'react-router-dom';

export default function AboutMenuBar() {
	return (
		<div position='static'>
			<div className='toolBar'>
				<Image
					style={{ width: '5%' }}
					src='default.png'
					alt='OGP Logo'
				/>
				<div component='div' sx={{ flexGrow: 1 }}>
					<h2 className='text-start'>Old Guy Programmer</h2>
				</div>
				<Link to={'/'} className='navbutton'>
					Home
				</Link>
			</div>
		</div>
	);
}
