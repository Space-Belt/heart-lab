import React from 'react';
import '../styles/global.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { LJProvider } from '../context/LoginJoin';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <LJProvider>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Component {...pageProps} />
        </LJProvider>
    );
};

export default MyApp;
