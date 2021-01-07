import React from "react";
import { Carousel } from "react-bootstrap";
const SlideShow = () => {
  return (
    <Carousel className="carou">
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="/SlideImages/Image1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="/SlideImages/Image2.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="/SlideImages/Image3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideShow;
