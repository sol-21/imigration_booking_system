import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ApplicationLogo from '../Components/ApplicationLogo';

function TopNavAdmin() {


    return (
        <>
            <Navbar bg='dark' expand="lg" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand href="#home" className='d-flex'>

                        < ApplicationLogo className="navbarlogo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='me-auto'></Nav>
                        <Nav className="">

                            <NavDropdown title="Profile" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>


                                <NavDropdown.Divider />

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>);
}

export default TopNavAdmin;