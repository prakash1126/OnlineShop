import React from "react";
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryCardComponent = ({ category, index }) => {
  const images = [
    "/assests/images/tablets-category.png",
    "/assests/images/Monitors.png",
  ];
  return (
    <>
      <Card>
        <Card.Img variant="top" src={images[index]} />
        <Card.Body>
          <Card.Title>{category}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <LinkContainer to="productList">
            <Button variant="primary">Go to Category</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </>
  );
};

export default CategoryCardComponent;
