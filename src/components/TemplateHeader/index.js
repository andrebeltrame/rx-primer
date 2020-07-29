import React, { useState } from 'react';
import { Header } from './style';
import { SignOutIcon, ThreeBarsIcon, PlusCircleIcon } from '@primer/octicons-react'
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

                        <Link to="/new-recipe">
                            <Button className="ButtonMd ColorSecundary NotMobile">Cadastrar Receita <PlusCircleIcon size={10} /></Button>
                        </Link>

                        <ul>
                            <li className="NotMobile" >
                                <Link to="/account"> Minha Conta </Link>
                            </li>
                            <li>
                                <Link to="/account"> Sair  <SignOutIcon size={15} /> </Link>
                            </li>
                        </ul>
            
                        <Button className="MobileNav"><ThreeBarsIcon size={25} /></Button>
                    </nav>
               </div>

                <div className="MenuMobile NotMobile">
                   Menu
               </div>

            </Header>
        </>
    )
}
export default TemplateHeader;