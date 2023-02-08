import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export function NavBar() {
    return (
        <NavbarBs sticky='top' className="shadow-sm bg-white mb-3">
            <Container>
                <Nav className='nav-links'>
                    {/* <div className='links'> */}
                        <Nav.Link to="/post" className='mynav' as={NavLink}>Post</Nav.Link>
                        <Nav.Link to="/questions" className='mynav' as={NavLink}>Questions</Nav.Link>
                    {/* </div> */}
                    {/* <div className='login-icon'> */}
                        <Nav.Link to="/login" className='mynav'  as={NavLink} >LogIn</Nav.Link>
                        <Nav.Link className='user-icon'><i class="far fa-user"></i></Nav.Link>
                    {/* </div> */}
                </Nav>
            </Container>
        </NavbarBs>
    )
}