<?php
/**
 * Plugin Name: Case Study Gutenberg Block
 * Description: This plugin creates a simple Gutenberg block named as case study plugin development
 * Version: 1.0.0
 * Author: Pallavi Bhatia
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: case-study-plugin-development
 *
 * @package Case Study Gutenberg Block
 */


function case_study_gutenberg_custom_blocks() {


   // Block front end styles.
   wp_enqueue_style(
      'case-study-block-front-end-styles',
      plugin_dir_url(__FILE__) . '/assets/css/style.css',
      array( 'wp-edit-blocks' )
   );
   // Block editor styles.
   wp_enqueue_style(
      'case-study-block-editor-styles',
      
     plugin_dir_url(__FILE__) . '/assets/css/editor.css',
      array( 'wp-edit-blocks' )
   );

   // Block Editor Script.
   wp_enqueue_script(  
      'case-study-block-editor-js',
      plugin_dir_url(__FILE__) . '/assets/js/case-study-block.js',
      array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' )
   );
   register_block_type(
      'case-study-plugin-development/case-study-block',
      array(
         'style'         => 'case-study-block-front-end-styles',
         'editor_style'  => 'case-study-block-editor-styles',
         'editor_script' => 'case-study-block-editor-js',
      )
   );

}

add_action( 'init', 'case_study_gutenberg_custom_blocks' );