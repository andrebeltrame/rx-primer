import React from 'react'
import TemplateFooter from '../components/TemplateFooter';
import TemplateHeader from '../components/TemplateHeader';
import { TemplateSideNavigation } from '../components/TemplateSideNavigation';
import './style.css';
import { Outlet } from 'react-router-dom';

export default function TemplateBase() {
    return (
        <>
        <TemplateHeader/>
                <main className="container clearfix">
                    <div className="inner-container">
                    <TemplateSideNavigation/>
                        <div className="inner">
                            <Outlet />
                        </div>
                    </div>
                </main>
            <TemplateFooter />
        </>
    )
}
