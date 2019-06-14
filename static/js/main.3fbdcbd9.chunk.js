(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,a){},145:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(8),l=a.n(i),r=(a(92),a(93),a(94),function(){return o.a.createElement("div",{className:"container header"},o.a.createElement("div",{className:"logo"},"PENINSULA DIAGNOSTIC IMAGING"))}),c=a(43),s=a(32),m=(a(95),a(45)),p=a(22),u=a(14),d=a(30),f=a(28),g=a(31),h=a(186),I=a(179),E=a(185),v=a(187),b=a(183),N=a(182),O=a(79),C=a(181),j=(a(139),new O.TesseractWorker),y=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).handleChange=function(e){for(var t=e.target.files,n=t.length,o=function(){var e=new FileReader,n=t[i];e.onloadend=function(){a.props.getDataFromImage?a.setState({uploadedImage:e.result},function(){a.doOCR()}):a.setState({uploadedImage:e.result})},e.readAsDataURL(n)},i=0;i<n;i++)o();setTimeout(function(){console.log(a.state)},500)},a.doOCR=function(){j.recognize(a.state.uploadedImage).progress(function(e){a.setState({isLoading:!0}),console.log("progress",e)}).then(function(e){a.setState({dataFromOCR:e},function(){a.setState({isLoading:!1}),console.log(a.state.dataFromOCR),a.props.setImage(a.props.imageName,a.state.uploadedImage,a.state.dataFromOCR)})})},a.removeImage=function(){a.setState({uploadedImage:null}),a.props.setImage(a.props.imageName,null)},a.state={uploadedImage:"",imageName:"",dataFromOCR:"",isLoading:!1},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container image-selector"},o.a.createElement("div",null,o.a.createElement("input",{accept:"image/*",style:{display:"none"},id:"file",type:"file",capture:"user",onChange:function(t){e.handleChange(t)},value:this.state.imageName}),o.a.createElement("label",{htmlFor:"file"},o.a.createElement(I.a,{variant:"outlined",component:"span",className:"image-selector-btn"},o.a.createElement("i",{className:"fa fa-camera"})))),o.a.createElement("div",null,o.a.createElement("input",{accept:"image/*",style:{display:"none"},id:"file",type:"file",onChange:function(t){e.handleChange(t)},value:this.state.imageName}),o.a.createElement("label",{htmlFor:"file"},o.a.createElement(I.a,{variant:"outlined",component:"span",className:"image-selector-btn"},o.a.createElement("i",{className:"fa fa-folder"}))))),this.state.uploadedImage&&o.a.createElement("div",{className:"selected-image"},o.a.createElement("img",{src:this.state.uploadedImage,alt:"imagerrr"})),this.state.isLoading&&o.a.createElement("div",{className:"ocr-progress"},o.a.createElement("span",null,"Getting data from image..."),o.a.createElement(C.a,null)),this.state.uploadedImage&&o.a.createElement(I.a,{onClick:function(t){e.removeImage(t)}},o.a.createElement(N.a,null,"X")))}}]),t}(o.a.Component),L=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).getLocation=function(e){setTimeout(function(){if(window.google.maps.GeoCoder){var t=new window.google.maps.GeoCoder,a={lat:parseFloat(e.coords.latitude),lng:parseFloat(e.coords.longitude)};t.geocode({location:a},function(e,t){"OK"==t&&console.log(e)})}},1e3)},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){if(navigator.geolocation){var e=navigator.geolocation.getCurrentPosition(this.getLocation);console.log(e)}else console.log("error")}},{key:"render",value:function(){var e=this;return console.log(this.props),o.a.createElement(b.a,{maxWidth:"sm"},o.a.createElement("div",{className:"form-title"},"REQUEST AN APPOINTMENT"),o.a.createElement(b.a,null,o.a.createElement("form",null,o.a.createElement("div",{className:"input-container"},o.a.createElement(h.a,{id:"location",label:"Clinic Location",margin:"normal",fullWidth:!0,defaultValue:this.props.clinicLocation,onChange:function(t){e.props.handleAppointmentInfo(t,"clinicLocation")},InputLabelProps:{shrink:!0}})),o.a.createElement("div",{className:"input-container"},o.a.createElement(E.a,{name:"exam",value:this.props.exam,fullWidth:!0,inputProps:{name:"age",id:"age-simple"},onChange:function(t){e.props.handleAppointmentInfo(t,"exam")}},o.a.createElement(v.a,{value:"MRI"},"MRI"),o.a.createElement(v.a,{value:"Blood Test"},"Blood Test"),o.a.createElement(v.a,{value:"X-Ray"},"X-Ray"))),o.a.createElement("div",{className:"input-container"},o.a.createElement(h.a,{id:"date",label:"Date",type:"date",fullWidth:!0,value:this.props.appointmentDate,margin:"normal",InputLabelProps:{shrink:!0},onChange:function(t){e.props.handleAppointmentInfo(t,"appointmentDate")}})),o.a.createElement("div",{className:"input-container"},o.a.createElement(h.a,{id:"time",label:"Time",type:"time",fullWidth:!0,margin:"normal",value:this.props.time,InputLabelProps:{shrink:!0},onChange:function(t){e.props.handleAppointmentInfo(t,"appointmentTime")}})),o.a.createElement("div",{className:"input-container"},o.a.createElement(h.a,{id:"notes",label:"Notes",rowsMax:"4",fullWidth:!0,value:this.props.notes,margin:"normal",InputLabelProps:{shrink:!0},onChange:function(t){e.props.handleAppointmentInfo(t,"notes")}})),o.a.createElement("div",{className:"input-container"},o.a.createElement("div",{className:"image-selector-label"},"Do you have any doctors order?"),o.a.createElement(y,{setImage:this.props.setImage,imageName:"doctorsOrderImage",getDataFromImage:!1})),o.a.createElement("div",{className:"btn-container"},o.a.createElement(c.b,{to:"/appointmentBooking/patientInfo"},o.a.createElement(I.a,{variant:"contained",color:"primary"},"Next"))))))}}]),t}(o.a.Component),k=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(b.a,{maxWidth:"sm"},o.a.createElement("div",{className:"form-title"},"FILL IN PATIENT DETAILS"),o.a.createElement("form",null,o.a.createElement("div",{className:"input-container"},o.a.createElement("div",{className:"image-selector-label"}," Send us an ID"),o.a.createElement(y,{setImage:this.props.setImage,imageName:"patientIdImage",getDataFromImage:!0})),o.a.createElement("div",{className:"input-container"},o.a.createElement(h.a,{defaultValue:this.props.firstName,id:"standard-name",label:"Firstname",margin:"normal",fullWidth:!0,InputLabelProps:{shrink:!0},onChange:function(t){e.props.handlePatientInfo(t,"firstName")}})),o.a.createElement("div",{className:"input-container"},o.a.createElement(h.a,{defaultValue:this.props.lastName,id:"standard-name",label:"Lastname",margin:"normal",fullWidth:!0,InputLabelProps:{shrink:!0},onChange:function(t){e.props.handlePatientInfo(t,"lastName")}})),o.a.createElement("div",{className:"input-container"},o.a.createElement(h.a,{defaultValue:this.props.dateOfBirth,id:"standard-name",label:"Date of birth",type:"date",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},onChange:function(t){e.props.handlePatientInfo(t,"dateOfBirth")}})),o.a.createElement("div",{className:"btn-container"},o.a.createElement(I.a,{variant:"contained",color:"primary"},"Request Appointment"))))}}]),t}(o.a.Component),w=(a(145),a(81)),A=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).setImage=function(e,t,n){switch(e){case"doctorsOrderImage":var o=Object(m.a)({},a.state.appointmentInfo);o[e]=t,a.setState({appointmentInfo:o});break;case"patientIdImage":var i=Object(m.a)({},a.state.patientInfo);i[e]=t,a.setState({patientInfo:i})}setTimeout(function(){console.log("image",a.state)},500)},a.handleAppointmentInfo=function(e,t){var n=Object(m.a)({},a.state.appointmentInfo);n[t]=e.target.value,a.setState({appointmentInfo:n}),setTimeout(function(){console.log(a.state)},500)},a.handlePatientInfo=function(e,t){var n=Object(m.a)({},a.state.patientInfo);n[t]=e.target.value,a.setState({patientInfo:n}),setTimeout(function(){console.log(a.state)},500)},a.state={appointmentInfo:{clinicLocation:"",exam:"MRI",appointmentDate:w().format("YYYY-MM-DD"),appointmentTime:"",notes:"",doctorsOrderImage:null},patientInfo:{patientIdImage:"",firstName:"",lastName:"",dateOfBirth:""}},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement(s.a,{exact:!0,path:"/appointmentBooking/",render:function(t){return o.a.createElement(L,Object.assign({},t,e.state.appointmentInfo,{handleAppointmentInfo:e.handleAppointmentInfo,setImage:e.setImage}))}}),o.a.createElement(s.a,{exact:!0,path:"/appointmentBooking/patientInfo",render:function(t){return o.a.createElement(k,Object.assign({},t,e.state.patientInfo,{handlePatientInfo:e.handlePatientInfo,setImage:e.setImage}))}}))}}]),t}(o.a.Component);var P=function(){return o.a.createElement(c.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(r,null),o.a.createElement(s.a,{path:"/",component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,t,a){e.exports=a(147)},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.3fbdcbd9.chunk.js.map