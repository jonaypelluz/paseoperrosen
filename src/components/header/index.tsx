import { type FC } from 'react';

const Header: FC = () => {
    return (
        <header>
            <h1>
                Paseo perros en <span>Vacarisses</span>
            </h1>
            <img className="main-image" width="300" height="201" alt="Perros de paseo" src="/images/perros-de-paseo.jpg" />
        </header>
    );
};

export default Header;
