import * as React from 'react';
import Footer from './Footer/Footer';
// import AboutMenuBar from '../components/AboutMenuBar';

export default function About() {
	return (
		<div>
			{/* Programmer picture section. */}
			<div className="row p-5 programmer-pics">
				<div className='col-6'>
					<div className='card border-0'>
						<div className="oldguy-container">
							<img className="old-guy-img" src="Jim_Olivi.jpeg" alt="Jim Olivi" />
							<div className='bottom-text'>
								<p>Programming Experience</p>
								<p>Professional Integrity</p>
							</div>
						</div>
					</div>
				</div>
				<div className='col-6'>
					<div className="card border-0">
						<div className="programmer-container">
							<div className='text-right top-text'>
								<p>Complete System Design</p>
								<p>Supported Implementations</p>
							</div>
							<img className="programmer-img" src="istockphoto-1147195672-612x612.jpg" alt="Intent Programmer" />
						</div>
					</div>
				</div>
				{/* End Programmer picture section. */}
			</div>
			<div className="row p-5">
				{/* Business Category Section */}
				<div className="col text-center">
					<h3>
						Business Systems
					</h3>
				</div>
				<div className="col text-center">
					<h3>
						Web Sites
					</h3>
				</div>
			</div>
			{/*  End Business Category Section. */}
			<div className="row align-items-center pt-5">
				<div className="col text-center">
					<div>
						<img style={{ width: "100%" }} src="Group_1.png" alt="Security" />
					</div >
				</div>
				<div className="col text-left">
					<h3>
						React
					</h3>
				</div>
				<div className="col text-center">
					<h3>
						Python
					</h3>
				</div>
				<div className="col text-right">
					<h3>
						JavaScript
					</h3>
				</div>
				<div>
					<div className="text-center">
						<img style={{ width: "100%" }} src="Group_2.png" alt="Crypto" />
					</div>
				</div>
			</div>
			<Footer />
		</div >
	);
}