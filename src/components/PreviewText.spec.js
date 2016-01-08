import chai from 'chai';
import cheerio from 'cheerio';
import PreviewText from './PreviewText';
import React from 'react';
import ReactDOMServer from 'react/lib/ReactDOMServer';

chai.should();

describe('Preview Text Component', () => {
	describe('text content', () => {
		it('replaces newlines with <br>s so they are displayed', () => {
			//arrange
			var props = {
				fontName: "Helvetica",
				text: "Line one\nLine two\nLine three"
			}
			var subject = React.createElement(PreviewText, props);

			//act
			var html = ReactDOMServer.renderToStaticMarkup(subject);
			let $ = cheerio.load(html);
			var previewHtml = $('.preview-text').html();

			//assert
			previewHtml.should.contain('<br>');
		});
	});
});
