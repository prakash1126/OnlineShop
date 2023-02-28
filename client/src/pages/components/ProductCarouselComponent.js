import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { LinkContainer } from "react-router-bootstrap";
// import images from '../../assests/images';

const ProductCarouselComponent = () => {
    const cursorPointer={
        'cursor':'pointer'
    }
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src='/assests/images/carousel-1.png' alt="First slide" style={{height:'300px',objectFit:'cover'}} />
          <Carousel.Caption>
            <LinkContainer style={cursorPointer}to='/productDetails'>
             <h3>Best Selling Laptops</h3>
            </LinkContainer>
            <p>Dell Inspiron 5567</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src='/assests/images/carousel-2.png' alt="Second slide" />
          <Carousel.Caption>
             <LinkContainer style={cursorPointer}to='/productDetails'>
             <h3>Best Selling Books</h3>
            </LinkContainer>
            <p>Rich Dad Poor Dad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src='/assests/images/carousel-3.png' alt="Third slide" />
          <Carousel.Caption>
             <LinkContainer style={cursorPointer}to='/productDetails'>
             <h3>Best Selling Camera</h3>
            </LinkContainer>
            <p>Cannon 70HD</p>


            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default ProductCarouselComponent;
