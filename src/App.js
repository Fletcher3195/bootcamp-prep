import './App.css'

// import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import { CopyBlock, github } from "react-code-blocks"

const code = 'console.log("hello world")'

function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Bootcamp-Prep</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Resources" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Node.js</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">React.js</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/microsoft/vscode">VS Code</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/microsoft/terminal">Windows Terminal</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://react-bootstrap.github.io/components/alerts">React Bootstrap</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Row>
          <br/>
          <br/>
        </Row>
        {/* {<Row>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
        </Row>} */}
        <Row>
          <Col>
            <h1>Overview</h1>
            <br/>
            <Tabs defaultActiveKey="variables" id="uncontrolled-tab-example">
              <Tab eventKey="variables" title="Variables">
                <p>Test</p>
                <CopyBlock
                  text={code}
                  language='javascript'
                  wrapLines
                />
              </Tab>
              <Tab eventKey="loops" title="Loops">
              </Tab>
              <Tab eventKey="functions" title="Functions" disabled>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App