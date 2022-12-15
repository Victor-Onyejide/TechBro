import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export function NavBar() {
    return (
        <NavbarBs sticky='top' className="shadow-sm bg-white mb-3 mt-3">
            <Container>
                <Nav className=''>
                    <Nav.Link to="/post" className='mynav' as={NavLink}>Post</Nav.Link>
                    <Nav.Link to="/questions" className='mynav' as={NavLink}>Questions</Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}