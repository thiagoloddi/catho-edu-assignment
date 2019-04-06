import React, { PureComponent } from "react";
import propTypes from 'prop-types';

class AsyncComponent extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			Component: null
		};

	}
  
	subscribe() {
		this.shouldUpdate = true;
		if(!this.state.Component) {
			this.props.provider.then( ({ Component }) => {
				if(this.shouldUpdate) {
					this.setState({ Component });
				}
			});
		}
	}

	unsubscribe() {
		this.shouldUpdate = false;
	}

	componentDidMount() { this.subscribe(); }

	componentWillUnmount() { this.unsubscribe(); }

	render() {
		const { Component } = this.state;
		const props = { ...this.props };
		delete props.provider;
		return Component ? <Component {...props} /> : <div>Loading...</div>;
	}
}

AsyncComponent.propTypes = {
	provider: propTypes.object.isRequired
};

export default AsyncComponent;