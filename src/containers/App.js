// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FontPreviewerApp from '../components/FontPreviewerApp';
import * as FontPreviewingActions from '../actions/fontPreviewingActions';

class App extends React.Component {
  render() {
    const { fontPreviewerAppState, actions } = this.props;

    return (
        <FontPreviewerApp fontPreviewerAppState={fontPreviewerAppState} actions={actions} />
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  fontPreviewerAppState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fontPreviewerAppState: state.fontPreviewerAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FontPreviewingActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
