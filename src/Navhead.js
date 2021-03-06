import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

function Navhead() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark"  variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >

          <Nav className="ml-auto "  activeKey="/">
            <Nav.Item> <Nav.Link href="/">Home &nbsp; &nbsp; &nbsp; &nbsp; </Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/playlist">Playlist &nbsp; &nbsp; &nbsp;</Nav.Link> </Nav.Item>
          </Nav>      
        </Navbar.Collapse>
      </Navbar>
  );
}
export default Navhead;