import React from 'react'
import Card from '../../components/ui/Card'
import { Button } from '../../components/ui/Buttons'
import Input from '../../components/ui/Input'
import { Editor } from 'react-draft-wysiwyg'

export const NewPostPage = () => {
    return (
        <Card className="no-border">

            <div className="grid-row">
                <h2>Publicações</h2>



                <Button className="btn ButtonMd ColorSecundary mt-2">
                    Salvar Post
                </Button>
            </div>

            <div className="row">
                <div className="col-12">
                    <Input type="text" placeholder="Nome da publicação" />
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Editor/>
                </div>
            </div>



    </Card>
    )
}
export default NewPostPage;