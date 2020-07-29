import React from 'react'
import { Header } from './style';
import { SignOutIcon, ThreeBarsIcon } from '@primer/octicons-react'
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
                        <Button className="ButtonMd ColorPrimary">Sair <SignOutIcon size={16} /> </Button>
                        <Button className="MobileNav"><ThreeBarsIcon size={25} /></Button>
                    </nav>
               </div>
            </Header>
        </>
    )
}
export default TemplateHeader;