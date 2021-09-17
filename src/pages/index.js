import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import "../muli-cufonfonts-webfont/Muli-Regular.woff";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

export default function Home() {
	return (
		<>
			<Layout>
				<Seo title="home" />
				<Container className="service-container">
					<Row>
						<Col className="home-service text-center">
							<StaticImage
								className="home-service__icon"
								src="../images/icon-1.png"
								alt="A kitten"
							/>
							<h2 className="icon-title mt-3">Technology</h2>
							<p className="icon-desc">Lorem ipsum dolor sit amet</p>
						</Col>
						<Col className="home-service text-center">
							<StaticImage
								className="home-service__icon"
								src="../images/icon-2.png"
								alt="A kitten"
							/>
							<h2 className="icon-title mt-3">Innovation</h2>
							<p className="icon-desc">Lorem ipsum dolor sit amet</p>
						</Col>
						<Col className="home-service text-center">
							<StaticImage
								className="home-service__icon"
								src="../images/icon-3.png"
								alt="A kitten"
							/>
							<h2 className="icon-title mt-3">Analytics</h2>
							<p className="icon-desc">Lorem ipsum dolor sit amet</p>
						</Col>
						<Col className="home-service text-center">
							<StaticImage
								className="home-service__icon"
								src="../images/icon-4.png"
								alt="A kitten"
							/>
							<h2 className="icon-title mt-3">Statistics</h2>
							<p className="icon-desc">Lorem ipsum dolor sit amet</p>
						</Col>
					</Row>
				</Container>
				<Container fluid className="business-container">
					<Row>
						<Col className="business-col-1 p-0">
						<StaticImage
								className="business-image"
								src="../images/column-image-1.jpg"
								alt="business consult"
							/>
						</Col>
						<Col className="business-col-2">

						</Col>
					</Row>
				</Container>
			</Layout>
		</>
	);
}
