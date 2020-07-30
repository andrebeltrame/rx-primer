import React from 'react';
import { Button } from '../Buttons';

class SingleUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' };
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText"></div>);
        }

        return (
            <div className="previewComponent">

                <div className="imgPreview">
                    {$imagePreview}
                </div>

                <form onSubmit={(e) => this._handleSubmit(e)}>

                    <input  className="fileInput" type="file"  onChange={(e) => this._handleImageChange(e)} />


                    <Button className="ButtonSm ColorPrimary" onClick={(e) => this._handleSubmit(e)}>Savar Foto</Button>

                </form>
                
            </div>
        )
    }
}

export default SingleUpload;