import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function TopNavbar() {
    const navigate = useNavigate();
    return (
        <Navbar bg="light" variant="light" className='fixed nav-position'>
            <Container>
                <Navbar.Brand>ReactShop</Navbar.Brand>
                <Nav className="me-auto" defaultActiveKey="page-0">
                    <Nav.Link eventKey="page-0" onClick={() => { navigate('/') }}>Home</Nav.Link>
                    <Nav.Link eventKey="page-1" onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default TopNavbar;