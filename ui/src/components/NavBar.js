// Components/NavBar.js
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
 return (
   <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
         <Navbar.Brand href="/">Sunart Agencies</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
               <Nav.Item>
                  <Nav.Link><Link to="/home">Home</Link></Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Link className="nav-link" to="/about">About</Link>
               </Nav.Item>
               <Nav.Item>
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
               </Nav.Item>
            </Nav>  
         </Navbar.Collapse>
      </Container>
   </Navbar>
 );
};

export default NavBar;

// Components/NavBar.js
/*
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
 return (
<>
 <Navbar expand="lg" className="bg-body-tertiary">
   <Container>
      <Navbar.Brand href="#/">Sunart Agencies</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
         <Nav>
            <Nav.Item>
               <Nav.Link href="/about">about</Nav.Link>
            </Nav.Item>
         </Nav>  
      </Navbar.Collapse>
   </Container>
   </Navbar>
   <nav>
       <ul>
          <li>
             <Link to="/">Home</Link>
          </li>
          <li>
             <Link to="/about">About</Link>
          </li>
          <li>
             <Link to="/home">Home</Link>
          </li>
          <li>
             <Link to="/dashboard">Dashboard</Link>
          </li>
       </ul>
 </nav>
</>
 );
};

export default NavBar;
*/
/*
 <nav>
       <ul>
          <li>
             <Link to="/">Home</Link>
          </li>
          <li>
             <Link to="/about">About</Link>
          </li>
          <li>
             <Link to="/home">Home</Link>
          </li>
          <li>
             <Link to="/dashboard">Dashboard</Link>
          </li>
       </ul>
 </nav>
 */