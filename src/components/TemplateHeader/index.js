import React from 'react';
import { Header } from './style';
import { SignOutIcon, ThreeBarsIcon, PlusCircleIcon } from '@primer/octicons-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Buttons';
import SiteMenus from '../TemplateSideNavigation/Menus';



function TemplateHeader() {

    const [activeMenu, setActiveMenu] = React.useState(false);

    function showMenu() {
        setActiveMenu(!activeMenu);
    }

     function logOut() {
       localStorage.clear();
       window.location.reload(false);
     }

    return (
        <>
            <Header>
               <div className="container">
                    <Link to="/">
                        <h1>Jhana Low Carb</h1>
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
                                <a href="#" onClick={logOut}> Sair  <SignOutIcon size={15} /> </a>
                            </li>
                        </ul>
            
                        <Button onClick={showMenu} className="MobileNav"><ThreeBarsIcon size={25} /></Button>
                    </nav>
               </div>

                <div className={`MobileMenu ${activeMenu ? "active" : ""}`}>
                    <div className="LeftMenu">
                        <SiteMenus/>
                    </div>
                    <div onClick={showMenu}  className="menuOpacity"></div>
               </div>

            </Header>
        </>
    )
}
export default TemplateHeader;