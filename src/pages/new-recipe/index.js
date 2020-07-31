import React from "react";
import Card from '../../components/ui/Card';
import Input from "../../components/ui/Input";
import { Button } from "../../components/ui/Buttons";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import ImagesUploader  from '../../components/ui/ImageUploader'
import TagAutoComplete from "../../components/ui/TagAutoComplete";

const PageNewRecipe = props => {



    return (
        <div>
            <Card>
                <h2>Nova Receita</h2>

                <div className="row">
                    <div className="col col-4">
                        
                            <Button className="ButtonSm ColorPrimary">Enviar Foto</Button>
                    </div>

                    <div className="col col-8">
                        <div className="col-12">
                            <Input label="Nome da Receita" type="text" required />
                        </div>
                        <div className="row">
                            <div className="col col-6">
                                <Input label="Tempo de Preparo" type="text" required />
                            </div>

                            <div className="col col-6">
                                <Input label="Rendimento" type="text" required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <h3>Keywords</h3>
                    <TagAutoComplete/>
                </div>

                <div className="row">
                    <Tabs>
                        <TabList>
                            <Tab>Informação Nutricional</Tab>
                            <Tab>Ingredientes</Tab>
                        </TabList>

                        <TabPanel>
                            <Editor />
                        </TabPanel>
                        <TabPanel>
                            <Editor />
                        </TabPanel>
                    </Tabs>
                </div>




                <h3>Galeria de Imagens</h3>
       

                <ImagesUploader/>


                <Button className="ButtonMd ColorSecundary">Salvar Receita</Button>

            </Card>




        </div>
    )
}
export default PageNewRecipe;