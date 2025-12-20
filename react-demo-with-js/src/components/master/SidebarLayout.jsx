import { useState, useRef, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import TopHeader from './TopHeader';
import SidebarMenu from './SidebarMenu';

function SidebarLayout() {
    const [showSidebar, setShowSidebar] = useState(false);
    const sidebarRef = useRef(null);

    //Close sidebar when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                showSidebar &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setShowSidebar(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showSidebar]);

    return (
        <div className="d-flex">
            <SidebarMenu ref={sidebarRef} show={showSidebar} onClose={() => setShowSidebar(false)} />

            <div className="flex-grow-1">
                <TopHeader onToggle={() => setShowSidebar(prev => !prev)} />
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default SidebarLayout;