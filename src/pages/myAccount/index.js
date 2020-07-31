import React from 'react'
import Card from '../../components/ui/Card'
import Input from '../../components/ui/Input'
import { Button } from '../../components/ui/Buttons'

const MyAccount = () => {
    return (
        <Card className="no-border">
            <h2>Minha Conta</h2>
            <div className="row">
                <div className="col col-6">
                    <Input type="text" label="Nome" />
                </div>
                <div className="col col-6">
                    <Input type="text" label="Sobrenome" />
                </div>
            </div>
            <div className="row">
                <div className="col col-6">
                    <Input type="password" label="Senha" />
                </div>
                <div className="col col-6">
                    <Input type="password" label="Repita sua senha" />
                </div>
            </div>

            <div className="row">
                <div className="col col-12">
                    <Button className="ButtonMd ColorPrimary">Salvar meus dados</Button>
                </div>
            </div>
        </Card>
    )
}

export default MyAccount
