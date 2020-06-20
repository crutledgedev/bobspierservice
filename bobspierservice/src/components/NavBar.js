import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const NavBar = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Bob's Pier Service</h1>

          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
          {/* <Link to="/"> Home </Link>
          <Link to="/gallery"> Gallery </Link> */}
          <Navigation />
        </Container>
      </Jumbotron>
    </div>
  );
};

export default NavBar;
