import React from 'react'
import LoginWrap from './style';
import Input from '../../components/ui/Input';
import { Button } from '../../components/ui/Buttons';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <LoginWrap>
           <form class="my-login">
               <h2>Entrar</h2>
                <Input label="E-mail" type="text" required />
                <Input label="Senha" type="text" required />
                <Link to="/home">
                    <Button className="btn ButtonMd">Login</Button>
                </Link>
           </form>
        </LoginWrap>
    )
}

export default LoginPage
