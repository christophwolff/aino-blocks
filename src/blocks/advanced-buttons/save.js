/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
const { InnerBlocks } = wp.blockEditor;

export default function save({ attributes, className }) {
	const {
		items,
	} = attributes;

	const innerClasses = classnames(
		'wp-block-ainoblocks-advanced-buttons__inner', {

		}
	);

	return (
		<div className={className}>
			<div className={innerClasses}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
