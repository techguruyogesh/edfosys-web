<?php
/**
 * Theme header — matches the React marketing-site Navbar exactly.
 *
 * @package cyancrm-blog
 */

$main_url = cyancrm_main_site_url();
$blog_url = home_url( '/' );
$is_blog  = is_home() || is_front_page() || is_archive() || is_single() || is_search();

$industries = array(
	array(
		'name'        => 'Education CRM',
		'description' => 'Manage student inquiries, admissions, and enrollments',
		'path'        => '/industries/education',
		'icon'        => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
	),
	array(
		'name'        => 'Immigration CRM',
		'description' => 'Track visa applications and document workflows',
		'path'        => '/industries/immigration',
		'icon'        => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
	),
	array(
		'name'        => 'Auction Management CRM',
		'description' => 'Track consignors, bidders, and auction lots',
		'path'        => '/industries/auction',
		'icon'        => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/></svg>',
	),
	array(
		'name'        => 'Real Estate CRM',
		'description' => 'Track leads, properties, and site visits',
		'path'        => '/industries/real-estate',
		'icon'        => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
	),
);
?>
<?php // phpcs:disable ?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-WSR9J99P');</script>
	<!-- End Google Tag Manager -->
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/png" href="<?php echo esc_url( get_template_directory_uri() . '/assets/images/favicon.png?v=3' ); ?>">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WSR9J99P"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->
<?php wp_body_open(); ?>
<header class="site-header">
	<div class="cyancrm-shell site-header__inner">
		<!-- Logo — identical to React website -->
		<a class="site-brand" href="<?php echo esc_url( $main_url . '/' ); ?>">
			<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/logo.svg' ); ?>" alt="Edfosys CRM" style="height: 40px; width: auto;" />
		</a>

		<!-- Desktop Navigation — same order & style as React Navbar -->
		<nav class="site-nav" aria-label="<?php esc_attr_e( 'Primary', 'cyancrm-blog' ); ?>">
			<a class="site-nav__link" href="<?php echo esc_url( $main_url . '/' ); ?>"><?php esc_html_e( 'Home', 'cyancrm-blog' ); ?></a>
			<a class="site-nav__link" href="<?php echo esc_url( $main_url . '/features' ); ?>"><?php esc_html_e( 'Features', 'cyancrm-blog' ); ?></a>

			<!-- Industries Dropdown -->
			<div class="site-nav__dropdown">
				<button class="site-nav__link site-nav__dropdown-trigger" type="button">
					<?php esc_html_e( 'Industries', 'cyancrm-blog' ); ?>
					<svg class="site-nav__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>
				<div class="site-nav__mega">
					<div class="site-nav__mega-panel">
						<div class="mega-header">
							<h3 class="mega-header__title"><?php esc_html_e( 'Industry Solutions', 'cyancrm-blog' ); ?></h3>
							<p class="mega-header__desc"><?php esc_html_e( 'CRM solutions tailored for your industry', 'cyancrm-blog' ); ?></p>
						</div>
						<div class="mega-grid">
							<?php foreach ( $industries as $ind ) : ?>
								<a class="mega-item" href="<?php echo esc_url( $main_url . $ind['path'] ); ?>">
									<div class="mega-item__icon"><?php echo $ind['icon']; // phpcs:ignore ?></div>
									<div class="mega-item__text">
										<span class="mega-item__name"><?php echo esc_html( $ind['name'] ); ?></span>
										<span class="mega-item__desc"><?php echo esc_html( $ind['description'] ); ?></span>
									</div>
								</a>
							<?php endforeach; ?>
						</div>
						<div class="mega-footer">
							<p><?php esc_html_e( "Don't see your industry?", 'cyancrm-blog' ); ?> <strong><?php esc_html_e( 'Edfosys CRM works for any business', 'cyancrm-blog' ); ?></strong></p>
							<a class="mega-footer__link" href="<?php echo esc_url( $main_url . '/contact' ); ?>">
								<?php esc_html_e( 'Book a Demo', 'cyancrm-blog' ); ?>
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			<a class="site-nav__link" href="<?php echo esc_url( $main_url . '/pricing' ); ?>"><?php esc_html_e( 'Pricing', 'cyancrm-blog' ); ?></a>
			<a class="site-nav__link" href="<?php echo esc_url( $main_url . '/about' ); ?>"><?php esc_html_e( 'About', 'cyancrm-blog' ); ?></a>
			<a class="site-nav__link<?php echo $is_blog ? ' is-current' : ''; ?>" href="<?php echo esc_url( $blog_url ); ?>"><?php esc_html_e( 'Blog', 'cyancrm-blog' ); ?></a>
			<a class="site-nav__link" href="<?php echo esc_url( $main_url . '/contact' ); ?>"><?php esc_html_e( 'Contact', 'cyancrm-blog' ); ?></a>
		</nav>
	</div>
</header>
<main class="site-main">
