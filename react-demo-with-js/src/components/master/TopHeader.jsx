import { Nav, NavDropdown, Badge, Dropdown } from 'react-bootstrap';
import { FaBell, FaUserCircle, FaBars } from 'react-icons/fa';

function TopHeader({ onToggle }) {
    return (
        <div className="d-flex align-items-center justify-content-between px-3 py-2 bg-dark text-white">

            {/* ☰ Toggle icon */}
            <FaBars size={20} role="button" onClick={onToggle} />

            <Nav className="align-items-center gap-3">
                <Dropdown align="end">
                    <Dropdown.Toggle variant="link" className="position-relative p-0">
                        <FaBell size={18} />
                        <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                            3
                        </Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Report Ready</Dropdown.Item>
                        <Dropdown.Item>New Employee</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <NavDropdown title={<FaUserCircle size={22} />} align="end">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                    <NavDropdown.Item>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </div>
    );
}

export default TopHeader;