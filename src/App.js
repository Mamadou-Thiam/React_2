import React from 'react';
import './App.css';
import Name from './Name';
import produit from './Product';
import Description from './Description';
import Value from './Value';
import { Button,Card,Nav,NavDropdown,Container,Navbar} from 'react-bootstrap';




const App = () => {
  const prenom="Mamadou"
  return (
  
    <>
    <div>
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br /><br /><br /><br />
    </div>
       
     <div>   
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={produit.image} />
      <Card.Body>
        <Card.Title><Name nom={produit.nom}/></Card.Title>
        <Card.Text>
        <Description description={produit.description}/>
        <Value prix={produit.prix}/>
        </Card.Text>
        <Button variant="dark">Buy</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
      <p>
        <h1>Bonjour</h1>{prenom? prenom:"la"}
      </p>
      {prenom && <img className='preno' src={produit.image} />}
    </div>
      
    </>
  );
};

export default App;
