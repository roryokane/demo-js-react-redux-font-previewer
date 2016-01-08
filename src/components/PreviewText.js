import React, {PropTypes} from 'react';

let PreviewText = (props) => {
    return (
        <div className="preview-text">
            <h3>Preview</h3>
            <div style={{fontFamily: props.fontName}}>
                {props.text}
            </div>
        </div>
    );
};

PreviewText.propTypes = {
    fontName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default PreviewText;
