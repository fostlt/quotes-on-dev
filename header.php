<?php
/**
 * The header for our theme.
 *
 * @package QOD_Starter_Theme
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
		

	<?php wp_head(); ?>
	</head>

	<body <?php body_class(); ?>>
		<a href="http://localhost:3000/qod/">	<img class="logo about-logo" src="<?php echo get_template_directory_uri(); ?>/../../../assets/qod-logo.svg" /> </a>
	

			<div id="content" class="site-content">
