import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ListGroup from './style';

const API =
  "https://raw.githubusercontent.com/andrebeltrame/recipe-json/master/grupos.json";

class ListGroups extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grupos: [],
      isLoading: false,
      error: null,
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
      grupos: [],
      isLoading: false,
      error: null,
    };

    try {
      const result = await axios.get(API);

      this.setState({
        grupos: result.data.grupos,
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
    const { grupos, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    console.log(grupos);

    return (
      <ListGroup>
        <ul>
          {grupos.map((grupo, index) => (
            <li key={index}>
              <Link to="/">
                <span
                  style={{
                    backgroundImage: "url(" + grupo.thumbnail + ")",
                  }}
                  className="thumbnail"
                ></span>
                {grupo.grupo}
              </Link>
              {this.props.edit ? (
                <button type="submit" className="btn ButtonSm ColorPrimary">
                  <Link to="/">Editar grupo</Link>
                </button>
              ) : null}
            </li>
          ))}
        </ul>
      </ListGroup>
    );
  }
}

export default ListGroups;