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
            <Link to="/admin/tips"> Dica da Jana </Link>
          </li>
          <li>
            <Link to="/admin/posts"> Publicações</Link>
          </li>
          <li>
            <Link to="/admin/users"> Usuários </Link>
          </li>
          <li>
            <Link to="/admin/recipes"> Receitas </Link>
          </li>
          <li>
            <Link to="/admin/category"> Categorias </Link>
          </li>
          <li>
            <Link to="/admin/account"> Minha Conta </Link>
          </li>
        </ul>
      </>
    );
}

export default SiteMenus;
