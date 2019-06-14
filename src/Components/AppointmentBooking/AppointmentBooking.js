import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import PatientInfoForm from '../PatientInfoForm/PatientInfoForm';
import './appointmentBooking.scss';
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
            default: 
            break;
        }
    }

    handleAppointmentInfo = (e, name) => {
        let appointmentInfo = {...this.state.appointmentInfo}
        appointmentInfo[name] = e.target.value;

        this.setState({appointmentInfo})
    }

    setLocation = (location) => {
        let patientInfo = {...this.state.patientInfo}
        patientInfo["clinicLocation"] = location;
        this.setState({patientInfo})
    }

    handlePatientInfo = (e, name) => {
        let patientInfo = {...this.state.patientInfo}
        patientInfo[name] = e.target.value;
        this.setState({patientInfo})
    }

    setAppointment = () => {
        console.log("send request to backend along with data")
    }

    render() {
        
        return (
            <div className="container">
                <Route exact path="/appointment-booking/" render={
                    (props) => (
                        <AppointmentForm {...props} {...this.state.appointmentInfo} 
                        handleAppointmentInfo={this.handleAppointmentInfo} 
                        setImage={this.setImage} 
                        setLocation={this.setLocation}></AppointmentForm>
                    )
                }/>
                <Route exact path="/appointment-booking/patient-info" render={
                    (props) => (
                        <PatientInfoForm {...props} {...this.state.patientInfo} 
                        handlePatientInfo={this.handlePatientInfo} 
                        setImage={this.setImage}
                        setAppointment={this.setAppointment}></PatientInfoForm>
                    )
                }/>
            </div>
        )
    }
}

export default AppointmentBooking;