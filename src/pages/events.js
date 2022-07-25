import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";

function events() {
return (
	<Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.creditboss.in/wp-content/uploads/2020/10/Process-of-funding.jpg"
          height="100"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://www.iccr.gov.in/sites/default/files/POS%20-%20Odissi%20-%2005_0.jpg"
          height="500"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/SiW8P42C0Ck/maxresdefault.jpg"
          height="500"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
	
);
};

export default events;
