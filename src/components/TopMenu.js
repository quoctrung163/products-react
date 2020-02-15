import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { CartContext } from "../contexts/Cart";
import StyleLink from "../components/StyleLink";

export default function TopMenu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <StyleLink to="/">Coders.X</StyleLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem style={{ marginRight: "2rem" }}>
              <StyleLink to="/">Home</StyleLink>
            </NavItem>
            <NavItem style={{ marginRight: "2rem" }}>
              <StyleLink to="/products/">Products</StyleLink>
            </NavItem>
            <NavItem>
              <CartContext.Consumer>
                {({ cartItems }) => (
                  <StyleLink to="/carts">Cart({cartItems.length})</StyleLink>
                )}
              </CartContext.Consumer>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
