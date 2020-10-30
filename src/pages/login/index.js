import React from 'react'
import LoginWrap from './style';
import Input from '../../components/ui/Input';
import useForm from '../../Hooks/useForm';
import { Button } from '../../components/ui/Buttons';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Error from '../../Helper/Error';

const LoginPage = () => {

  const email = useForm();
  const password = useForm();
  const { userLogin, error, loading, login } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (email.validate() && password.validate()) {
      userLogin(email.value, password.value);
    }
  }

     
      if (login === true) return <Navigate to="/admin" />;
        return (
          <LoginWrap>
            <form onSubmit={handleSubmit} className="my-login">
                <h2>Entrar</h2> 
                <Input label="Usuário" type="text" name="email" {...email} />
                <Input label="Senha" type="password" name="password" {...password} />
                
                {loading ? (
                  <Button disabled>Carregando...</Button>
                ) : (
                  <Button className="btn ColorSecundary ButtonMd">Entrar</Button>
                )}
                <Error error={error && 'Dados incorretos.'} />
                
              </form>
              </LoginWrap>
        );

}

export default LoginPage
