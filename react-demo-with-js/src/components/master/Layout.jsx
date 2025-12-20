import { Outlet } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import { Container } from "react-bootstrap";

function Layout() {
    return (
        <>
            <AppNavbar />
            <Container fluid className="pt-5 mt-4">
                <Outlet />
            </Container>
        </>
    )
}

export default Layout;