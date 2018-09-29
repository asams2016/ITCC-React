import React, {Component} from 'react';
import "./ContactForm.css";

class ContactForm extends Component {
	render() {
		return(
			<div className="row" style={{padding: "40px"}}>
			<form className="col-sm-4 col-md-4 col-lg-4">
				<div className="row question">
					<input type="text" className="form-control" id="first-name" placeholder="First Name" />
				</div>
				<div className="row question">
					<input type="text" className="form-control question" id="last-name" placeholder="Last Name" />
				</div>
				<div className="row question">
					<input type="text" className="form-control question" id="id-number" placeholder="Employee ID Number" />
				</div>
				<div className="row question">
					<input type="text" className="form-control question" id="opco" placeholder="FedEx OpCo" />
				</div>
				<div className="row question">
					<input type="text" className="form-control question" id="email" placeholder="Email Address" />
				</div>
				<div className="row question">
					<textarea className="form-control" id="message" rows="3" placeholder="Message" />
				</div>
				<button type="submit" className="btn btn-block">Submit</button>
			</form>
			</div>
		);
	}
}

export default ContactForm;
