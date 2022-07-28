import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { LoginJoinContext } from '../../context/LoginJoin';
import { Input } from './Input';
import LoginJoinBtn from './LoginJoinBtn';

type Props = {
    ljCheck: string;
};

const JoinForm = (props: Props) => {
    const { ljCheck } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPw, setcheckPw] = useState('');
    const [nickName, setNickName] = useState('');
    const { changeStatus } = useContext(LoginJoinContext);
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value },
        } = event;
        if (name === 'email') setEmail(value);
        else if (name === 'password') setPassword(value);
        else if (name === 'checkPW') setNickName(value);
        else if (name === 'nickName') setNickName(value);
    };
    return (
        <JForm>
            <Input
                inputId={'email'}
                labelName={'아이디'}
                placed={'아이디를 입력해주세요'}
                handleOnChange={handleOnChange}
                value={email}
            />
            <Input
                inputId={'password'}
                labelName={'비밀번호'}
                placed={'비밀번호를 입력해주세요'}
                handleOnChange={handleOnChange}
                value={password}
            />
            <Input
                inputId={'checkPW'}
                labelName={'비밀번호 확인'}
                placed={'비밀번호를 입력해주세요'}
                handleOnChange={handleOnChange}
                value={checkPw}
            />
            <Input
                inputId={'nickName'}
                labelName={'닉네임'}
                placed={'닉네임을 입력해주세요'}
                handleOnChange={handleOnChange}
                value={nickName}
            />
            <LoginJoinBtn
                type={'submit'}
                value={'회원가입하기'}
                name={'join'}
            />
            <LoginJoinBtn
                value={'로그인 페이지로'}
                name={'login'}
                onClick={changeStatus}
                readonly={'readonly'}
            />
        </JForm>
    );
};

const JForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export default JoinForm;
