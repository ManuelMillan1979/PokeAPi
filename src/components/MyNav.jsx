import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, NavLink } from 'react-router-dom';
import { MdCatchingPokemon } from "react-icons/md";

const MyNav = () => {
  const activeClass = ({ isActive }) => (isActive? "active" : "inactive")

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/")
  }

  return (
    <Navbar expand="lg" className="bg-secondary">
    <Container>
    <Navbar.Brand onClick={handleClick}><MdCatchingPokemon size={50}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
        <NavLink className={activeClass} style={{ textDecoration: 'none', fontSize: "1.1rem", margin: "5px"}} to="/">Home</NavLink>
        <NavLink className={activeClass} style={{ textDecoration: 'none', fontSize: "1.1rem", margin: "5px"}} to="/pokemons">Pokémons</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default MyNav;
