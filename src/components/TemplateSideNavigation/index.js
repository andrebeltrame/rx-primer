import React from 'react'
import Aside from './style';
import SiteMenus from './Menus';

export const TemplateSideNavigation = () => {
    return (
        <>
            <Aside>
                <nav className="sideNavigation">
                    <SiteMenus />
                </nav>
            </Aside>
        </>
    )
}
