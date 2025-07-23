'use client';

import { useState } from 'react';

export default function SidebarToggle() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        const sidebar = document.querySelector('.sidebar') as HTMLElement;

        if (sidebar) {
            sidebar.style.display = isOpen ? 'none' : 'block';
            setIsOpen(!isOpen);
        }
    };

    return (
        <div>
            <button className="menu-toggle" onClick={toggleSidebar}>
                ☰
            </button>
        </div>
    );
}