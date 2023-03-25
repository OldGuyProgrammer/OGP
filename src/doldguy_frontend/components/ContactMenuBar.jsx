import * as React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function ContactMenuBar() {
	return (
		<AppBar position='static'>
			<Toolbar className='toolBar'>
				<Image
					style={{ width: '5%' }}
					src='default.png'
					alt='OGP Logo'
				/>
				<Typography component='div' sx={{ flexGrow: 1 }}>
					<h2 className='text-start'>Old Guy Programmer</h2>
				</Typography>
				<Link to={'About'} className='navbutton'>
					About
				</Link>
				<Link to={'/'} className='navbutton'>
					Home
				</Link>
			</Toolbar>
		</AppBar>
	);
}
