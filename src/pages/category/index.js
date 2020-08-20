import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import FilterToolbar from '../recipes/style';
import { Button } from '../../components/ui/Buttons';

export const pageCategory = () => {

    return (
      <>
        <Card className="no-border">
          <div className="grid-row">
            <h2>Categorias</h2>
            <FilterToolbar className="toolbarRecipes">
              <Button
                className="ButtonMd ColorSecundary"
              >
                Nova Categoria
            </Button>
            </FilterToolbar>
          </div>

        
         
        </Card>


      </>
    );
}

export default pageCategory;