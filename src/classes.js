import classnames from 'classnames';

const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;

const withClientIdClassName = createHigherOrderComponent( ( BlockListBlock ) => {

    return ( props ) => {

    	const {
			attributes
		} = props;

		const {
			chiSpeed,
			chiDelay, 
			chiStyle,
		} = attributes;

    	let kungfuClasses;

		if ( typeof chiStyle !== 'undefined' && '' !== chiStyle ) {
			kungfuClasses = classnames( kungfuClasses, 'chi__animated chi__' + chiStyle );
		}
		if ( typeof chiSpeed !== 'undefined' && '' !== chiSpeed ) {
			kungfuClasses = classnames( kungfuClasses, 'chi__' + chiSpeed );
		}
		if ( typeof chiDelay !== 'undefined' && '' !== chiDelay ) {
			kungfuClasses = classnames( kungfuClasses, 'chi__' + chiDelay );
		}

		if ('' !== kungfuClasses) {
			return <BlockListBlock { ...props } className={ kungfuClasses } />;
		} else {
			return <BlockListBlock { ...props } />;
		}

    };

}, 'withClientIdClassName' );
 
addFilter( 
	'editor.BlockListBlock', 
	'kungfu/with-client-id-class-name', 
	withClientIdClassName 
);