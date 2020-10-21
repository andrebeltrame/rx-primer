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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './style.css';

const PageNewRecipe = props => {

  
    const [recipeName, setRecipeName] = React.useState('');
    const [time, setTime] = React.useState('');
    const [qtd, setQtd] = React.useState('');
    const [isHome, setIsHome] = React.useState('');
    const [liqdCal, setliqdCal] = React.useState('');
    const [valEnergy, setvalEnergy] = React.useState('');
    const [valCarb, setValCarb] = React.useState('');
    const [valCarbVd, setValCarbVd] = React.useState('');
    const [valProtein, setValProtein] = React.useState('');
    const [valTotalFat, setTotalFat] = React.useState('');
    const [valSatFat, setSatFat] = React.useState('');
    const [valTransFat, setTransFat] = React.useState('');
    const [valTransFatVd, setTransFatVd] = React.useState('');
    const [valFiber, setFiber] = React.useState('');
    const [valFiberVd, setFiberVd] = React.useState('');
    const [valSodium, setSodium] = React.useState('');
    const [valSodiumVd, setSodiumVd] = React.useState('');

    //Tags
    const [valNutri, setValNutri] = React.useState('');
    const [stuff, setStuff] = React.useState('');
    //image gallery
    //Steps

    const selectedTags = tags => {
        console.log(tags);
    };

    const notify = () =>
      toast.success("Sua receita foi salva!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    return (
      <>
        <Card className="no-border">
          <h2>Nova Receita</h2>

          <div className="row">
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

              <div className="row mt-1">
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

                <div className="col col-6 ">
                  <Input
                    value={qtd}
                    onChange={(event) => setQtd(event.target.value)}
                    setValue={qtd}
                    label="Rendimento"
                    type="text"
                    required
                  />
                </div>

                
              </div>

              <div className="row mt-1">
                <div className="col-12 mb-3 ">
                  <label>
                    
                    <label for="keep-home">
                      
                    <input  value={isHome}  onChange={(event) => setIsHome(event.target.value)} setValue={isHome} type="checkbox" />
                      Manter esta receita na home</label>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <h3>Keywords</h3>
            <TagsInput selectedTags={selectedTags} tags={["Arroz", "Feijão"]} />
          </div>

          <div className="row tab-rows">
            <Tabs>
              <TabList>
                <Tab>Apresentação da Receita</Tab>
                <Tab>Ingredientes</Tab>
                <Tab>Dados Nutricionais</Tab>
              </TabList>

              <TabPanel>
                <Editor
                  wrapperClassName="wrapper"
                  editorClassName="editor"
                />
              </TabPanel>
              <TabPanel>

              <Editor
                  wrapperClassName="wrapper"
                  editorClassName="editor"
                />
              
              </TabPanel>
              <TabPanel>
              <div className="row mb-2 mt-2">
              
              <h3 className="mb-2">Dados nutricionais</h3>

            <div className="col col-6">
                  
                  <Input
                    value={liqdCal}
                    onChange={(event) => setliqdCal(event.target.value)}
                    setValue={liqdCal}
                    label="Carbos Líquidos"
                    type="text"
                    required
                  />
              
                </div>
          </div>

          <div className="row mb-3">
            <div className="col col-3">
             <Input
                    label="Identificação"
                    type="text"
                    required
                  />
            </div>
            <div className="col col-3">
              <Input
                    label="Valor Total"
                    type="text"
                    required
                  />
            </div>
            <div className="col col-3">
              <Input
                    label="Valor %VD(*)"
                    type="text"
                    required
                  />
            </div>
            <div className="col col-3">
              <button className="mt-4 btn-base"> <PlusCircleIcon size={20} /> Adicionar novo</button>
            </div>

          </div>

              </TabPanel>
            </Tabs>
          </div>
          <h3>Galeria de Imagens</h3>
          <p>A primeira imagem será usada para miniatura da receita.</p>

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
          <Button onClick={notify} className="ButtonMd ColorSecundary">
            Salvar Receita
          </Button>
        </Card>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
}
export default PageNewRecipe;