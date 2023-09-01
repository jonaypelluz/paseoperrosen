import Head from 'next/head';
import React, { type ReactNode } from 'react';

interface MainLayoutProps {
    header: ReactNode;
    footer?: ReactNode;
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ header, footer, children }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            {header}
            <main>{children}</main>
            {footer && { footer }}
        </>
    );
};

export default MainLayout;
