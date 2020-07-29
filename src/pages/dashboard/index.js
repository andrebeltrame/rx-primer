import React from 'react'
import Card from '../../components/ui/Card'
import RecipesList from '../../components/Recipes'
import { Button } from '../../components/ui/Buttons';

const Dashboard = () => {
    return (
        <>
            <Card className="teste">
                <h2>Usuários pro plano</h2>
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
