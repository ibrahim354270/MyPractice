import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./navbar.scss";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-warning">
				<Container>
					<Navbar.Brand href="#">Motorcycle Shop</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="mx-auto my-2 my-lg-0"
							
						
						>
							<Nav.Link href="#action1">Home</Nav.Link>
							<Nav.Link href="#action2">Products</Nav.Link>
							<Nav.Link href="#action2">Basket</Nav.Link>
							<Nav.Link href="#action2">Contact</Nav.Link>
							
							
						</Nav>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-dark">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
    </>
  );
}

export default Header;