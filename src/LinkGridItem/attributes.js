export const attributes = {
	/**
	 * This refers to the image url found in the preview images's "src" field
	 */
	previewImageSrc: {
		/**
		 * Here's a breakdown for each field here
		 */
		// "type" refers to the kind of data we're extracting
		type: "string",
		// "selector" refers to the selector we use to target the HTML element we're extracting data from
		selector: ".LinkGridItem-preview",
		// "source" refers to what part of the HTML element we're getting data from. In this case, we're getting it from one of the 'attributes' on that tag
		source: "attribute",
		// "attribute" is used if the "source" was an HTML attribute. It's the attribute we're extracting the value from. In this case, it's the "src" field
		attribute: "src",
	},
	/**
	 * This refers to the image urls found in the preview images's "src" field
	 */
	previewImageSrcset: {
		type: "string",
		selector: ".LinkGridItem-preview",
		source: "attribute",
		attribute: "srcset",
	},
	/**
	 * This refers to the href this item will link to
	 */
	url: {
		type: "string",
		selector: ".LinkGridItem-linkWrapper",
		source: "attribute",
		attribute: "href",
	},
	/**
	 * This refers to the preview text we'd like to display when
	 * the user hovers or focuses on the element
	 */
	previewText: {
		type: "string",
		selector: ".LinkGridItem-innerDescription",
		// in this case, we're getting the value from the inner text of the HTML element
		source: "text",
	},
	/**
	 * This represents whether this item should be marked as "recent".
	 * I can't think of a better way to handle this, so I'm just going to
	 * serialize it, rather than attach it to an element
	 */
	isRecent: {
		type: "boolean",
	},
};
