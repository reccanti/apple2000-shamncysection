/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export function Save({ attributes }) {
	const props = useBlockProps.save();
	const classNames = `${props.className} LinkGridItem ${
		attributes.isRecent ? "LinkGridItem--recent" : ""
	}`;
	console.log(attributes);
	return (
		<li {...props} className={classNames}>
			<a className="LinkGridItem-linkWrapper" href={attributes.url}>
				<div className="LinkGridItem-description">
					<div className="LinkGridItem-innerDescription">
						{attributes.previewText}
					</div>
				</div>
				<img
					className="LinkGridItem-preview"
					src={attributes.previewImageSrc}
					srcset={attributes.previewImageSrcset}
					role="presentation"
				/>
			</a>
		</li>
	);
}
