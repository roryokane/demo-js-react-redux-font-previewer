import React, { Component, PropTypes } from 'react';

class FontSelector extends Component {
	constructor(props, context) {
		super(props, context);

		//why: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onChange(e.target.value);
	}

	render() {
		//let selected = '';
		
		return (
			<div className="font-selector">
				<label>
					Font:
					{" "}
					<select name="font-name" onChange={this.handleChange} value={this.props.selectedFont}>
						<option value="Helvetica">Helvetica</option>
						<option value="Times New Roman">Times New Roman</option>
					</select>
				</label>
			</div>
			
			/* <input className="small"
				type="text"
				placeholder={this.props.placeholder}
				value={this.props.value}
				onChange={this.handleChange} /> */
		);
	}
}

FontSelector.propTypes = {
	onChange: PropTypes.func.isRequired,
	fonts: PropTypes.array.isRequired,
	selectedFont: PropTypes.string
};

export default FontSelector;
