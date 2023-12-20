import { FC } from 'react';

interface HeaderProps {
    locationName: string;
};

const Header: FC<HeaderProps> = ({ locationName }) => {
    return (
        <header>
            <h1>
                Paseo perros en <span>{locationName}</span>
            </h1>
            <img
                className="main-image"
                width="300"
                height="201"
                alt="Perros de paseo"
                src="/images/perros-de-paseo.jpg"
            />
        </header>
    );
};

export default Header;
