import React from 'react'
import Cards from '../../components/ui/Card';
import TipsList from '../../components/TipsComponent';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Button } from '../../components/ui/Buttons';

export const PageTips = (props) => {
    return (
        <>
            <Cards className="no-border">
                <h2>Dicas da Jhana</h2>
                <TipsList limit="3" delete="true" />
                <h3 className="mt-2 mb-2">Cadastrar nova dica</h3>
                <Editor />
                <Button className="btn ButtonMd ColorSecundary">Salvar dica</Button>
            </Cards>
        </>
    )
}
export default PageTips;