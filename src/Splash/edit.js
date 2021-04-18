import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { TextControl, ToggleControl } from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";

import "./editor.scss";

export function Edit({ attributes, setAttributes }) {
	const [isBig, setIsBig] = useState(attributes.isBig);

	useEffect(() => {
		setAttributes({
			...attributes,
			isBig,
		});
	}, [isBig]);

	const onChangeHeaderText = (value) => {
		setAttributes({
			...attributes,
			header: value,
		});
	};

	const toggleIsBig = () => {
		setIsBig(!isBig);
	};

	return (
		<div {...useBlockProps()}>
			<ToggleControl
				label="Use Large Text?"
				checked={isBig}
				onChange={toggleIsBig}
			/>
			<TextControl
				label="InnerContent"
				value={attributes.header}
				onChange={onChangeHeaderText}
			/>
		</div>
	);
}
