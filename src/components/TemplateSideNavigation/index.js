import React from 'react'
import {Link} from 'react-router-dom'
import Aside from './style';
import { Button } from '../../components/ui/Buttons';

export const TemplateSideNavigation = () => {
    return (
        <>
            <Aside>
                <nav className="sideNavigation">
                    <ul>
                        
                        <li>
                            <Link to="/"> Inicio </Link>
                        </li>
                        <li>
                            <Link to="/tips"> Dica da Jana </Link>
                        </li>
                        <li>
                            <Link to="/users"> Usuários </Link>
                        </li>
                        <li>
                            <Link to="/groups"> Grupos </Link>
                        </li>
                        <li>
                            <Link to="/recipes"> Receitas </Link>
                        </li>
                        <li>
                            <Link to="/account"> Minha Conta </Link>
                        </li>
                        <li>
                            <Link to="/new-recipe">
                                <Button className="ButtonMd ColorSecundary">Cadastrar Receita</Button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Aside>
        </>
    )
}
