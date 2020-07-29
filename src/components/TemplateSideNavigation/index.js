import React from 'react'
import {Link} from 'react-router-dom'
import Aside from './style';


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
                            <Link to="/"> Usuários </Link>
                        </li>
                        <li>
                            <Link to="/"> Grupos </Link>
                        </li>
                        <li>
                            <Link to="/"> Receitas </Link>
                        </li>
                        <li>
                            <Link to="/account"> Minha Conta </Link>
                        </li>
                    </ul>
                </nav>
            </Aside>
        </>
    )
}
