import React from 'react'
import LoginWrap from './style';
import Input from '../../components/ui/Input';
import { Button } from '../../components/ui/Buttons';
import { Link } from 'react-router-dom';

const LoginPage = () => {

    function login() {
      localStorage.setItem("token", 1);
      window.location.reload(false);
    }
    return (
      <LoginWrap>
        <form className="my-login">
          <h2>Entrar</h2>
          <Input label="E-mail" type="text" required />
          <Input label="Senha" type="text" required />
          <Link to="/">
            <Button
              onClick={login}
              className="btn ColorSecundary ButtonMd"
            >
              Login
            </Button>
          </Link>
        </form>
      </LoginWrap>
    );
}

export default LoginPage
