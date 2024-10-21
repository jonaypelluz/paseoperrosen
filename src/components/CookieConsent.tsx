import React from 'react';
import Link from 'next/link';
import Cookie from 'universal-cookie';

const CookieConsent: React.FC<{ setShowModal: React.Dispatch<React.SetStateAction<boolean>> }> = ({
    setShowModal,
}) => {
    const declineCookies = (): void => {
        const cookie = new Cookie();
        cookie.set('paseoperrosen-analytics', false, {
            path: '/',
            expires: new Date(Date.now() + 31536000000),
        });
        setShowModal(false);
    };

    const acceptCookies = (): void => {
        const cookie = new Cookie();
        cookie.set('paseoperrosen-analytics', true, {
            path: '/',
            expires: new Date(Date.now() + 31536000000),
        });
        setShowModal(false);
    };

    return (
        <div id="cookieConsent">
            <p>
                Este sitio web utiliza cookies para analizar el tráfico. Al continuar navegando,
                aceptas su uso.
                <Link href="/politica-de-cookies/">Más información</Link>
            </p>
            <div>
                <button onClick={declineCookies} className="decline">
                    Rechazar
                </button>
                <button onClick={acceptCookies} className="accept">
                    Aceptar
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
