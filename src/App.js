import React from 'react';
import TemplateBase from './TemplateBase';
import LoginPage from './pages/login';

 

class App extends React.Component {

  render() {
    const Component = this.props.component;
    const isAuthenticated = localStorage.getItem("token");
    return isAuthenticated ? <TemplateBase /> : <LoginPage />;
  }
}


export default App;

