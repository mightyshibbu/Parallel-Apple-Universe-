// import logo from './logo.svg';
import './App.css';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <>




<Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              align="middle"
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg"
              height="25"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Store</Nav.Link>
            <Nav.Link href="https://www.apple.com/mac/">Mac</Nav.Link>
            <Nav.Link href="https://www.apple.com/ipad/">iPad</Nav.Link>
            <Nav.Link href="https://www.apple.com/iphone/">iPhone</Nav.Link>
            <Nav.Link href="https://www.apple.com/Watch/">Watch</Nav.Link>  
            <Nav.Link href="https://www.apple.com/airpods/">AirPods</Nav.Link>
            <Nav.Link href="https://support.apple.com/">Support</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {['dark'].map((variant) => (
        <Alert key={variant} variant={variant}>
          Introducing Apple One. Bundle your favorite services and enjoy more of
          Apple for less.{' '}
          <a href="https://www.apple.com/apple-one/"> Learn more</a>
        </Alert>
      ))}
<h2><center>Apple Inc.</center> </h2>



    </>
  );
}

export default App;
