import React from 'react'
import Card from '../../components/ui/Card'
import RecipesList from '../../components/Recipes'

const PageRecipes = () => {
    return (
        <Card className="no-border">
            <h2>Receitas</h2>
            <RecipesList edit="true" show="200" />
        </Card>
    )
}

export default PageRecipes;
