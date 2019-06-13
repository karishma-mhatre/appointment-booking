import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { TesseractWorker } from 'tesseract.js';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './image-upload.scss';

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
                    console.log(this.state.dataFromOCR);
                    this.props.setImage(this.props.imageName, this.state.uploadedImage, this.state.dataFromOCR);
                })
            });
    }

    removeImage = () => {
         this.setState({ uploadedImage: null });
         this.props.setImage(this.props.imageName, null);
    }

    render() {
        return (
            <>
                <div className="container image-selectors">
                    <div>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="file"
                            type="file"
                            capture="user"
                            onChange={(e) => { this.handleChange(e) }}
                            value={this.state.imageName}
                        />
                        <label htmlFor="file">
                            <Button variant="outlined" component="span">
                                <i class="fa fa-camera"></i>
                            </Button>
                        </label>
                    </div>
                    <div>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="file"
                            type="file"
                            onChange={(e) => { this.handleChange(e) }}
                            value={this.state.imageName}
                        />
                        <label htmlFor="file">
                            <Button variant="outlined" component="span">
                                <i class="fa fa-folder"></i>
                            </Button>
                        </label>
                    </div>
                </div>
                {
                    this.state.uploadedImage &&
                    <div className="selected-image">
                        <img src={this.state.uploadedImage} alt="imagerrr"></img>
                    </div>
                }
                {
                    this.state.uploadedImage &&
                    <Button onClick={(e) => { this.removeImage(e) }}>
                        <Avatar>
                            X
                        </Avatar>
                    </Button>
                }
            </>
            
        )
    }
}

export default ImageUpload;