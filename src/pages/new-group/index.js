import React from 'react'
import Input from '../../components/ui/Input'
import Card from '../../components/ui/Card'
import { Button } from '../../components/ui/Buttons';
import { GroupUsers } from './style';

const PageNewGroup = () => {
    return (
      <Card className="no-border">
        <form>
          <div className="row">
            <div className="col col-4">Imagem</div>
            <div className="col col-8">
              <div className="col-12">
                <Input label="Nome do grupo" />
              </div>
              <div className="col-12">
                <select>
                  <option>Selecione a categoria de membros</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <label>Descrição do grupo</label>
            <br />
            <textarea rows="5"></textarea>

            <Button className="btn ButtonMd ColorSecundary mt-2">
              Salvar Grupo
            </Button>
          </div>
        </form>

        <GroupUsers>
          <div className="users-label">
            <h4>
              <strong> Usuários: </strong> <span>30 usuários neste grupo</span>
            </h4>
            <Button className="btn ButtonMd ColorPrimary">Adicionar usuário</Button>
          </div>
        </GroupUsers>
      </Card>
    );
}

export default PageNewGroup;
