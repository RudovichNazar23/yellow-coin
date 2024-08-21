import { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import HomeLogo from "./HomeLogo";
import OptionsList from "./OptionsList";
import DropMenu from "./DropMenu";

export default function ExpandNavbar(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary d-xl-none d-md-none d-inline p-1">
            <Container>
                <Navbar.Brand className="col-6">
                    <HomeLogo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="col-12 align-self-center" onClick={() => setIsOpen(!isOpen)}>
                    <img src={isOpen ? "/arrow_up.svg" : "/arrow_down.svg"} className="img-fluid" alt="..."/>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <OptionsList />
                    </Nav>
                    <Nav className="ms-2 mt-1">
                        <DropMenu />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};