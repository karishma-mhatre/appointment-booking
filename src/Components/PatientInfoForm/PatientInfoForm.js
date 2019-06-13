import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ImageUpload from '../ImageUpload/ImageUpload';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class AppointmentBooking extends React.Component {

    render() {
        return (
            <Container maxWidth="sm">
                <div className="form-title">FILL IN PATIENT DETAILS</div>
                <form>
                    <div className="input-container">
                        <div className="image-selector-label"> Send us an ID</div>
                        <ImageUpload setImage={this.props.setImage} imageName="patientIdImage" getDataFromImage={true}></ImageUpload>
                    </div>
                    <div className="input-container">
                        <TextField
                            defaultValue={this.props.firstName}
                            id="standard-name"
                            label="Firstname"
                            margin="normal"
                            fullWidth={true}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => { this.props.handlePatientInfo(e, "firstName") }}
                        />
                    </div>
                    <div className="input-container">
                        <TextField
                            defaultValue={this.props.lastName}
                            id="standard-name"
                            label="Lastname"
                            margin="normal"
                            fullWidth={true}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => { this.props.handlePatientInfo(e, "lastName") }}
                        />
                    </div>
                    <div className="input-container">
                        <TextField
                            defaultValue={this.props.dateOfBirth}
                            id="standard-name"
                            label="Date of birth"
                            type="date"
                            fullWidth={true}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => { this.props.handlePatientInfo(e, "dateOfBirth") }}
                        />
                    </div>
                    <div className="btn-container">
                        <Button variant="contained" color="primary">
                            Request Appointment
                        </Button>
                    </div>
                </form>
            </Container>
        )
    }
}

export default AppointmentBooking;