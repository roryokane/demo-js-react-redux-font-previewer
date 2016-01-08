import * as types from '../constants/ActionTypes';

export function selectFont(fontName) {
	return { type: types.SELECT_FONT, fontName };
}

export function changePreviewText(newText) {
	return { type: types.CHANGE_PREVIEW_TEXT, newText };
}
