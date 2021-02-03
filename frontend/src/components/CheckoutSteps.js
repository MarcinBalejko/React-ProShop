import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.link disabled>Sign In</Nav.link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.link disabled>Shipping</Nav.link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/payment">
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.link disabled>Payment</Nav.link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.link disabled>Place Order</Nav.link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
