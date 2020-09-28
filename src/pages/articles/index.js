import React, { Component } from 'react';
import ArticlePostItem from './style'
import Card from '../../components/ui/Card'
import { Link } from 'react-router-dom'
import axios from 'axios';
const API = 'https://raw.githubusercontent.com/andrebeltrame/recipe-json/master/receitas.json';


class Articles extends Component {


    
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

            <ArticlePostItem>
                
                <Card className="no-border">
                    <h2>Publicações</h2>
                    <ul>
                        {receitas.slice(0,6).map((receita, index) => 
                            <li key={index}>
                                <div style={{backgroundImage: "url(" + receita.link_imagem + ")"  }} className="thumbnail"></div>
                                
                                <h3><Link to="/publication"> {receita.receita}</Link></h3>

                                {this.props.edit ? <button type="submit" className="btn ButtonSm ColorPrimary">
                                    <Link to="/publication">Editar receita</Link></button> : null }
                            </li>
                        )}
                    </ul>
               </Card>
            </ArticlePostItem>)
        }
}

export default Articles;
