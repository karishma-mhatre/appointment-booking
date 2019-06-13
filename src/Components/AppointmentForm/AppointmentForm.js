import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import ImageUpload from '../ImageUpload/ImageUpload';
import { Link } from "react-router-dom";

class AppointmentForm extends React.Component {

    render() {
        console.log(this.props);
        return (
            <Container maxWidth="sm">
                <div className="form-title">REQUEST AN APPOINTMENT</div>
                <Container>
                    <form>
                        <div>
                            <TextField
                                id="location"
                                label="Clinic Location"
                                margin="normal"
                                fullWidth={true}
                                defaultValue={this.props.clinicLocation}
                                onChange={(e) => { this.props.handleAppointmentInfo(e, "clinicLocation")}}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div>
                            <Select
                                name="exam"
                                value={this.props.exam}
                                fullWidth={true}
                                inputProps={{
                                    name: 'age',
                                    id: 'age-simple',
                                }}
                                onChange={(e) => { this.props.handleAppointmentInfo(e, "exam")}}
                            >
                                <MenuItem value="MRI">MRI</MenuItem>
                                <MenuItem value="Blood Test">Blood Test</MenuItem>
                                <MenuItem value="X-Ray">X-Ray</MenuItem>
                            </Select>
                        </div>
                        <TextField
                            id="date"
                            label="Date"
                            type="date"
                            fullWidth={true}
                            value={this.props.appointmentDate}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => { this.props.handleAppointmentInfo(e, "appointmentDate")}}
                        />
                        <div>
                            <TextField
                                id="time"
                                label="Time"
                                type="time"
                                fullWidth={true}
                                margin="normal"
                                value={this.props.time}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e) => { this.props.handleAppointmentInfo(e, "appointmentTime")}}
                            />
                        </div>
                        <div>
                            <TextField
                                id="notes"
                                label="Notes"
                                rowsMax="4"
                                fullWidth={true}
                                value={this.props.notes}
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e) => { this.props.handleAppointmentInfo(e, "notes")}}
                            />
                        </div>
                        <div>
                            <div className="image-selector-label">Do you have any doctors order?</div>
                            <ImageUpload setImage={this.props.setImage} imageName="doctorsOrderImage"></ImageUpload>
                        </div>
                        <div>
                            <Link to="/appointmentBooking/patientInfo">
                                <Button variant="contained" color="primary">
                                    Next
                                </Button>
                            </Link>
                        </div>
                    </form>
                </Container>
            </Container>
        )
    }
}

export default AppointmentForm;