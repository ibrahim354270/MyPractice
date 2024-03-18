import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./header.scss";

function Header() {
  return (
    <>
      <Navbar expand="lg" >
				<Container>
					<Navbar.Brand href="#"><img src="https://icons.iconarchive.com/icons/enos-layuk/voltes-vanatics/128/Motorcycle-icon.png" alt="" /> Motorcycle Shop</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" /> 
					<Navbar.Collapse id="navbarScroll">
						<Nav className="mx-auto my-2 my-lg-0">			
													
							<Nav.Link href="#Home">Home</Nav.Link>
							<Nav.Link href="#Products">Products</Nav.Link>
							<Nav.Link href="#Basket">Basket</Nav.Link>
							<Nav.Link href="#Contact">Contact</Nav.Link>							
							
						</Nav>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-3"
								aria-label="Search"
							/>
							<Button className="btn-search custom-btn" variant="outline-dark">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
    </>
  );
}

export default Header;