import React from 'react'
import { Link } from 'react-router-dom'

export const TemplateSideNavigation = () => {
    return (
        <>
            <aside>
                <nav className="sideNavigation">
                    <ul>
                        <li>
                            <Link to="/"> Inicio </Link>
                        </li>
                        <li>
                            <Link to="/"> Dica da Jana </Link>
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
                    </ul>
                </nav>
            </aside>
        </>
    )
}
