import Link from 'next/link';
import { useEffect, useState, type FC } from 'react';
import Cookie from 'universal-cookie';
import CookieConsent from '@/components/CookieConsent';

const Footer: FC = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const cookie = new Cookie();
        const cookieValue = cookie.get('paseoperrosen-analytics');

        if (cookieValue === undefined) {
            setShowModal(true);
        } else if (cookieValue === false) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any)['ga-disable-G-W0VY0CJJQD'] = true;
        } else if (cookieValue === true) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any)['ga-disable-G-W0VY0CJJQD'] = false;
        }
    }, []);

    return (
        <footer>
            <div>
                <nav>
                    <Link href="/politica-de-privacidad/">Política de privacidad</Link>
                    <Link href="/politica-de-cookies/">Política de cookies</Link>
                </nav>
                <div className="powered-by">powered by jonaypelluz</div>
            </div>
            {showModal && <CookieConsent setShowModal={setShowModal} />}
        </footer>
    );
};

export default Footer;
