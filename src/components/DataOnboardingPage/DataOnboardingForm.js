import React, {Component} from 'react';
import './DataOnboardingForm.css';

class DataOnboardingForm extends Component {
	render() {
		return(
			<form>
				<ol>
					<li className="question"> Have you reviewed the "Analytics Decision Tree" document?
						<div className="wrapper">
							<input className="form-check-input" type="radio" name="reviewed-tree" id="reviewed-tree-yes" value="yes" />
							<label className="form-check-label" htmlFor="reviewed-tree-yes">
								Yes
							</label>
							<input className="form-check-input" type="radio" name="reviewed-tree" id="reviewed-tree-no" value="no" defaultChecked />
							<label className="form-check-label" htmlFor="reviewed-tree-no">
								No
							</label>
						</div>
						<ol type="a">
							<li className="question"> Have you reviewed the results in the "Evaluation Worksheet" for the best home for your data?
								<div className="wrapper">
									<input className="form-check-input" type="radio" name="reviewed-worksheet" id="reviewed-worksheet-yes" value="yes" />
									<label className="form-check-label" htmlFor="reviewed-worksheet-yes">
										Yes
									</label>
									<input className="form-check-input" type="radio" name="reviewed-worksheet" id="reviewed-worksheet-no" value="no" defaultChecked />
									<label className="form-check-label" htmlFor="reviewed-worksheet-no">
										No
									</label>
								</div>
							</li>
							<li className="question"> Is your use Operational in nature?
								<div className="wrapper">
									<input className="form-check-input" type="radio" name="is-operational" id="is-operational-yes" value="yes" />
									<label className="form-check-label" htmlFor="is-operational-yes">
										Yes
									</label>
									<input className="form-check-input" type="radio" name="is-operational" id="is-operational-no" value="no" defaultChecked />
									<label className="form-check-label" htmlFor="is-operational-no">
										No
									</label>
								</div>
								<div className="form-group">
									<label htmlFor="operational-explain">Please elaborate</label>
								        <textarea className="form-control" id="operational-explain" rows="3" />
								</div>
							</li>
						</ol>
					</li>
					<li className="question"> What project is requesting Splunk onboarding?
						<div className="row">
							<div className="col-sm-4 col-md-4 col-lg-4">
								<input type="text" className="form-control" id="project-name" placeholder="Project name" />
							</div>
							<div className="col-sm-4 col-md-4 col-lg-4">
								<input type="text" className="form-control" id="eai-number" placeholder="EAI number" />
							</div>
						</div>
					</li>
					<li className="question"> Who is the point of contact for onboarding this project in case the Splunk Admins have any questions?
						<div className="row">
							<div className="col-sm-4 col-md-4 col-lg-4">
								<input type="text" className="form-control" id="contact-first-name" placeholder="First name" />
							</div>
							<div className="col-sm-4 col-md-4 col-lg-4">
								<input type="text" className="form-control" id="contact-last-name" placeholder="Last name" />
							</div>
						</div>
					</li>
					<li className="question"> What line of business (i.e. FedEx OpCo and/or Region) is the project associated with?
						<input type="text" className="form-control" id="line-of-business" placeholder="Example for user input" />
					</li>
					<li className="question"> Does your line of business already exist in Splunk?
						<div className="wrapper">
							<input className="form-check-input" type="radio" name="business-exists" id="business-exists-yes" value="yes" />
							<label className="form-check-label" htmlFor="business-exists-yes">
								Yes
							</label>
							<input className="form-check-input" type="radio" name="business-exists" id="business-exists-no" value="no" defaultChecked />
							<label className="form-check-label" htmlFor="business-exists-no">
								No
							</label>
						</div>
						<div id="conditional">
							<ol type="a">
								<li className="question" id="if-yes"> Can that Splunk environment be leveraged?
									<div className="wrapper">
										<input className="form-check-input" type="radio" name="can-leverage" id="can-leverage-yes" value="yes" />
										<label className="form-check-label" htmlFor="can-leverage-yes">
											Yes
										</label>
										<input className="form-check-input" type="radio" name="can-leverage" id="can-leverage-no" value="no" defaultChecked />
										<label className="form-check-label" htmlFor="can-leverage-no">
											No
										</label>
									</div>
								</li>
							</ol>
						</div>
					</li>
					<li className="question"> What is the purpose/business value of adding this project to the Splunk platform?
						<div className="form-group">
						        <textarea className="form-control" id="business-value" rows="3" />
						</div>
					</li>
					<li className="question"> How much data do you expect to ingest to Splunk per day?
						<div className="form-group">
						        <textarea className="form-control" id="daily-data-ingest" rows="3" />
						</div>
					</li>
					<li className="question"> What growth is projected over the next 3-5 years for the data being ingested into Splunk?
						<div className="form-group">
						        <textarea className="form-control" id="projected-growth" rows="3" />
						</div>
					</li>
					<li className="question"> Who will handle the upkeep of the project's data, dashboards, alerts, reports, etc.? 
						<div className="row">
							<div className="col-sm-4 col-md-4 col-lg-4">
								<input type="text" className="form-control" id="upkeep-person-first-name" placeholder="First name" />
							</div>
							<div className="col-sm-4 col-md-4 col-lg-4">
								<input type="text" className="form-control" id="upkeep-person-last-name" placeholder="Last name" />
							</div>
						</div>
						<ol type="a">
							<li className="question"> Has this person taken Splunk training either from Splunk or from the FLC?
								<div className="wrapper">							
									<input className="form-check-input" type="radio" name="had-splunk-training" id="had-splunk-training-yes" value="yes" />
									<label className="form-check-label" htmlFor="had-splunk-training-yes">
										Yes
									</label>
									<input className="form-check-input" type="radio" name="had-splunk-training" id="had-splunk-training-no" value="no" defaultChecked />
									<label className="form-check-label" htmlFor="had-splunk-training-no">
										No
									</label>
								</div>
							</li>
						</ol>
					</li>
					<li className="question"> Who needs access to your data? Are there groups who should not see your data?
						<div className="form-group">
						        <textarea className="form-control" id="access-data" rows="3" />
						</div>
					</li>
					<li className="question"> Who needs access to your dashboards? Are there groups who should not see your dashboards?
						<div className="form-group">
						        <textarea className="form-control" id="access-dashboards" rows="3" />
						</div>
					</li>
					<li className="question"> Who needs access to your searches? Are there groups who should not see your searches?
						<div className="form-group">
						        <textarea className="form-control" id="access-searches" rows="3" />
						</div>
					</li>
					<li className="question"> Does your project require data masking?
						<div className="wrapper">
							<input className="form-check-input" type="radio" name="data-masking" id="data-masking-yes" value="yes" />
							<label className="form-check-label" htmlFor="data-masking-yes">
								Yes
							</label>
							<input className="form-check-input" type="radio" name="data-masking" id="data-masking-no" value="no" defaultChecked />
							<label className="form-check-label" htmlFor="data-masking-no">
								No
							</label>
						</div>
					</li>
					<li className="question"> Are there any special requirements or other useful information related to your project that you could share?
						<div className="form-group">
						        <textarea className="form-control" id="other-info" rows="3" />
						</div>
					</li>
					<li className="question"> What time zone are your systems using? Are your system clocks using Network Time Protocol? What time zone
					     are the time stamps in your log files?
						<div className="form-group">
							<select name="time-zone" id="time-zone" style={{width: "200px"}}>
								<option value="-12.0">(GMT -12:00) Eniwetok, Kwajalein</option>
								<option value="-11.0">(GMT -11:00) Midway Island, Samoa</option>
								<option value="-10.0">(GMT -10:00) Hawaii</option>
								<option value="-9.0">(GMT -9:00) Alaska</option>
								<option value="-8.0">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
								<option value="-7.0">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
								<option value="-6.0">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
								<option value="-5.0">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
								<option value="-4.0">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
								<option value="-3.5">(GMT -3:30) Newfoundland</option>
								<option value="-3.0">(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>
								<option value="-2.0">(GMT -2:00) Mid-Atlantic</option>
								<option value="-1.0">(GMT -1:00 hour) Azores, Cape Verde Islands</option>
								<option value="0.0">(GMT) Western Europe Time, London, Lisbon, Casablanca</option>
								<option value="1.0">(GMT +1:00 hour) Brussels, Copenhagen, Madrid, Paris</option>
								<option value="2.0">(GMT +2:00) Kaliningrad, South Africa</option>
								<option value="3.0">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
								<option value="3.5">(GMT +3:30) Tehran</option>
								<option value="4.0">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
								<option value="4.5">(GMT +4:30) Kabul</option>
								<option value="5.0">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
								<option value="5.5">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>
								<option value="5.75">(GMT +5:45) Kathmandu</option>
								<option value="6.0">(GMT +6:00) Almaty, Dhaka, Colombo</option>
								<option value="7.0">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
								<option value="8.0">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
								<option value="9.0">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
								<option value="9.5">(GMT +9:30) Adelaide, Darwin</option>
								<option value="10.0">(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>
								<option value="11.0">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>
								<option value="12.0">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
							</select>
							{/*<textarea className="form-control" id="time-zone" rows="3"></textarea>*/}
						</div>
					</li>
				</ol>
				<button type="submit" className="btn btn-block">Submit</button>
			</form>
		);
	}
}

export default DataOnboardingForm;
