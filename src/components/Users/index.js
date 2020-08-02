import React, { Component, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ListUser  from "./style";
import { Overlay } from "react-portal-overlay";

const API =
  "https://raw.githubusercontent.com/andrebeltrame/recipe-json/master/usuarios.json";

class ListUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuarios: [],
      isLoading: false,
      error: null,
      open: false,
      setOpen: false
    };


    const originalProps = this.props;
    try {
      this.props = props;
    } finally {
      this.props = originalProps;
    }
   
  }

  async componentDidMount() {
    this.state = {
      usuarios: [],
      isLoading: false,
      error: null,
    };

    try {
      const result = await axios.get(API);

      this.setState({
        usuarios: result.data.usuarios,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false,
      });
    }
  }

  render() {
    
    const { usuarios, isLoading, error } = this.state;
   // const { open, setOpen } = this.state;
    

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <>
        <ListUser>
          {isLoading && usuarios && <p>Carregando...</p>}

          <ul>
            {usuarios.map((usuario, index) => (
              <li key={index}>
                <Link to="/">
                  <span
                    style={{
                      backgroundImage: "url(" + usuario.thumbnail + ")",
                    }}
                    className="thumbnail"
                  ></span>
                  {usuario.usuario}
                </Link>
                {this.props.edit ? (
                  <button
                   // onClick={() => setIsOpen(true)}
                    type="submit"
                    className="btn ButtonSm ColorPrimary">
                    Editar usuário
                  </button>
                ) : null}
              </li>
            ))}
          </ul>
        </ListUser>
{/*         
        <Overlay open={open} onClose={() => setOpen(false)}>
          <h1>My overlay</h1>
        </Overlay> */}
      </>
    );
  }
}

export default ListUsers;
