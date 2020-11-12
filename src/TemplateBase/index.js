import React from 'react'
import TemplateFooter from '../components/TemplateFooter';
import TemplateHeader from '../components/TemplateHeader';
import { TemplateSideNavigation } from '../components/TemplateSideNavigation';
import './style.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import MyAccount from '../pages/myAccount';
import PageTips from '../pages/tips';
import PageUsers from '../pages/users';
import PageRecipes from '../pages/recipes';
import PageGroups from '../pages/groups';
import PageNewRecipe from '../pages/new-recipe';
import PageNewGroup from '../pages/new-group';
import PostsPage from '../pages/posts';
import Post from '../pages/post';
import NewPostPage from '../pages/new-post';
import CategoryPage from '../pages/category';

export default function TemplateBase() {
    return (
        <>
        <TemplateHeader/>
                <main className="container clearfix">
                    <div className="inner-container">
                    <TemplateSideNavigation/>
                        <div className="inner">
                            <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/account" element={<MyAccount />} />
                            <Route path="/tips" element={<PageTips />} />
                            <Route path="/users" element={<PageUsers />} />
                            <Route path="/recipes" element={<PageRecipes />} />
                            <Route path="/groups" element={<PageGroups />} />
                            <Route path="/category" element={<CategoryPage />} />
                            {/* <Route path="/publication" element={<PublicationItem />} /> */} */}
                            <Route path="/new-recipe" element={<PageNewRecipe />} />
                            <Route path="/new-group" element={<PageNewGroup />} />
                            <Route path="/posts" element={<PostsPage />} />
                            <Route path="post/:id" element={<Post />} />
                            <Route path="/new-post" element={<NewPostPage />} />
                            </Routes>
                        </div>
                    </div>
                </main>
            <TemplateFooter />
        </>
    )
}
