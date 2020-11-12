import React from 'react';
import TemplateBase from './TemplateBase';
import LoginPage from './pages/login';
import { UserStorage } from './UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './Helper/ProtectedRoute';
import Dashboard from './pages/dashboard';
import MyAccount from './pages/myAccount';
import { PageTips } from './pages/tips';
import {PageUsers} from './pages/users';
import PageRecipes from './pages/recipes';
import PageGroups from './pages/groups';
import PageNewRecipe from './pages/new-recipe';
import PageNewGroup from "./pages/new-group";
import PageCategory from "./pages/category";
import PostsPage from './pages/posts';
import NewPostPage from './pages/new-post';
import Post from './pages/post';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route path="login/*" element={<LoginPage />} />
            <Route path="/" element={<LoginPage />} />
            <ProtectedRoute path="/admin/*" element={<TemplateBase />}/>
            </Routes>
        </UserStorage>
      </BrowserRouter>
    </>
      
      )
}

export default App