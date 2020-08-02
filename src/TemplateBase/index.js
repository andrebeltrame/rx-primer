import React from 'react'
import Routes from '../Routes';
import TemplateFooter from '../components/TemplateFooter';
import TemplateHeader from '../components/TemplateHeader';
import { TemplateSideNavigation } from '../components/TemplateSideNavigation';
import './style.css';

export default function TemplateBase() {
    return (
        <>
        <TemplateHeader/>
                <main className="container clearfix">
                    <div className="inner-container">
                    <TemplateSideNavigation/>
                        <div className="inner">
                            <Routes />   
                        </div>
                    </div>
                </main>
            <TemplateFooter />
        </>
    )
}




