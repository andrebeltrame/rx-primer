import React from 'react'
import Card from '../../components/ui/Card'
import RecipesList from '../../components/Recipes'
import { Button } from "../../components/ui/Buttons";
import { Link } from "react-router-dom";
import FilterToolbar from "./style";

const PageRecipes = () => {
    return (
      <Card className="no-border">
        <h2>Receitas</h2>

        <FilterToolbar className="toolbarRecipes">
          <Link to="/new-recipe">
            <Button className="ButtonMd ColorSecundary">Nova Receita</Button>
          </Link>
          <select>
              <option>Filrar por categoria</option>
          </select>
        </FilterToolbar>
        <RecipesList edit="true" show="200" />
      </Card>
    );
}

export default PageRecipes;
