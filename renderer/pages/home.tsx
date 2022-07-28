import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import LoginJoinPage from '../components/LoginJoin';

const Home: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Heart-Lab-Chat</title>
            </Head>
            <LoginJoinPage />
        </React.Fragment>
    );
};

export default Home;
