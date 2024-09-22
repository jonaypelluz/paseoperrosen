import React, { type ReactNode, type FC } from 'react';
import ReactGA from 'react-ga4';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Wrapper from '@/components/Wrapper';
import Head from 'next/head';

interface MainLayoutProps {
    locationName?: string;
    children?: ReactNode;
    slug?: string;
    customTitle?: string;
}

const MainLayout: FC<MainLayoutProps> = ({ locationName, children, slug, customTitle }) => {
    ReactGA.initialize('G-W0VY0CJJQD');

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className="layout">
                <Header locationName={locationName} />
                <main>
                    {(slug !== null || customTitle !== null) && (
                        <Breadcrumb slug={slug} customTitle={customTitle} />
                    )}
                    <Wrapper>{children}</Wrapper>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default MainLayout;
