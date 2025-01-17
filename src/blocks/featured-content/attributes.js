const attributes = {
	align: {
		type: 'string',
		default: 'wide'
	},
	backgroundColor: {
		type: 'string'
	},
	customBackgroundColor: {
		type: 'string'
	},
	mediaAlt: {
		type: 'string',
		source: 'attribute',
		selector: 'figure img',
		attribute: 'alt',
		default: ''
	},
	mediaPosition: {
		type: 'string',
		default: 'left'
	},
	mediaId: {
		type: 'number'
	},
	mediaUrl: {
		type: 'string',
		source: 'attribute',
		selector: 'figure video,figure img',
		attribute: 'src'
	},
	mediaType: {
		type: 'string'
	},
	mediaWidth: {
		type: 'number',
		default: 50
	},
	verticalAlignment: {
		type: 'string'
	},
	imageFill: {
		type: 'boolean'
	},
	focalPoint: {
		type: 'object'
	},
};
export default attributes;
