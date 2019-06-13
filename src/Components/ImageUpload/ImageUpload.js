import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { TesseractWorker } from 'tesseract.js';

const worker = new TesseractWorker();

class ImageUpload extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uploadedImage: "",
            imageName: "",
            dataFromOCR: "",
            isLoading: false
        }
    }

    handleChange = (e) => {
        const imageFiles = e.target.files;
        const filesLength = imageFiles.length;

        for(var i = 0; i < filesLength; i++) {
            let reader = new FileReader();
            let file = imageFiles[i];

            reader.onloadend = () => {
                this.setState({ uploadedImage: reader.result }, () => {this.doOCR()});
            }

            reader.readAsDataURL(file);
        }

        setTimeout(() => {
            console.log(this.state);
        }, 500)
    }

    doOCR = () => {
        worker.recognize(this.state.uploadedImage)
            .progress(progress => {
                this.setState({isLoading: true});
                console.log('progress', progress);
            }).then(result => {
                this.setState({dataFromOCR: result}, () => {
                    this.setState({isLoading: false});
                    this.props.setImage(this.props.imageName, this.state.uploadedImage, this.state.dataFromOCR);
                })
            });
    }

    removeImage = () => {

    }

    render() {
        return (
            <div>
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="file"
                    type="file"
                    onChange={(e) => { this.handleChange(e) }}
                    value={this.state.imageName}
                />
                {
                    this.state.uploadedImage &&
                    <img src={this.state.uploadedImage} alt="imagerrr"></img>
                }
                <label htmlFor="file">
                    <Button component="span">
                        <Avatar>
                            I
                        </Avatar>
                    </Button>
                </label>

                {
                    this.state.uploadedImage &&
                    <Button>
                        <Avatar>
                            X
                        </Avatar>
                    </Button>
                }
            </div>
        )
    }
}

export default ImageUpload;