import React from 'react';
import { Link } from "react-router-dom";

export default function MainMenuBar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light  ogp-nav-bar">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								<img className="logo-img" src="default.png" alt="OGP Logo" />
							</Link>
						</li>
						<li className="nav-item active">
							<Link className="nav-link" to="/">Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contactus">Contact Us
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/messages">Get Messages
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

