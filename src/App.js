import React from 'react';
import TemplateBase from './TemplateBase';
import LoginPage from './pages/login';
import { UserStorage } from './UserContext';

 

class App extends React.Component {


  render() {
  //  <UserStorage></UserStorage>  dados do usuario logado
      const Component = this.props.component;
      const isAuthenticated = localStorage.getItem("token");
      return isAuthenticated ? <TemplateBase /> : <LoginPage />;

  }
}


export default App;

