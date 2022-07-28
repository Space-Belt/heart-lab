import React, { useContext } from 'react';
import styled from '@emotion/styled';
import LoginJoinBox from './LoginJoinBox';

type Props = {};

const LoginJoinPage = (props: Props) => {
    return (
        <LoginJoinContainer>
            <LoginJoinBox />
        </LoginJoinContainer>
    );
};

const LoginJoinContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default LoginJoinPage;
