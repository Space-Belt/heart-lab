import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { Input } from './Input';
import LoginJoinBtn from './LoginJoinBtn';
import { LoginJoinContext } from '../../context/LoginJoin';

type Props = {
    ljCheck: string;
};

const LoginForm = (props: Props) => {
    const { ljCheck } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { changeStatus } = useContext(LoginJoinContext);
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value },
        } = event;
        if (name === 'email') setEmail(value);
        else setPassword(value);
    };

    return (
        <LForm>
            <Input
                inputId={'email'}
                labelName={'Email'}
                placed={'이메일를 입력해주세요'}
                handleOnChange={handleOnChange}
                value={email}
            />
            <Input
                inputId={'password'}
                labelName={'PW'}
                placed={'이메일를 입력해주세요'}
                handleOnChange={handleOnChange}
                value={password}
            />
            <LoginJoinBtn type={'submit'} value={'로그인'} name={'login'} />
            <LoginJoinBtn
                value={'회원가입'}
                name={'join'}
                onClick={changeStatus}
                readonly={'readonly'}
            />
        </LForm>
    );
};

const LForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export default LoginForm;
