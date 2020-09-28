import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import MyAccount from '../pages/myAccount';
import { PageTips } from '../pages/tips';
import {PageUsers} from '../pages/users';
import PageRecipes from '../pages/recipes';
import PageGroups from '../pages/groups';
import PageNewRecipe from '../pages/new-recipe';
import PageNewGroup from "../pages/new-group";
import PageCategory from "../pages/category";
import Articles from '../pages/articles';
import PublicationItem from '../pages/publication';

export default function MainRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/tips" element={<PageTips />} />
        <Route path="/users" element={<PageUsers />} />
        <Route path="/recipes" element={<PageRecipes />} />
        <Route path="/groups" element={<PageGroups />} />
        <Route path="/category" element={<PageCategory />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/publication" element={<PublicationItem />} />
        <Route path="/new-recipe" element={<PageNewRecipe />} />
        <Route path="/new-group" element={<PageNewGroup />} />
      </Routes>
    );
}