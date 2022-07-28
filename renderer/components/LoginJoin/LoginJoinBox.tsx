import React, { useContext } from 'react';
import styled from '@emotion/styled';
import LoginForm from './LoginForm';
import { LoginJoinContext } from '../../context/LoginJoin';
import JoinForm from './JoinForm';

type Props = {};

const LoginJoinBox = (props: Props) => {
    const { ljCheck } = useContext(LoginJoinContext);
    return (
        <LoginJoinFormBox>
            {ljCheck === 'login' ? (
                <LoginForm ljCheck={ljCheck} />
            ) : (
                <JoinForm ljCheck={ljCheck} />
            )}
        </LoginJoinFormBox>
    );
};

const LoginJoinFormBox = styled.div`
    width: 50%;
    background-color: #eeeeee;
`;

export default LoginJoinBox;
