import React, { Component } from 'react';
import axios from 'axios';
import ListRecipies from './style';
import { Link } from 'react-router-dom'
const API = './receitas';


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
        this.setState({ isLoading: true });

        try {
            const result = await axios.get(API);

            this.setState({
                hits: result.data.receitas,
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
        console.log(receitas);
        
        return (
            <ListRecipies>
               <ul>
                    {receitas.map(receita =>
                        <li key={receita.objectID}>
                            <Link to="/">
                            <img alt="Nome" src="https://image.freepik.com/free-photo/delicious-beef-burgers-wooden-board_23-2148290634.jpg" />
                                {receita.receita}
                        </Link>
                    </li>
                    )}
               </ul>
              
            </ListRecipies>)
        }
}

export default RecipesList;
