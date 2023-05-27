import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/logo.png';
import '../globalstyle.css'

export const Header = () => {
  return (
    <div>
      <Navbar className="navbar-custom">
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/cariDokter" className="nav-link">Cari Dokter</Nav.Link>
            <Nav.Link as={Link} to="/artikel" className="nav-link">Artikel</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header;
