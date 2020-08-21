import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import FilterToolbar from '../recipes/style';
import { Button } from '../../components/ui/Buttons';
import { Overlay } from 'react-portal-overlay';
import Input from '../../components/ui/Input';
import { XIcon } from "@primer/octicons-react";
import CategoriesList from "./style-list";

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="no-border">
        <div className="grid-row">
          <h2>Categorias</h2>
          <FilterToolbar className="toolbarRecipes">
            <Button
              className="ButtonMd ColorSecundary"
              onClick={() => setIsOpen(true)}
            >
              Nova Categoria
            </Button>
          </FilterToolbar>
        </div>

        <CategoriesList>
          <li>
            <h4>Café da Manhã</h4>
            <XIcon size={16} />
          </li>
          <li>
            <h4>Almoço</h4>
            <XIcon size={16} />
          </li>
          <li>
            <h4>Jantar</h4>
            <XIcon size={16} />
          </li>
          <li>
            <h4>Café da tarde</h4>
            <XIcon size={16} />
          </li>
          <li>
            <h4>Outros</h4>
            
            <XIcon size={16} />
          </li>
        </CategoriesList>
      </Card>

      <Overlay
        open={isOpen}
        onClose={() => setIsOpen(false)}
        // closeOnClick
        className="Overlay"
      >
        <div className="contentOverlay">
          <div className="grid-row">
            <h1 className="mb-1">Criar categoria de Receitas</h1>
            <Button
              className="btn ButtonMd ColorPrimary"
              onClick={() => setIsOpen(false)}
            >
              <XIcon size={16} />
            </Button>
          </div>

          <div className="row">
            <div className="col col-6">
              <Input
                label="Nome da Categoria"
                placeholder="Nome da categoria"
                type="text"
              ></Input>
            </div>
            <div className="col col-6">
              <Input label="Imagem destacada" type="file" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Button
                className="btn ButtonMd ColorSecundary"
                onClick={() => setIsOpen(false)}
              >
                Salvar e Fechar
              </Button>
            </div>
          </div>
        </div>
      </Overlay>
    </>
  );
};



