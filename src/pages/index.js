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
// import { Link } from "react-router-dom";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import Accordion from "../components/accordion";

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
													textColor: "gray",
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
							<Col>
								<StaticImage src="../images/team-1.jpg" />
								<h4 className="team-name">Maria Weber</h4>
								<p className="team-phone">+1234 567 890</p>
								<p>
									
									<a href="" target="_blank" rel="noopener noreferrer">
										email@gmail.com
									</a>
								</p>
							</Col>
							<Col>
								<StaticImage src="../images/team-2.jpg" />
								<h4 className="team-name">John Doe</h4>
								<p className="team-phone">+1234 567 890</p>
								<p>
									
									<a href="email@gmail.com">email@gmail.com</a>
								</p>
							</Col>
							<Col>
								<StaticImage src="../images/team-3.jpg" />
								<h4 className="team-name">John Doe</h4>email@gmail.com
								<p className="team-phone">+1234 567 890</p>
								<p>
									
									<a
										href="mailto:email@gmail.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										email@gmail.com
									</a>
								</p>
							</Col>
							<Col>
								<StaticImage src="../images/team-4.jpg" />
								<h4 className="team-name">John Doe</h4>
								<p className="team-phone">+1234 567 890</p>
								<p>
									
									<a
										href="mailto:email@gmail.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										email@gmail.com
									</a>
								</p>
							</Col>
							<Col>
								<StaticImage src="../images/team-5.jpg" />
								<h4 className="team-name">John Doe</h4>
								<p className="team-phone">+1234 567 890</p>
								<p>
									
									<a
										href=""
										target="_blank"
										rel="noopener noreferrer"
									>
										email@gmail.com
									</a>
								</p>
							</Col>
						</Row>
					</Container>
				</section>
				<section className="business-strategy">
					<Container>
						<Row>
							<Col className="business-strategy-col-1">
								<StaticImage src="../images/home-image-2.png" />
							</Col>
							<Col className="business-strategy-col-2">
								<h1>Business Strategies</h1>
								<Accordion
									title="Discover Our Process"
									description="Lorem ipsum dolor sit amet, ei solum justo aperiam est, eam in nobis placerat. Nec nominavi definitiones et, summo intellegebat an est. At veniam philosophia vix. Ad salutatus prodesset ius, cum at autem idque. Sit ceteros ummo intellegebat an est."
								/>

								<Accordion
									title="About Our Company"
									description="Lorem ipsum dolor sit amet, ei solum justo aperiam est, eam in nobis placerat. Nec nominavi definitiones et, summo intellegebat an est. At veniam philosophia vix. Ad salutatus prodesset ius, cum at autem idque. Sit ceteros ummo intellegebat an est."
								/>

								<Accordion
									title="Mission Statement"
									description="Lorem ipsum dolor sit amet, ei solum justo aperiam est, eam in nobis placerat. Nec nominavi definitiones et, summo intellegebat an est. At veniam philosophia vix. Ad salutatus prodesset ius, cum at autem idque. Sit ceteros ummo intellegebat an est."
								/>
								<Accordion
									title="Business Consalting"
									description="Lorem ipsum dolor sit amet, ei solum justo aperiam est, eam in nobis placerat. Nec nominavi definitiones et, summo intellegebat an est. At veniam philosophia vix. Ad salutatus prodesset ius, cum at autem idque. Sit ceteros ummo intellegebat an est."
								/>
							</Col>
						</Row>
					</Container>
				</section>

				<section className="contact">
					<Container>
						<Row>
							<Col></Col>
							<Col></Col>
						</Row>
					</Container>
				</section>
			</Layout>
		</>
	);
}
