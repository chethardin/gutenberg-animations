const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { InspectorControls } = wp.editor;
const { createHigherOrderComponent } = wp.compose;
const { PanelBody, SelectControl } = wp.components;

import { disallowed } from './disallowed';
import { options } from './options';

const withAdvancedControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const {
			name,
			attributes,
			setAttributes,
			isSelected,
		} = props;

		const {
			chiSpeed,
			chiDelay,
			chiStyle,
		} = attributes;

		return (
			<Fragment>
				<BlockEdit { ...props } />
				{ isSelected && 
					!disallowed.includes( name ) &&
					<InspectorControls>
						<PanelBody
							title={ __( 'Animations' ) }
							initialOpen={ false }
						>
							<SelectControl
								label={ __( 'Style' ) }
								value={ chiStyle }
								options={ options.styleControls }
								onChange={ ( selectedStyleOption ) => {
									setAttributes( {
										chiStyle: selectedStyleOption,
									} );
								} }
							/>
							<SelectControl
								label={ __( 'Speed' ) }
								value={ chiSpeed }
								options={ options.speedControls }
								initialOpen={ false }
								onChange={ ( selectedSpeedOption ) => {
									setAttributes( {
										chiSpeed: selectedSpeedOption,
									} );
								} }
							/>
							<SelectControl
								label={ __( 'Delay' ) }
								value={ chiDelay }
								options={ options.delayControls }
								initialOpen={ false }
								onChange={ ( selectedDelayOption ) => {
									setAttributes( {
										chiDelay: selectedDelayOption,
									} );
								} }
							/>
						</PanelBody>
					</InspectorControls>
				}
			</Fragment>
		);
	};
}, 'withAdvancedControls' );

addFilter(
	'editor.BlockEdit',
	'kungfu/custom-advanced-control',
	withAdvancedControls
);