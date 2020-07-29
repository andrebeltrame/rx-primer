import React from 'react'
import ListRecipies from './style';
import { Link } from 'react-router-dom'


const RecipesList = () => {
    return (
        <>
            <ListRecipies>
               <ul>
                    <li>
                        <Link to="/">
                            <img alt="Nome" src="https://image.freepik.com/free-photo/delicious-beef-burgers-wooden-board_23-2148290634.jpg" />
                            Receita
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img alt="Nome" src="https://image.freepik.com/free-photo/delicious-beef-burgers-wooden-board_23-2148290634.jpg" />
                            Receita
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img alt="Nome" src="https://image.freepik.com/free-photo/delicious-beef-burgers-wooden-board_23-2148290634.jpg" />
                            Receita
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img alt="Nome" src="https://image.freepik.com/free-photo/delicious-beef-burgers-wooden-board_23-2148290634.jpg" />
                            Receita
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img alt="Nome" src="https://image.freepik.com/free-photo/delicious-beef-burgers-wooden-board_23-2148290634.jpg" />
                            Receita
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img alt="Nome" src="https://image.freepik.com/free-photo/delicious-beef-burgers-wooden-board_23-2148290634.jpg" />
                            Receita
                        </Link>
                    </li>
               </ul>
            </ListRecipies>
        </>
    )
}

export default RecipesList;
