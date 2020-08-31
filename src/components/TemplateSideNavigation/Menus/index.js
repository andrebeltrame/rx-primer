import React from 'react';
import { Link } from 'react-router-dom';


const SiteMenus = () => {
    return (
      <>
        <ul>
          <li>
            <Link  to="/"> Inicio </Link>
          </li>
          <li>
            <Link to="/tips"> Dica da Jana </Link>
          </li>
          <li>
            <Link to="/posts"> Publicações</Link>
          </li>
          <li>
            <Link to="/users"> Usuários </Link>
          </li>
          <li>
            <Link to="/recipes"> Receitas </Link>
          </li>
          <li>
            <Link to="/category"> Categorias </Link>
          </li>
          <li>
            <Link to="/account"> Minha Conta </Link>
          </li>
        </ul>
      </>
    );
}

export default SiteMenus;
