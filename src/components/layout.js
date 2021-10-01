import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Container, Col, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom"
import Header from "./header"
import { StaticImage } from "gatsby-plugin-image"


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    > 
      <FontAwesomeIcon
                icon={faCoffee}
                color="#000"
                size="2x"
            />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
        <FontAwesomeIcon
                icon="arrow-left"
                color="#000"
                size="2x"
            />
    </div>
  );
}


const Layout = ({ children }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: (
     
        <div className="next-slick-arrow"> &#8592;</div>
      
    ),
    prevArrow: (
      
        <div className="prev-slick-arrow"> &#8594; </div>
      
    )
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };
  //   const menuQuery = useStaticQuery(

  //       graphql`{
  //           wpMenu(id: {eq: "dGVybToxMg=="}) {
  //               menuItems {
  //                 nodes {
  //                   label
  //                   parentId
  //                   path
  //                   url
  //                 }
  //               }
  //               id
  //           },

  //           wp {
  //               generalSettings {
  //                 url
  //                 title
  //               }
  //             }
  //       }`
  //   )






  // const {title, url} = menuQuery.wp.generalSettings

  // const menu = menuQuery.wpMenu.menuItems.nodes.map(item => ({
  //   ...item,
  //   url: item.url.replace(url, ""),
  // })) 

  

  return (
    <div className="global-wrapper" >

      <div className="banner">
          <Header />

          <div className="container-wrapper">

            <Container fluid className="slider-wrapper p-0">
            <Slider {...settings}>
						{/* <Row className="row"> */}
							<Col className="slider-description-1">
                <StaticImage src="../images/icon-1.png" alt="A kitten" />
                <h1 className="banner-tittle">Helping People</h1>
                <p>Lorem ipsum dolo.r sit amet, quo prompta oporteat eu nuam hinc</p>
                <p>ipsum dolo Imparare Ipsum aenean commo dolig.</p>

                <div className="disc-btn">
                  <Col> <Button>Discover</Button> </Col>
                </div>
              </Col>
							<Col  className="slider-images__1">
                <div className="slider-image-1">
                  <StaticImage className="slider-image-down" src="../images/home-slide-3-image-1.jpg" alt="A kitten" />
                </div>
                  <div className="slider-image-3">
                    <StaticImage className="slider-image-top" src="../images/home-slide-3-image-2.jpg" alt="A kitten" />
                  </div>
                  <div className="slider-image-2">
                    <StaticImage className="slider-image-middle" src="../images/home-rev-image-3.jpg" alt="A kitten" />
                  </div>
              
              </Col>

              <Col className="slider-description-2">
                <StaticImage src="../images/icon-1.png" alt="A kitten" />
                <h1 className="banner-tittle"> Financial Advisory </h1>
                <p>Lorem ipsum dolo.r sit amet, quo prompta oporteat eu nuam hinc</p>
                <p>ipsum dolo Imparare Ipsum aenean commo dolig.</p>

                <div class="disc-btn">
                  <Col> <Button>Discover</Button> </Col>
                </div>
              </Col>
							<Col className="slider-images__2">
                <div className="slider-image-1">
                  <StaticImage className="slider-image-down" src="../images/home-rev-image-2.jpg" alt="A kitten" />
                </div>
                  <div className="slider-image-3">
                    <StaticImage className="slider-image-top" src="../images/home-rev-image-4.jpg" alt="A kitten" />
                  </div>
                  <div className="slider-image-2">
                    <StaticImage className="slider-image-middle" src="../images/home-rev-image-3.jpg" alt="A kitten" />
                  </div>
              
              </Col>

              <Col className="slider-description-3">
                <StaticImage src="../images/icon-1.png" alt="A kitten" />
                <h1 className="banner-tittle"> Provide Guidance </h1>
                <p>Lorem ipsum dolo.r sit amet, quo prompta oporteat eu nuam hinc</p>
                <p>ipsum dolo Imparare Ipsum aenean commo dolig.</p>

                <div class="disc-btn">
                  <Col> <Button>Discover</Button> </Col>
                </div>
              </Col>
							<Col className="slider-images__3">
                <div className="slider-image-1">
                  <StaticImage className="slider-image-down" src="../images/home-rev-slider-2-image-2.jpg" alt="A kitten" />
                </div>
                  <div className="slider-image-3">
                    <StaticImage className="slider-image-top" src="../images/home-rev-slider-2-image-3.jpg" alt="A kitten" />
                  </div>
                  <div className="slider-image-2">
                    <StaticImage className="slider-image-middle" src="../images/home-rev-image-3.jpg" alt="A kitten" />
                  </div>
              
              </Col>

						{/* </Row> */}

            </Slider>
					</Container>
      
          </div>
      </div>
        <main>
          
          {children}
        </main>

      

      <footer className="mt-5">
        {/* © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a> */}
          <Container>
            <Row>
                <Col>
                  <h3>About Company</h3>
                  <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet ffdfd. 
                    Aenean sollicitudin, quis bibendum lorem
                  </p>
                  <p>© 2021 Copyright
                    <Link to="">FinAD</Link>
                  </p>
                </Col>
                <Col>
                  <h3>Contact Us</h3>
                  <p>
                  Become a part of our business venture or learn more about business success
                  </p>
                  <Link to="">email@gmail.com</Link>
                  <Link to="">Call us: +1234 567 890</Link>
                  <Link to="">Soho Street, London United Kingdom</Link>
                </Col>
                <Col>
                  <h3>Newsletter</h3>
                  <p>
                  Submit your email address and subscribe to our newsletter to be on the up and up.
                  </p>
                  <form action="">
                    <input type="text" placeholder="Email"/>
                  </form>
                </Col>
            </Row>
          </Container>
      </footer>
    </div>
  )
}



export default Layout