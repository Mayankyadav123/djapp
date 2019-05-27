import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';
import Spinner from '../common/spinner.gif';
import { bindActionCreators } from 'redux';
class Dashboard extends Component {
	componentDidMount() {
		this.props.getCurrentProfile();
	}
	render() {
		const { user } = this.props.auth;
		console.log(this.props);
		const { profile, loading } = this.props;

		let dashboardContent;
		console.log(profile + ':' + loading);

		if (profile && !loading) {
			dashboardContent = <h1>Hello</h1>;
		} else {
			dashboardContent = <h1>Loading</h1>;
		}

		return (
			<div>
				<div className='dashboard'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-12'>
								<h1 className='display-4'>Dashboard</h1>
								{dashboardContent}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	profile: state.profile,
	auth: state.auth,
});

const mapDisProp = dispatch => {
	return bindActionCreators({ getCurrentProfile }, dispatch);
};

export default connect(
	mapStateToProps,
	mapDisProp,
)(Dashboard);
