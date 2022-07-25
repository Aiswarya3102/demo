import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";

function header() {
  return (
    
    <Carousel>
      <Carousel.Item interval={1000}>
      <h1>One Nation-One Funding</h1>
        <img
          className="d-block w-100"
          src="https://www.creditboss.in/wp-content/uploads/2020/10/Process-of-funding.jpg"
          height="500"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <h1>One Nation-One Funding</h1>
        <img
          className="d-block w-100"
          src="https://d1ngglk168riv7.cloudfront.net/n/wp-content/uploads/2020/04/30092032/qatarfoundationcover.jpg"
          height="500"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <h1>One Nation-One Funding</h1>
        <img
          className="d-block w-100"
          src="https://i2.cdn.turner.com/cnn/dam/assets/120416063143-education-funding-story-top.jpg"
          height="500"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  )
}
export default header;
/*import React, { Component } from 'react'
import moon from "C:/Users/guraj/funds/src/moon.jpg"

class header extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://https://www.shutterstock.com/search/free-background" className="navbar-brand">This is a header</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default header;

/*import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="clearfix mt-4">
        <h1>ReactJs Users Cards</h1>
      </header>
    );
  }
}

export default Header;*/