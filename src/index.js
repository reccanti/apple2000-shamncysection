/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from "@wordpress/blocks";

import ShmancySection from "./ShmancySection";
import LinkGrid from "./LinkGrid";
import LinkGridItem from "./LinkGridItem";

const blocks = [ShmancySection, LinkGrid, LinkGridItem];

blocks.forEach((block) => {
	console.log(block);
	registerBlockType(block.name, {
		apiVersion: 2,
		edit: block.edit,
		save: block.save,
	});
});
