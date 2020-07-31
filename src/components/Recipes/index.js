import React, { Component } from 'react';
import axios from 'axios';
import ListRecipies from './style';
import { Link } from 'react-router-dom'
const API = 'https://gist.githubusercontent.com/lucasheriques/ed2214dba65b8903a5b62566f4439005/raw/3464c288baf4195075ee6061d14d11be205965ca/receitas.json';


class RecipesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            receitas: [],
            isLoading: false,
            error: null,
        };
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
                    {receitas.slice(0,6).map(receita => 
                        <li key={receita.receita}>
                            <Link to="/">
                                <img alt={receita.receita} src={receita.link_imagem} />
                                {receita.receita}
                        </Link>
                    </li>
                    )}
               </ul>
              
            </ListRecipies>)
        }
}

export default RecipesList;
