import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function MainMenuBar() {
	return (
		<AppBar position='static'>
			<Toolbar className='toolBar'>
				<img
					style={{ width: '5%' }}
					src='default.png'
					alt='OGP Logo'
				/>
				<Typography component='div' sx={{ flexGrow: 1 }}>
					<h2 className='text-start'>Old Guy Programmer</h2>
				</Typography>
				<Link to={'Contact'} className='navbutton'>
					Contact Us
				</Link>
			</Toolbar>
		</AppBar>
	);
}
