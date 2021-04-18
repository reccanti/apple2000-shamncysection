import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	URLInput,
	MediaPlaceholder,
} from "@wordpress/block-editor";

import { TextControl, ToggleControl } from "@wordpress/components";

import { useState, useEffect } from "@wordpress/element";

import "./editor.scss";

// Helper Functions

const getMediaSrc = (media) => {
	return media.url;
};

const getMediaSrcset = (media) => {
	const { sizes } = media;
	const srcs = [];
	Object.values(sizes).forEach((size) => {
		const src = `${size.url} ${size.width}w`;
		srcs.push(src);
	});
	return srcs.join(",");
};

// It's the Component!!!

export function Edit({ attributes, setAttributes, isSelected }) {
	// Hooks Baby!!!
	const [isRecent, setIsRecent] = useState(attributes.isRecent);
	useEffect(() => {
		setAttributes({
			...attributes,
			isRecent,
		});
	}, [isRecent]);

	// Helper functions
	const onSelectImage = (value) => {
		setAttributes({
			...attributes,
			previewImageSrc: getMediaSrc(value),
			previewImageSrcset: getMediaSrcset(value),
		});
	};
	const onURLChange = (value) => {
		setAttributes({
			...attributes,
			url: value,
		});
	};
	const onTextChange = (value) => {
		setAttributes({
			...attributes,
			previewText: value,
		});
	};
	const toggleIsRecent = () => {
		setIsRecent(!isRecent);
	};

	if (isSelected) {
		return (
			<div {...useBlockProps()}>
				<ToggleControl
					label="Is Recent?"
					checked={isRecent}
					onChange={toggleIsRecent}
				/>
				<MediaPlaceholder
					onSelect={onSelectImage}
					allowedTypes={["image"]}
					multiple={false}
					labels={{ title: "Preview Image" }}
				>
					{attributes.previewImageSrc ? (
						<img width="50px" height="50px" src={attributes.previewImageSrc} />
					) : (
						""
					)}
				</MediaPlaceholder>
				<TextControl
					label="Preview Text"
					value={attributes.previewText}
					onChange={onTextChange}
				/>
				<URLInput
					label="URL"
					value={attributes.url}
					url={attributes.url}
					onChange={onURLChange}
				/>
			</div>
		);
	}
	return (
		<div {...useBlockProps()}>
			<img
				src={attributes.previewImageSrc}
				alt={`Preview image for ${attributes.previewText}`}
			/>
		</div>
	);
}
