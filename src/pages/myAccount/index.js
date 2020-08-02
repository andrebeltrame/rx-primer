import React from 'react'
import Card from '../../components/ui/Card'
import Input from '../../components/ui/Input'
import { Button } from '../../components/ui/Buttons'

const MyAccount = () => {
    const [name , setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [RePassword, setRePassword] = React.useState('');

    function handleSubmit(event){
        event.preventDefault();
        console.log(name)
    }

    return (
        <Card className="no-border">
            <h2>Minha Conta</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col col-6">
                        <Input value={name} onChange={(event) => setName(event.target.value)} setValue={setName} 
                         type="text" label="Nome" required/>
                    </div>
                    <div className="col col-6">
                        <Input value={email} setValue={setEmail} onChange={(event) => setEmail(event.target.value)}  type="e-mail" label="E-mail"  required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-6">
                        <Input value={password} setValue={setPassword} onChange={(event) => setPassword(event.target.value)}  type="password" label="Senha" required/>
                    </div>
                    <div className="col col-6">
                        <Input value={RePassword} setValue={setRePassword} onChange={(event) => setRePassword(event.target.value)}  type="password" label="Repita sua senha" required />
                    </div>
                </div>

                <div className="row">
                    <div className="col col-12">
                        <Button className="ButtonMd ColorPrimary">Salvar meus dados</Button>
                    </div>
                </div>
            </form>
        </Card>
    )
}

export default MyAccount
