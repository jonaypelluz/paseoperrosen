import React from 'react';
import PropTypes from 'prop-types';
import type { AppProps } from 'next/app';
import '@/styles/global.scss';

const TheApp = ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />;

TheApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default TheApp;
