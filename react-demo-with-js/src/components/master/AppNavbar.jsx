import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Badge, Dropdown } from 'react-bootstrap'
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';

function AppNavbar() {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
                <Container>
                    {/* Left: Logo / Menu */}
                    <Navbar.Brand as={Link} to="/" onClick={() => {setExpanded(false)}}>MyApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar" onClick={() => {setExpanded(prev => !prev)}} />
                    <Navbar.Collapse id="main-navbar">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home" onClick={() => setExpanded(false)}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/aboutus" onClick={() => setExpanded(false)}>About Us</Nav.Link>
                            <Nav.Link as={Link} to="/products" onClick={() => setExpanded(false)}>Products</Nav.Link>
                            <Nav.Link as={Link} to="/contactus" onClick={() => setExpanded(false)}>Contact Us</Nav.Link>

                            {/* Dropdown menu */}
                            <NavDropdown title="Employees" id="employees-dropdown">
                                <NavDropdown.Item as={Link} to="/employees/list">
                                    Employee List
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/employees/add">
                                    Add Employee
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/employees/import">
                                    Import Employees
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {/* Right: Notification + Profile */}
                        <Nav className="ms-auto align-items-center gap-3">
                            {/* Notification Dropdown */}
                            <Dropdown align="end">
                                <Dropdown.Toggle variant="link" className="text-white position-relative p-0" id="notification-dropdown" >
                                    <FaBell size={18} />
                                    <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle" >
                                        3
                                    </Badge>
                                </Dropdown.Toggle>
                                <Dropdown.Menu style={{ minWidth: '300px' }}>
                                    <Dropdown.Header>Notifications</Dropdown.Header>
                                    <Dropdown.Item>
                                        <strong>Report Ready</strong>
                                        <div className="text-muted small">
                                            Monthly report generated
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <strong>New Employee</strong>
                                        <div className="text-muted small">
                                            John Doe joined today
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item className="text-center">
                                        View all notifications
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {/* Profile */}
                            <NavDropdown title={<FaUserCircle size={22} />} align="end" >
                                <NavDropdown.Item as={Link} to="/profile">
                                    Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/settings">
                                    Settings
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/logout">
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default AppNavbar;
