import React from "react";
import axios from "axios"

const apiUri = "";
const apiKey = "";

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: "", 
          email: "", 
          message: ""
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.sendEmail = this.sendEmail.bind(this);
    }
  
    handleChange(event) {
        let change = {}
        change[event.target.name] = event.target.value
        this.setState(change)
      }
  
    postForm(event) {
      console.log(this.state)
      event.preventDefault();
      //this.sendEmail(this.state);
    }

    sendEmail(data){
      axios.post(apiUri, data, 
        {
          headers: { 
            "Content-Type": "application/json", 
            Authorization: "Bearer " + apiKey }
        })
      .then(function (response) {
        console.log(response);
        this.clearForm();
      })
      .catch(function (error) {
        console.log(error);
        this.clearForm();
      });
    }

    clearForm(){
        this.setState({name: "", email: "", message: ""});
    }

    componentWillUpdate(nextProps, nextState) {
        nextState.formIsValid = (nextState.name.length > 0 && nextState.email.length > 0 && nextState.message.length > 0);
      }

    render() {
      return (
        <form id="contactform" onSubmit={this.postForm}>
        <div className="field half first">
            <label htmlFor="name">Name</label>
            <input name="name" id="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange}></input>
        </div>
        <div className="field half">
            <label htmlFor="email">Email</label>
            <input name="email" id="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}></input>
        </div>
        <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" placeholder="Message" value={this.state.message} onChange={this.handleChange}></textarea>
        </div>
        <ul className="actions">
            <li><input type="submit" value="Send Message" className="button alt" disabled={!this.state.formIsValid} ></input></li>
        </ul>
    </form>
      );
    }
  }

  export default ContactForm;