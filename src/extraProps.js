const { addFilter } = wp.hooks;

import classnames from 'classnames';

function applyExtraClass( extraProps, blockType, attributes ) {

	const { chiSpeed, chiDelay, chiStyle } = attributes;

	if ( typeof chiStyle !== 'undefined' && '' !== chiStyle ) {
		extraProps.className = classnames( extraProps.className, 'chi__animated chi__' + chiStyle );
	}
	if ( typeof chiSpeed !== 'undefined' && '' !== chiSpeed ) {
		extraProps.className = classnames( extraProps.className, 'chi__' + chiSpeed );
	}
	if ( typeof chiDelay !== 'undefined' && '' !== chiDelay ) {
		extraProps.className = classnames( extraProps.className, 'chi__' + chiDelay );
	}

	return extraProps;
	
}

addFilter(
	'blocks.getSaveContent.extraProps',
	'kungfu/applyExtraClass',
	applyExtraClass
);
