import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import "react-circular-progressbar/dist/styles.css";
import "../muli-cufonfonts-webfont/Muli-Regular.woff";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import { easeQuadInOut } from "d3-ease";
// import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "../components/ChangingProgressProvider";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

export default function Home() {
	const percentage = 66;

	return (
		<>
			<Layout>
				<Seo title="home" />
				<section className="service">
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
				</section>

				<section className="business">
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
								<h1>Business Consulting</h1>
								<div className="business-desc">
									<p>
										Lorem ipsum dolo.r sit amet, quo prompta oporteat eu nuam
										hinc
									</p>
									<p>ipsum dolo Imparare Ipsum aenean commo dolig.</p>
								</div>

								<Container>
									<Row className="row-2">
										<Col label="Custom animation speed">
											<CircularProgressbar
												value={25}
												text="25%"
												strokeWidth={1}
												styles={buildStyles({
													trailColor: "#ddd",
													textColor: "gray",
          											pathColor: "#ff7d44",
												})}
												
											/>
											<h3>Management</h3>
											
										</Col>
										<Col>
											<CircularProgressbar
												value={85}
												text="85%"
												strokeWidth={1}
												styles={buildStyles({
													trailColor: "#ddd",
													textColor: "gray",
          											pathColor: "#ff7d44",
												})}
												
											/>
											<h3>Transformation</h3>
											
										</Col>
									</Row>

									<Row className="row-3">
										<Col label="Custom animation speed">
											<CircularProgressbar
												value={70}
												text="70%"
												strokeWidth={1}
												styles={buildStyles({
													trailColor: "#ddd",
													textColor: "gray",
          											pathColor: "#ff7d44",
												})}
												
											/>
											<h3>Organisation</h3>
											
										</Col>
										<Col>
											<CircularProgressbar
												value={48}
												text="48%"
												strokeWidth={1}
												styles={buildStyles({
													trailColor: "#ddd",
													textColor: "black",
          											pathColor: "#ff7d44",
												})}
												
											/>
											<h3>Improvement</h3>
										</Col>
									</Row>
								</Container>
							</Col>
						</Row>
					</Container>
				</section>

				<section className="teams">
					<Container>
						<Row>
							<Col label="Custom animation speed">
								<ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
									{(percentage) => (
										<CircularProgressbar
											value={percentage}
											text={`${percentage}%`}
											styles={buildStyles({
												pathTransitionDuration: 0.15,
											})}
										/>
									)}
								</ChangingProgressProvider>
							</Col>
							<Col sm>
								<CircularProgressbar
									value={percentage}
									text={`${percentage}%`}
								/>
								;
							</Col>
							<Col sm>sm=true</Col>
							<Col sm>sm=true</Col>
							<Col sm>sm=true</Col>
						</Row>
					</Container>
				</section>
			</Layout>
		</>
	);
}
