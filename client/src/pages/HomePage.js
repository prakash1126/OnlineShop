import React from "react";
import CategoryCardComponent from "./components/CategoryCardComponent";
import ProductCarouselComponent from "./components/ProductCarouselComponent";
import { Row,Container } from "react-bootstrap";

const HomePage = () => {
  const categories = [
    "Tablets",
    "Monitors",
    "Games",
    "Printers",
    "Software",
    "Camera",
    "Kitchens",
    "Books",
    "Videos",
  ];
  return (
    <>
      <ProductCarouselComponent />
      <Container >
         <Row xs={1} md={2} className="g-4 mt-5">
        {
        categories.map((item, index) => {
          return <CategoryCardComponent key={index} category={item} index={index}/>;
        })
        }
      </Row>
      </Container>
     
    </>
  );
};

export default HomePage;
