import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export function Save({ attributes }) {
	const props = useBlockProps.save();
	const classNames = `${props.className} Splash ${
		attributes.isBig ? "Splash--big" : ""
	}`;
	return (
		<section {...props} className={classNames}>
			<h2 className="Splash-main">
				<div className="Splash-inner">{attributes.header}</div>
			</h2>
		</section>
	);
}
