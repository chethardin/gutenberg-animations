window.onload = function() {
	const options = {
		rootMargin: '0px 100% 0px 100%',
		threshold: 0,
	};
	const callback = ( entries, observer ) => {
		entries.forEach( entry => {
			if ( entry.isIntersecting ) {
				entry.target.classList.add( 'active' );
				observer.unobserve( entry.target );
			}
		} );
	};
	const observer = new IntersectionObserver( callback, options );
	document.querySelectorAll( '.chi__animated' ).forEach( animation => {
		observer.observe( animation );
	} );
};
