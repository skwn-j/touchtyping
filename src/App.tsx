import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import TextComponent from './components/TextComponent'

function App() {
    return (
        <div className="App">
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home"> Touch Typing </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
            <body>
                <TextComponent></TextComponent>
            </body>
        </div>
    )
}

export default App
