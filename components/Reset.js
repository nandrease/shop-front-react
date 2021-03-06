import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from './User';

const RESET_MUTATION = gql`
	mutation RESET_MUTATION($resetToken: String!, $password: String!, $confirmPassword: String!) {
		resetPassword(resetToken: $resetToken, password: $password, confirmPassword: $confirmPassword) {
			id
			name
			email
		}
	}
`;

class ResetComponent extends Component {
	static propTypes = {
		resetToken: PropTypes.string.isRequired
	};
	state = {
		passford: '',
		confirmPassword: ''
	};
	saveToState = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<Mutation
				mutation={RESET_MUTATION}
				variables={{
					resetToken: this.props.resetToken,
					password: this.state.password,
					confirmPassword: this.state.confirmPassword
				}}
				refetchQueries={[ { query: CURRENT_USER_QUERY } ]}
			>
				{(reset, { error, loading, called }) => {
					return (
						<Form
							method="post"
							onSubmit={async (e) => {
								e.preventDefault();
								await reset();
								this.setState({ password: '', confirmPassword: '' });
							}}
						>
							<fieldset disabled={loading} aria-busy={loading}>
								<h2>Reset your Password</h2>
								<Error error={error} />
								<label htmlFor="password">
									Password
									<input
										type="password"
										name="password"
										placeholder="Enter your password"
										value={this.state.password}
										onChange={this.saveToState}
									/>
								</label>
								<label htmlFor="confirmPassword">
									Confirm password
									<input
										type="password"
										name="confirmPassword"
										placeholder="Confirm your passowrd"
										value={this.state.confirmPassword}
										onChange={this.saveToState}
									/>
								</label>
								<button type="submit">Reset password!</button>
							</fieldset>
						</Form>
					);
				}}
			</Mutation>
		);
	}
}

export default ResetComponent;
