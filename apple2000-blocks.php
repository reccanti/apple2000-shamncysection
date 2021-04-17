<?php
/**
 * Plugin Name:       Apple 2000 Blocks
 * Description:       Blocks for the Apple 2000 theme – build step required.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            reccanti <reccanti@gmail.com>
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       apple2000-shamncysection
 *
 * @package           apple-2000
 */

function create_apple2000_category( $categories, $post ) {
	$apple2000_category = array(
		'slug' => 'apple2000',
		'title' => __( 'Apple 2000', 'apple2000' ),
	);
	if (in_array($apple2000_category, $categories)) {
		return $categories;
	}
	return array_merge( $categories, array($apple2000_category) );
}
add_filter( 'block_categories', 'create_apple2000_category', 10, 2);

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_apple_2000_blocks() {
	$components_dir = __DIR__ . "/src/";
	if ($handle = opendir($components_dir)) {
    while (false !== ($entry = readdir($handle))) {
				$ext = pathinfo($entry, PATHINFO_EXTENSION);
        if ($entry != "." && $entry != ".." && $ext == "") {
					register_block_type_from_metadata( $components_dir . $entry);
        }
    }
    closedir($handle);
	}
}
add_action( 'init', 'create_apple_2000_blocks' );
