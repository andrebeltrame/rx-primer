import React from 'react'
import Cards from '../../components/ui/Card';
import TipsList from '../../components/TipsComponent';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Button } from '../../components/ui/Buttons';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PageTips = (props) => {
    const notify = () =>
        toast.success("A dica foi salva!", {
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
        <Cards className="no-border">
          <h2>Dicas da Jhana</h2>
          <TipsList limit="3" delete="true" />
          <h3 className="mt-2 mb-2">Cadastrar nova dica</h3>
          <Editor />
          <Button onClick={notify} className="btn ButtonMd ColorSecundary">
            Salvar dica
          </Button>
        </Cards>

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
export default PageTips;