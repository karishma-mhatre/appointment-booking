import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import PatientInfoForm from '../PatientInfoForm/PatientInfoForm';
import * as moment from 'moment';
import { Route } from 'react-router-dom';

class AppointmentBooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appointmentInfo: {
                clinicLocation: "",
                exam: "MRI",
                appointmentDate: moment().format('YYYY-MM-DD'),
                appointmentTime: "",
                notes: "",
                doctorsOrderImage: null
            },
            patientInfo: {
                patientIdImage: "",
                firstName:"",
                lastName :"",
                dateOfBirth:""
            }
        }
    }

    setImage = (imageName, image, datafromOCR) => {
        switch(imageName){
            case "doctorsOrderImage":
                    let appointmentInfo = {...this.state.appointmentInfo}
                    appointmentInfo[imageName] = image;
                    this.setState({appointmentInfo})
            break;
            case "patientIdImage":
                    let patientInfo = {...this.state.patientInfo}
                    patientInfo[imageName] = image;
                    this.setState({patientInfo})
            break;
        }

        setTimeout(() => {
            console.log("image",this.state);
        }, 500)
    }

    handleAppointmentInfo = (e, name) => {
        let appointmentInfo = {...this.state.appointmentInfo}
        appointmentInfo[name] = e.target.value;

        this.setState({appointmentInfo})
        setTimeout(() => {
            console.log(this.state);
        }, 500)
        
    }

    handlePatientInfo = (e, name) => {
        let patientInfo = {...this.state.patientInfo}
        patientInfo[name] = e.target.value;
        this.setState({patientInfo})
        setTimeout(() => {
            console.log(this.state);
        }, 500)
        
    }

    render() {
        
        return (
            <div className="container">
                <Route exact path="/appointmentBooking/" render={
                    (props) => (
                        <AppointmentForm {...props} {...this.state.appointmentInfo} handleAppointmentInfo={this.handleAppointmentInfo} setImage={this.setImage}></AppointmentForm>
                    )
                }/>
                <Route exact path="/appointmentBooking/patientInfo" render={
                    (props) => (
                        <PatientInfoForm {...props} {...this.state.patientInfo} handlePatientInfo={this.handlePatientInfo} setImage={this.setImage}></PatientInfoForm>
                    )
                }/>
            </div>
        )
    }
}

export default AppointmentBooking;