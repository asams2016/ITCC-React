import React, {Component} from 'react';
import {
	Navbar,
	Nav,
	NavItem,
	MenuItem,
	NavDropdown
} from 'react-bootstrap';
import './NavigationBar.css';
import logo from '../../images/logo.png';
import {connect} from 'react-redux';
import changePage from '../../redux/actions/changePage';

class NavigationBar extends Component {
	handleClick(newPage, e) {
		this.props.changeThePage(newPage);
	}

	render() {
		return(
			<div>
				<Navbar collapseOnSelect fixedTop>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="https://home.fedex.com" target="_blank" rel="noopener noreferrer"><img alt="FedEx"  className="nav-logo" src={logo} style={{height: "200%", width: "auto", paddingRight: "20px", paddingBottom: "3px"}}/></a>
							ITCC
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavItem eventKey={1} onClick={(e) => this.handleClick("home", e)} className="nav-item">
								Home
							</NavItem>
							<NavDropdown eventKey={2} title="Tools" id="basic-nav-dropdown" className="nav-item">
								<MenuItem eventKey={2.1} onClick={(e) => this.handleClick("aboutSplunk", e)}>Splunk</MenuItem>
									<MenuItem eventKey={2.2} onClick={(e) => this.handleClick("dataOnboarding", e)} style={{textIndent: "1em"}}>Data Onboarding</MenuItem>
								<MenuItem divider />
								<MenuItem eventKey={2.3} onClick={(e) => this.handleClick("serviceMapping", e)}>Service Mapping</MenuItem>
							</NavDropdown>
							<NavItem eventKey={3} onClick={(e) => this.handleClick("news", e)} className="nav-item">
								News
							</NavItem>
							<NavItem eventKey={4} onClick={(e) => this.handleClick("projects", e)} className="nav-item">
								Projects
							</NavItem>
							<NavItem eventKey={5} onClick={(e) => this.handleClick("team", e)} className="nav-item">
								Team
							</NavItem>
							<NavItem eventKey={6} onClick={(e) => this.handleClick("contact", e)} className="nav-item">
								Contact
							</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		page: state.page
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeThePage: (newPage) => {
			dispatch(changePage(newPage));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
