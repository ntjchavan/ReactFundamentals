import { forwardRef, useState } from 'react';
import { Nav, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const SidebarMenu = forwardRef(function SidebarMenu({ show, onClose }, ref) {
  const [openEmployees, setOpenEmployees] = useState(false);

  if (!show) return null;

  return (
    <div ref={ref} className="bg-dark text-white p-3 position-fixed" style={{ width: '240px', height: '100vh', zIndex: 1040 }} >
      <h5 className="mb-4">MyApp</h5>

      <Nav className="flex-column gap-2">

        <Nav.Link as={Link} to="/home" className="text-white" onClick={onClose}>
          Home
        </Nav.Link>

        <Nav.Link as={Link} to="/aboutus" className="text-white" onClick={onClose}>
          About Us
        </Nav.Link>

        {/* Sub-menu */}
        <Nav.Link className="text-white d-flex justify-content-between align-items-center" onClick={() => setOpenEmployees(prev => !prev)} >
          Employees
          {openEmployees ? <FaChevronDown /> : <FaChevronRight />}
        </Nav.Link>

        <Collapse in={openEmployees}>
          <div className="ps-3">
            <Nav.Link as={Link} to="/employees/list" className="text-white" onClick={onClose} >
              Employee List
            </Nav.Link>

            <Nav.Link as={Link} to="/employees/add" className="text-white" onClick={onClose} >
              Add Employee
            </Nav.Link>
          </div>
        </Collapse>

      </Nav>
    </div>
  );
});

export default SidebarMenu;
