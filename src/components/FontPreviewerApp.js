import React, {PropTypes} from 'react';
import FontSelector from './FontSelector';

class FontPreviewerApp extends React.Component {
  constructor(props) {
    super(props);

    //why all the binds below? See here: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    this.onFontSelected = this.onFontSelected.bind(this);
    this.changePreviewText = this.changePreviewText.bind(this);
  }
  
  onFontSelected(fontName) {
    this.props.actions.selectFont(fontName);
  }
  
  changePreviewText(e) {
    this.props.actions.changePreviewText(e.target.value);
  }

  render() {
    let settings = this.props.fontPreviewerAppState;
    let fonts = ["Consolas", "Times New Roman"];

    return (
      <div>
        <h2>Webfont Previewer</h2>

        <FontSelector fonts={fonts} onChange={this.onFontSelected}></FontSelector>

        <div className="edit-preview-text">
          <label>
            Preview Text:
            <textarea value={settings.previewText} onChange={this.changePreviewText}></textarea>
          </label>
        </div>

        <div className="preview-text">
          <h3>Preview</h3>
          <div style={{fontFamily: settings.selectedFont}}>
            {settings.previewText}
          </div>
        </div>

      </div>
    );
  }
}

FontPreviewerApp.propTypes = {
  actions: PropTypes.object.isRequired,
  fontPreviewerAppState: PropTypes.object.isRequired
};

export default FontPreviewerApp;
