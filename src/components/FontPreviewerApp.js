import React, {PropTypes} from 'react';
import FontSelector from './FontSelector';
import PreviewTextInput from './PreviewTextInput';
import PreviewText from './PreviewText';

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
  
  changePreviewText(newText) {
    this.props.actions.changePreviewText(newText);
  }

  render() {
    let settings = this.props.fontPreviewerAppState;
    let fonts = ["Times New Roman", "Helvetica", "Open Sans", "Roboto", "Slabo 27px", "Lato", "Oswald"];

    return (
      <div>
        <h2>Webfont Previewer</h2>

        <FontSelector options={fonts} value={settings.selectedFont} onChange={this.onFontSelected} />
        <PreviewTextInput value={settings.previewText} onChange={this.changePreviewText} />
        <PreviewText fontName={settings.selectedFont} text={settings.previewText} />
      </div>
    );
  }
}

FontPreviewerApp.propTypes = {
  actions: PropTypes.object.isRequired,
  fontPreviewerAppState: PropTypes.object.isRequired
};

export default FontPreviewerApp;
