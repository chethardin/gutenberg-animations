<?php

if ( ! defined( 'ABSPATH' ) ) { exit; }

add_action( 'init', function() 
{ 
	
	wp_register_script( 
		'kungfu-animations', 
		plugins_url( 'dist/animations.build.js', __FILE__ ), 
		array( 
			'wp-i18n', 
			'wp-element', 
			'wp-editor', 
		), 
		filemtime( plugin_dir_path( __FILE__ ) . 'dist/animations.build.js' ), 
		true 
	);
	
	wp_register_script( 
		'kungfu-observer', 
		plugins_url( 'assets/scripts.js', __FILE__ ), 
		array('jquery'), 
		true 
	);

	wp_register_style( 
		'chi-animate', 
		plugins_url( 'assets/chi-animate.css', __FILE__ ), 
		array(), 
		'4.0.0' 
	);

	add_image_size( 'events-thumb', 220, 180 );

});

add_action( 'enqueue_block_editor_assets', function() 
{

	wp_enqueue_script('kungfu-animations');

	wp_enqueue_style('chi-animate');

});

add_action('wp_enqueue_scripts', function()
{

	wp_enqueue_script( 'kungfu-observer' );

	wp_enqueue_style('chi-animate');

});