import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Badge, Dropdown } from 'react-bootstrap'
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

function AppNavbar() {
    const [expanded, setExpanded] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const navRef = useRef(null); // for navbar collapse
    const notificationRef = useRef(null) // for notification dropdown

    // Close navbar or notification if clicked outside
    useEffect(() => {
        function handleClickOutside(event) {
            // Close navbar collapse
            if (expanded && navRef.current && !navRef.current.contains(event.target)) {
                setExpanded(false);
            }

            // Close notification dropdown
            if (notificationOpen && notificationRef.current && !notificationRef.current.contains(event.target)) {
                setNotificationOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [expanded, notificationOpen]);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded} ref={navRef}>
                <Container>
                    {/* Left: Logo / Menu */}
                    <Navbar.Brand as={Link} to="/" onClick={() => { setExpanded(false) }}>Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar" onClick={() => { setExpanded(prev => !prev) }} />
                    <Navbar.Collapse id="main-navbar">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home" onClick={() => setExpanded(false)}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/aboutus" onClick={() => setExpanded(false)}>About Us</Nav.Link>
                            <Nav.Link as={Link} to="/products" onClick={() => setExpanded(false)}>Products</Nav.Link>
                            <Nav.Link as={Link} to="/contactus" onClick={() => setExpanded(false)}>Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/registerform" onClick={() => setExpanded(false)}>Register Form</Nav.Link>

                            {/* Dropdown menu */}
                            <NavDropdown title="Employees" id="employees-dropdown">
                                <NavDropdown.Item as={Link} to="/counter" onClick={() => setExpanded(false)}>
                                    Counter
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/demo1" onClick={() => setExpanded(false)}>
                                    Demo
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/registerform" onClick={() => setExpanded(false)}>
                                    Regitster Form
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Demo" id="Demo">
                                <NavDropdown.Item as={Link} to="/counter" onClick={() => setExpanded(false)}>
                                    Counter
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/demo1' onClick={() => setExpanded(false)}>
                                    Demo1
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/registerform" onClick={() => setExpanded(false)}>
                                    Regitster Form
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {/* Right: Notification + Profile */}
                        <Nav className="ms-auto align-items-center gap-3">
                            {/* Notification Dropdown */}
                            <Dropdown align="end" show={notificationOpen} ref={notificationRef} onToggle={(isOpen) => setNotificationOpen(isOpen)}>
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
