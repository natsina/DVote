import { Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const NavbarHeader = ({ connect, connected, register, isMember }) => {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
            <Navbar.Brand href="/">Voting</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link href="./votes">Votes</Nav.Link>
                            <Nav.Link href="./create-vote">Create Vote</Nav.Link>
                            {!isMember && (
                            <Button variant="success" onClick={ register}>
                                Register to Vote
                            </Button>)}    
                        </Nav>
                        <Nav>
                            {!connected ? (
                            <Button onClick={connect }>Connect to Metamask</Button>
                            ) : (
                                <p style={{color: "white"}}>Wallet Connected</p>
                            )}    
                        </Nav>
                    </Navbar.Collapse>
        </Container>
    </Navbar>;
    
};

export default NavbarHeader;