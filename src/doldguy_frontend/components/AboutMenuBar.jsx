import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function AboutMenuBar() {
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
				<Link to={'/'} className='navbutton'>
					Home
				</Link>
			</Toolbar>
		</AppBar>
	);
}
