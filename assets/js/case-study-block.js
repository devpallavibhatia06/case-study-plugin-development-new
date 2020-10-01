wp.blocks.registerBlockType( 'case-study-plugin-development/case-study-block', {

   title: wp.i18n.__( 'Case Study - Plugin Development', 'text-domain' ),
   description: wp.i18n.__( 'This is simple custom simple gutenberg block ', 'case-study-plugin-development' ),
   icon: 'universal-access-alt',
   category: 'common',
   attributes: {
        content: {
            source: 'html',
            selector: 'h2',
        },
        backgroundColor: {
            type: 'string',
            default: '#0693E3',
        },
        textColor: {
            type: 'string',
            default: '#ffffff',
        }
    },
 
    edit: function( props ) {
        return wp.element.createElement( 
            wp.element.Fragment, 
            null, 
            wp.element.createElement(
                wp.editor.InspectorControls, 
                null,
                wp.element.createElement(
                    wp.editor.PanelColorSettings, {
                        title: wp.i18n.__("Color Settings", "case-study-plugin-development"),
                        colorSettings: [
                            {
                                label: wp.i18n.__("Background Color", "case-study-plugin-development"),
                                value: props.attributes.backgroundColor,
                                onChange: function( newBackgroundColor ) {
                                    props.setAttributes({ backgroundColor: newBackgroundColor });
                                }
                            },
                            {
                                label: wp.i18n.__("Text Color", "case-study-plugin-development"),
                                value: props.attributes.textColor,
                                onChange: function( newColor ) {
                                    props.setAttributes({ textColor: newColor });
                                }
                            }
                        ]
                    }
                )
            ),
            wp.element.createElement( 
                wp.editor.RichText, {
                    tagName: 'p',
                    className: props.className,
                    value: props.attributes.content,
                    style: {
                        backgroundColor: props.attributes.backgroundColor,
                        color: props.attributes.textColor
                    },
                    onChange: function( newContent ) {
                        props.setAttributes( { content: newContent } );
                    }
                } 
            ) 
        );
    },
 
    save: function( props ) {
        return wp.element.createElement( wp.editor.RichText.Content, {
            tagName: 'p', 
            value: props.attributes.content,
            style: {
                backgroundColor: props.attributes.backgroundColor,
                color: props.attributes.textColor
            },        
        } );
    }
} );