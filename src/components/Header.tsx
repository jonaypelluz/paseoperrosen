import Link from 'next/link';
import type { FunctionComponent } from 'react';

interface HeaderProps {
    locationName?: string;
}

const Header: FunctionComponent<HeaderProps> = ({ locationName }) => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/blog/">Blog</Link>
                    </li>
                    <li>
                        <Link href="/vacarisses/">Vacarisses</Link>
                    </li>
                </ul>
            </nav>
            <h1>
                Paseo perros en <span>{locationName ?? '.com'}</span>
            </h1>
            {locationName !== null && locationName !== undefined && (
                <img
                    className="main-image"
                    width="300"
                    height="201"
                    alt="Perros de paseo"
                    src="/images/perros-de-paseo.jpg"
                />
            )}
        </header>
    );
};

export default Header;
