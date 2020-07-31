import React, { Component } from 'react';
import axios from 'axios';
import ListRecipies from './style';
import { Link } from 'react-router-dom'
const API = 'https://raw.githubusercontent.com/andrebeltrame/recipe-json/master/receitas.json';


class RecipesList extends Component {


    
    constructor(props) {
        super(props);
      

        this.state = {
            receitas: [],
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
            receitas: [],
            isLoading: false,
            error: null,
        };

        try {
            const result = await axios.get(API);

            this.setState({
                
                receitas: result.data.receitas,
                isLoading: false
            });
        } catch (error) {
            this.setState({
                error,
                isLoading: false
            });
        }
    }

    render() {
        
        const { receitas, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        } 

     
      
        return (

            <ListRecipies>
                
               <ul>
                    {receitas.slice(0,6).map((receita, index) => 
                        <li key={index}>
                        <Link to="/">
                            <span style={{backgroundImage: "url(" + receita.link_imagem + ")"  }} className="thumbnail"></span>
                            {receita.receita}
                        </Link>
                        {this.props.edit ? <button type="submit" className="btn ButtonSm ColorPrimary"><Link to="/">Editar receita</Link></button> : null }
                    </li>
                    )}
               </ul>
              
            </ListRecipies>)
        }
}

export default RecipesList;
