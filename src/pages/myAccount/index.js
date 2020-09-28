import React from 'react'
import Card from '../../components/ui/Card'
import Input from '../../components/ui/Input'
import { Button } from '../../components/ui/Buttons';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const MyAccount = () => {
    const [name , setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [RePassword, setRePassword] = React.useState('');

    function handleSubmit(event){
        event.preventDefault();
        console.log(name)
    }

      const notify = () =>
        toast.success("Seus dados foram alterados.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

    return (
      <Card className="no-border">
        <h2>Minha Conta</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col col-6">
              <Input
                value={name}
                onChange={(event) => setName(event.target.value)}
                setValue={setName}
                type="text"
                label="Nome"
                required
              />
            </div>
            <div className="col col-6">
              <Input
                value={email}
                setValue={setEmail}
                onChange={(event) => setEmail(event.target.value)}
                type="e-mail"
                label="E-mail"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col col-6">
              <Input
                value={password}
                setValue={setPassword}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                label="Senha"
                required
              />
            </div>
            <div className="col col-6">
              <Input
                value={RePassword}
                setValue={setRePassword}
                onChange={(event) => setRePassword(event.target.value)}
                type="password"
                label="Repita sua senha"
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col col-12">
              <Button onClick={notify} className="ButtonMd ColorPrimary">
                Salvar meus dados
              </Button>
            </div>
          </div>
        </form>

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Card>
    );
}

export default MyAccount
