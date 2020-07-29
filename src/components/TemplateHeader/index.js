import React from 'react'
import { Header } from './style';

import { Link } from 'react-router-dom'
import { Button } from '../ui/Buttons';

function TemplateHeader() {
    return (
        <>
            <Header>
               <div className="container">
                    <Link to="/">
                        <h1>Dashboard</h1>
                    </Link>
                    <nav className="Menu">
                        <ul>
                            <li>
                                <Link to="/account"> Minha Conta </Link>
                            </li>
                        </ul>
                        <Button className="ButtonMd ColorPrimary">Sair</Button>
                    </nav>
               </div>
            </Header>
        </>
    )
}
export default TemplateHeader;