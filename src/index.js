/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from "@wordpress/blocks";

import ShmancySection from "./ShmancySection";

const blocks = [ShmancySection];

blocks.forEach((block) => {
	console.log(block);
	registerBlockType(block.name, {
		apiVersion: 2,
		/**
		 * @see ./edit.js
		 */
		edit: block.edit,

		/**
		 * @see ./save.js
		 */
		save: block.save,
	});
});
