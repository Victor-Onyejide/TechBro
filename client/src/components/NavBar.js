import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


export function NavBar() {
    const isUserAuthenticated = useSelector(state => state.auth.isUserAuthenticated);
    return (
        <NavbarBs sticky='top' className="shadow-sm bg-white mb-3">
            <Container>
                <Nav className='nav-links'>
                    <div className='links'>
                        <Nav.Link to="/" className='mynav' as={NavLink}>Home</Nav.Link>
                        <Nav.Link to="/questions" className='mynav' as={NavLink}>Questions</Nav.Link>
                        {
                            isUserAuthenticated && 
                            <Nav.Link to="/post" className='mynav' as={NavLink}>Post</Nav.Link>
                            
                        }
                    </div>
                    <div className='login-icon'>
                        {
                            isUserAuthenticated ? <Nav.Link className='mynav'  as={NavLink} >LogOut</Nav.Link> : 
                            <Nav.Link to="/login" className='mynav'  as={NavLink} >LogIn</Nav.Link>
                        }
                        <Nav.Link className='user-icon'><i className="far fa-user"></i></Nav.Link>
                    </div>
                </Nav>
            </Container>
        </NavbarBs>
    )
}