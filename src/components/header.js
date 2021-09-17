import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
// import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";

const Header = ({active}) => {
	const menuQuery = useStaticQuery(
		graphql`
			{
				wpMenu(id: { eq: "dGVybToxMg==" }) {
					menuItems {
						nodes {
							label
							parentId
							path
							url
						}
					}
					id
				}

				wp {
					generalSettings {
						url
						title
					}
				}
			}
		`
	);

	const { title, url } = menuQuery.wp.generalSettings;

	const menu = menuQuery.wpMenu.menuItems.nodes.map((item) => ({
		...item,
		url: item.url.replace(url, ""),
	}));

	// const home = item.label[0]
	// console.log(home)

	

	return (
		<div>
			<Navbar expand="lg">
				<Container>
					<Nav.Link href="/">{title}</Nav.Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" class="justify-content-end">
						<Nav className="me-auto" fill>
							{menu
								// .filter((item) => {
								// 	return  item.label == "/" 
								// })

								.map((item, index) => {
									return (
										<>
											<Nav.Item>
												{/* {
													item.label === Home ? style={{`color`: blue}} : null
												} */}
												<Nav.Link href={item.url} key={index} className={ `${item.path==="/" ? "active" : null}`} >
													{item.label}
												</Nav.Link>
											</Nav.Item>
										</>
									);
								})}
								
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
