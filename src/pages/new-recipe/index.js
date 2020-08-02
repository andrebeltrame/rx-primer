import React from "react";
import Card from '../../components/ui/Card';
import Input from "../../components/ui/Input";
import { Button } from "../../components/ui/Buttons";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Editor} from "react-draft-wysiwyg";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import ImagesUploader  from '../../components/ui/ImageUploader'
import TagsInput from "../../components/ui/TagsInput";
import { PlusCircleIcon } from "@primer/octicons-react";

import './style.css';

const PageNewRecipe = props => {


    //Thumbnail
    const [recipeName, setRecipeName] = React.useState('');
    const [time, setTime] = React.useState('');
    const [qtd, setQtd] = React.useState('');
    const [isHome, setIsHome] = React.useState('');
    //Tags
    const [valNutri, setValNutri] = React.useState('');
    const [stuff, setStuff] = React.useState('');
    //image gallery
    //Steps

    const selectedTags = tags => {
        console.log(tags);
    };


    return (
      <div>
        <Card className="no-border">
          <h2>Nova Receita</h2>

          <div className="row">
            <div className="col col-4">
              <Button className="ButtonSm ColorPrimary">Enviar Foto</Button>
            </div>

            <div className="col col-8">
              <div className="col-12">
                <Input
                  value={recipeName}
                  onChange={(event) => setRecipeName(event.target.value)}
                  setValue={recipeName}
                  label="Nome da Receita"
                  type="text"
                  required
                />

                {recipeName}
              </div>
              <div className="row">
                <div className="col col-6">
                  <Input
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                    setValue={time}
                    label="Tempo de Preparo"
                    type="text"
                    required
                  />
                </div>

                <div className="col col-6">
                  <Input
                    value={qtd}
                    onChange={(event) => setQtd(event.target.value)}
                    setValue={qtd}
                    label="Rendimento"
                    type="text"
                    required
                  />
                </div>

                <div className="col-12">
                  <label>
                    <input
                      value="keepHome"
                      onChange={(event) => setIsHome(event.target.value)}
                      setValue={isHome}
                      checked={isHome === "keepHome"}
                      type="radio"
                      id="keep-home"
                    />
                    <label for="keep-home">Manter esta receita na home</label>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <h3>Keywords</h3>
            <TagsInput selectedTags={selectedTags} tags={["Arroz", "Feijão"]} />
          </div>

          <div className="row">
            <Tabs>
              <TabList>
                <Tab>Informação Nutricional</Tab>
                <Tab>Ingredientes</Tab>
              </TabList>

              <TabPanel>
                <Editor
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                />
              </TabPanel>
              <TabPanel>
                <Editor />
              </TabPanel>
            </Tabs>
          </div>
          <h3>Galeria de Imagens</h3>

          <ImagesUploader />

          <h3>Instruções da receita</h3>
          <p>
            Adicione imagens e vídeos na sequência da sua receita, clique em{" "}
            <PlusCircleIcon size={15} /> para novos passos.
          </p>

          <div className="StepsEditor">
            <h5 className="mb-5">Passo 1</h5>
            <Editor />
            <button alt="Adicionar novo Passo" className="buttonPlusEditor">
              <PlusCircleIcon size={30} />
            </button>
          </div>
          <Button className="ButtonMd ColorSecundary">Salvar Receita</Button>
        </Card>
      </div>
    );
}
export default PageNewRecipe;