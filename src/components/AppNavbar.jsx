import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function AppNavbar() {
	return (
		<Navbar bg='light' expand='lg'>
			<Container>
				<Link to='/' className='navbar-brand'>
					Cart App
				</Link>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-auto'>
						<Link className='nav-link' to='/'>
							Products
						</Link>
						<Link className='nav-link' to='/cart'>
							Cart <Badge bg='primary'>4</Badge>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default AppNavbar;
