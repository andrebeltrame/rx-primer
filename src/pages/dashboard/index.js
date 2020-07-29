import React from 'react'
import Card from '../../components/ui/Card'
import RecipesList from '../../components/Recipes'
import { Button } from '../../components/ui/Buttons';
import { Link } from 'react-router-dom';
import './style.css';
const Dashboard = () => {
    return (
        <>
            <Card className="teste">
                <h2>Usuários pro plano</h2>

                <ul className="ResumeApp">
                    <li>
                        <h3>Básico: <b>256</b></h3>
                        <Link to="/">Ver usuários</Link>
                    </li>
                    <li>
                        <h3>Avançado: <b>297</b></h3>
                        <Link to="/">Ver usuários</Link>
                    </li>
                    <li>
                        <h3>Premium: <b>256</b></h3>
                        <Link to="/">Ver usuários</Link>
                    </li>
                </ul>
            </Card>

            <Card>
                <h2>Dica Da Jhana</h2>
            </Card>

            <Card className="no-border">
                <h2>Top 6 Receitas</h2>
                <RecipesList/>
                <Button className="ButtonMd ColorPrimary">Ver todas as receitas</Button>
            </Card>
        </>
    )
}

export default Dashboard
