import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";

    const Navbar = () => {
        return (
          <>
            <Nav>
              <NavMenu>
              <img
                    src='https://www.creditboss.in/wp-content/uploads/2020/10/Process-of-funding.jpg'
                    height='30'
                    alt=''
                    loading='lazy'
                  />
                
                <NavLink to="/events" activeStyle>
                  One Nation-One funding
                </NavLink>
                <NavLink to="/sign-up" activeStyle>
                  Sign In/Sign Up
                </NavLink>
              </NavMenu>
            </Nav>
          </>
        );
      };
        
      export default Navbar;
      