import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import TemplateFooter from '../components/TemplateFooter';
import TemplateHeader from '../components/TemplateHeader';
import { TemplateSideNavigation } from '../components/TemplateSideNavigation';


export default function TemplateBase() {
    return (
        <div>
            <Router>
                <TemplateHeader/>
                    <main className="container">
                        <div className="inner-container">
                        <TemplateSideNavigation/>
                          <div className="inner">
                              Inner Content After side
                          </div>
                        </div>
                    </main>
                <TemplateFooter />
           </Router>
        </div>
    )
}




