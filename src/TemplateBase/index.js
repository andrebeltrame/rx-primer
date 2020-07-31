import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../Routes';
import TemplateFooter from '../components/TemplateFooter';
import TemplateHeader from '../components/TemplateHeader';
import { TemplateSideNavigation } from '../components/TemplateSideNavigation';
import './style.css';

export default function TemplateBase() {
    return (
        <div>
            <Router>
                <TemplateHeader/>
                    <main className="container">
                        <div className="inner-container">
                        <TemplateSideNavigation/>
                          <div className="inner">
                            <Routes />   
                          </div>
                        </div>
                    </main>
                <TemplateFooter />
           </Router>
        </div>
    )
}




