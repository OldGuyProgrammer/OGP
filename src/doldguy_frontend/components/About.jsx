import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutMenuBar from '../components/AboutMenuBar';

export default function About() {
	return (
		<div className="clearfix">
			{/* <AboutMenuBar /> */}
			<Row className="align-items-center pt-5">
				<Col>
					<Figure className="text-center">
						<Figure.Image style={{ width: "40%" }} src="Jim_Olivi.jpeg" alt="Jim Olivi" />
					</Figure >
				</Col>
				<Col className="text-left">
					<h3>
						Programming Experience Professional Integrity
					</h3>
				</Col>
				<Col className="text-right">
					<h3>
						Complete System Design, Implementation
					</h3>
				</Col>
				<Col>
					<Figure className="text-center">
						<Figure.Image style={{ width: "50%" }} src="istockphoto-1147195672-612x612.jpg" alt="Intent Programmer" />
					</Figure>
				</Col>
			</Row>
			<Row className="align-items-center pt-5">
				<Col className="text-center">
					<h3>
						Business Systems
					</h3>
				</Col>
				<Col className="text-center">
					<h3>
						Web Sites
					</h3>
				</Col>
			</Row>
			<Row className="align-items-center pt-5">
				<Col className="text-center">
					<Figure>
						<Figure.Image style={{ width: "100%" }} src="Group_1.png" alt="Security" />
					</Figure >
				</Col>
				<Col className="text-left">
					<h3>
						React
					</h3>
				</Col>
				<Col className="text-center">
					<h3>
						Python
					</h3>
				</Col>
				<Col className="text-right">
					<h3>
						JavaScript
					</h3>
				</Col>
				<Col>
					<Figure className="text-center">
						<Figure.Image style={{ width: "100%" }} src="Group_2.png" alt="Crypto" />
					</Figure>
				</Col>
			</Row>
		</div>
	);
}