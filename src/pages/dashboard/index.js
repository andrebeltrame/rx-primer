import React from 'react'
import Card from '../../components/ui/Card'
import RecipesList from '../../components/Recipes'
import { Button } from '../../components/ui/Buttons';
import { Link } from 'react-router-dom';
import './style.css';
import TipsList from '../../components/TipsComponent';


const Dashboard = () => {
    return (
      <>
        <Card className="teste">
          <h2>Usuários pro plano</h2>

          <ul className="ResumeApp">
            <li>
              <h3>
                Básico: <b>256</b>
              </h3>
              <Link to="/users">Ver usuários</Link>
            </li>
            <li>
              <h3>
                Avançado: <b>297</b>
              </h3>
              <Link to="/users">Ver usuários</Link>
            </li>
            <li>
              <h3>
                Premium: <b>256</b>
              </h3>
              <Link to="/users">Ver usuários</Link>
            </li>
          </ul>
        </Card>

        <Card>
          <h2>Dica Da Jhana</h2>

          <TipsList limit="1"></TipsList>

          <Link to="/tips">
            <Button className="ButtonMd ColorPrimary">Editar dicas</Button>
          </Link>
        </Card>

        <Card className="no-border">
          <h2>Top 6 Receitas</h2>
          <RecipesList />
          <Link to="/recipes">
            <Button className="ButtonMd ColorPrimary">
              Ver todas as receitas
            </Button>
          </Link>
        </Card>
      </>
    );
}

export default Dashboard
