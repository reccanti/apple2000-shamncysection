/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Here's where we import and setup all our blocks. Blocks are expected
 * to export fields like name, Edit, Save, attributes, etc... similar
 * to how Storybook does it!
 */
import * as ShmancySectionBlock from "./ShmancySection";
import * as LinkGridBlock from "./LinkGrid";
import * as LinkGridItemBlock from "./LinkGridItem";

const blocks = [ShmancySectionBlock, LinkGridBlock, LinkGridItemBlock];

blocks.forEach(({ name, Edit, Save, ...data }) => {
	registerBlockType(name, {
		apiVersion: 2,
		edit: Edit,
		save: Save,
		...data,
	});
});
