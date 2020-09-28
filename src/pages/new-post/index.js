import React from 'react'
import Card from '../../components/ui/Card'
import { Button } from '../../components/ui/Buttons'
import Input from '../../components/ui/Input'
import { Editor } from 'react-draft-wysiwyg'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NewPostPage = () => {
    const notify = () =>
      toast.success("Seu post foi publicado!", {
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
        <Card className="no-border">
          <div className="grid-row">
            <h2>Publicações</h2>

            <Button
              onClick={notify}
              className="btn ButtonMd ColorSecundary mt-2"
            >
              Salvar Post
            </Button>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <p>Nova Publicação</p>
              <Input type="text" placeholder="Nome da publicação" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <p>Imagem destacada</p>
              <Input type="file" />
            </div>
          </div>


          <div className="row mb-1">
            <div className="col-12">
            <p>Conteúdo</p>
              <Editor />
            </div>
          </div>
        </Card>
      </>
    );
}
export default NewPostPage;