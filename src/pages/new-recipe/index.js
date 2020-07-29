import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import Card from '../../components/ui/Card';

 const PageNewRecipe  = props => {

    const [pictures, setPictures] = useState([]);

    const onDrop = picture => {
        setPictures([...pictures, picture]);
    };

    return (
        <div>
            <Card>
                <h2>Nova Receita</h2>

                <ImageUploader
                    {...props}
                    withIcon={true}
                    onChange={onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                />

            </Card>
            
        </div>
    )
}
export default PageNewRecipe;