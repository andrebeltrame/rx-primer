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
                                <Link to="/">
                                    Minha Conta
                                </Link>
                            </li>
                            <li>
                                <Button className="ButtonMd ColorPrimary">Sair</Button>
                            </li>
                        </ul>
                    </nav>
               </div>
            </Header>
        </>
    )
}
export default TemplateHeader;