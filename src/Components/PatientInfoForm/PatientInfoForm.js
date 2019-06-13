import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ImageUpload from '../ImageUpload/ImageUpload';
import Container from '@material-ui/core/Container';

class AppointmentBooking extends React.Component {

    render() {
        return (
            <Container maxWidth="sm">
                <h4>Fill in your Info</h4>
                <form>
                    <div>
                        <div>Send us an ID</div>
                        <ImageUpload setImage={this.props.setImage} imageName="patientIdImage"></ImageUpload>
                    </div>
                    <div>
                    <TextField
                        defaultValue={this.props.firstName}
                        id="standard-name"
                        label="Firstname"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        onChange={(e) => { this.props.handlePatientInfo(e, "firstName")}}
                    />
                    </div>
                    <TextField
                        value={this.props.lastName}
                        id="standard-name"
                        label="Lastname"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        onChange={(e) => { this.props.handlePatientInfo(e, "lastName")}}
                    />
                    <div>
                    <TextField
                        value={this.props.dateOfBirth}
                        id="standard-name"
                        label="Date of birth"
                        type="date"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        onChange={(e) => { this.props.handlePatientInfo(e, "dateOfBirth")}}
                    />
                    </div>
                    <div>
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