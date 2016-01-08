import React, {PropTypes} from 'react';

function convertNewlinesToBrs(multilineText) {
    return multilineText.split("\n").map((item, index) => (
        <span key={index}>
            {item}
            <br/>
        </span>
    ));
}

let PreviewText = (props) => {
    let escapedFontName = '"' + props.fontName + '"';
    let formattedText = convertNewlinesToBrs(props.text);
    
    return (
        <div className="section preview">
            <h3>Preview</h3>
            <div className="preview-text" style={{fontFamily: escapedFontName}}>
                {formattedText}
            </div>
        </div>
    );
};

PreviewText.propTypes = {
    fontName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default PreviewText;
