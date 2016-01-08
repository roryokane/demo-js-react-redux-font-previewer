import React, { Component, PropTypes } from 'react';

class PreviewTextInput extends Component {
	constructor(props, context) {
		super(props, context);

		//why: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onChange(e.target.value);
	}

	render() {
		return (
			<div className="section edit-preview-text">
				<label>
					Preview Text:
					<textarea value={this.props.value} onChange={this.handleChange}></textarea>
				</label>
			</div>
		);
	}
}

PreviewTextInput.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string
};

export default PreviewTextInput;
