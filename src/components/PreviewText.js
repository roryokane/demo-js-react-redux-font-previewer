import React, {PropTypes} from 'react';

let PreviewText = (props) => {
    let escapedFontName = '"' + props.fontName + '"';
    
    return (
        <div className="section preview">
            <h3>Preview</h3>
            <div className="preview-text" style={{fontFamily: escapedFontName}}>
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
