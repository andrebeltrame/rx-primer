import React from 'react'
import Card from '../../components/ui/Card'
import ListGroups from '../../components/Groups';
import { Button } from '../../components/ui/Buttons';
import { Link } from 'react-router-dom';

const PageGroups = () => {
    return (
      <Card className="no-border">
        <h2>Grupos</h2>
        <Link to="/new-group">
          <Button className=" btn ButtonMd ColorSecundary mb-2">
            Novo Grupo
          </Button>
        </Link>

        <ListGroups edit="true" />
      </Card>
    );
}

export default PageGroups;
