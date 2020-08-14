const { addFilter } = wp.hooks;

import { disallowed } from './disallowed';
import { options } from './options';

function animationAttributes( settings ) {

	if ( typeof settings.attributes !== 'undefined' && !disallowed.includes( settings.name ) ) {

		settings.attributes = Object.assign( settings.attributes, {

			chiStyle: {
				style: 'string',
				default: options.styleControls[ 0 ].value,
			},
			chiSpeed: {
				style: 'string',
				default: options.speedControls[ 0 ].value,
			},
			chiDelay: {
				style: 'string',
				default: options.delayControls[ 0 ].value,
			},

		} );
		
	}

	return settings;

}

addFilter(
	'blocks.registerBlockType',
	'kungfu/custom-attributes',
	animationAttributes
);