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
		return (
			<div className="section font-selector">
				<label>
					Font:
					{" "}
					<select name="font-name" onChange={this.handleChange} value={this.props.value}>
						{this.props.options.map((fontName) => {
							return <option value={fontName} key={fontName}>{fontName}</option>;
						})}
					</select>
				</label>
			</div>
		);
	}
}

FontSelector.propTypes = {
	options: PropTypes.array.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default FontSelector;
