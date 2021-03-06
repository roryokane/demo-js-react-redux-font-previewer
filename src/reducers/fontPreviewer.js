import {SELECT_FONT, CHANGE_PREVIEW_TEXT} from '../constants/ActionTypes';

const initialState = {
	selectedFont: "Times New Roman",
	previewText: "The quick brown fox jumps over the lazy dog."
};

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead,
//create a copy of the state passed and set new values on the copy.
//Note that I'm using Object.assign to create a copy of current state
//and update values on the copy.
export default function fontPreviewerAppState(state = initialState, action) {
	switch (action.type) {
		case SELECT_FONT:
			return Object.assign({}, state, { selectedFont: action.fontName });

		case CHANGE_PREVIEW_TEXT:
			return Object.assign({}, state, { previewText: action.newText });

		default:
			return state;
	}
}
