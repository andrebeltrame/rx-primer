import * as React from "react";

import ImageUploading from "react-images-uploading";
import { Button } from "../Buttons";
import './style.css';

// { ImageUploadingPropsType, ImageListType, ImageType } is type for typescript



const maxNumber = 10;
const maxMbFileSize = 5 * 1024 * 1024; // 5Mb

class ImagesUploader extends React.Component {
    onChange = (imageList) => {
        // data for submit
        console.log(imageList);
    };
    onError = (errors, files) => {
        console.log(errors, files);
    };

    render() {
        return (
            <ImageUploading
                onChange={this.onChange}
                maxNumber={maxNumber}
                multiple
                maxFileSize={maxMbFileSize}
                acceptType={["jpg", "gif", "png"]}
                onError={this.onError}>
                {({ imageList, onImageUpload, onImageRemoveAll }) => (
                    // write your building UI
                    <div className="imageUploderComponent">
                        <Button className="btn ButtonSm ColorPrimary" onClick={onImageUpload}>Adicionar Imagens</Button>
                        <Button className="btn ButtonSm ColorPrimary" onClick={onImageRemoveAll}>Remover todas imagens</Button>

                        <div className="listThumbnails">
                        {imageList.map((image) => (
                            <div className="thumbnail" key={image.key}>
                                <img alt="imagem" src={image.dataURL} />
                                <Button className="btn ButtonSm ColorGray" onClick={image.onUpdate}>Atualizar</Button>
                                <Button className="btn ButtonSm ColorGray" onClick={image.onRemove}>Remover</Button>
                            </div>
                        
                        ))}
                        </div>
                    </div>
                )}
            </ImageUploading>
        );
    }
}

export default ImagesUploader;