'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar() {
    const router = useRouter();
    const [active, setActive] = useState('home');

    const handleClick = (rota: string) => {
        setActive(rota);
        router.push(rota === 'home' ? '/' : `/${rota}`);
    };

    return (
        <aside className="sidebar">
            <h2>MENU</h2>
            <ul>
                <li className={active === 'home' ? 'active' : ''} onClick={() => handleClick('home')}>
                    🏠 Home
                </li>
                <li className={active === 'series' ? 'active' : ''} onClick={() => handleClick('series')}>
                    📺 Séries
                </li>
                <li className={active === 'filmes' ? 'active' : ''} onClick={() => handleClick('filmes')}>
                    🎥 Filmes
                </li>
            </ul>
        </aside>
    );
}