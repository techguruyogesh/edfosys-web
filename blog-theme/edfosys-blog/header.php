<?php
/**
 * Theme header — matches the Edfosys Next.js Navbar exactly.
 *
 * @package edfosys-blog
 */

$main_url = cyancrm_main_site_url();
$blog_url = home_url( '/' );
$is_blog  = is_home() || is_front_page() || is_archive() || is_single() || is_search();
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/png" href="<?php echo esc_url( get_template_directory_uri() . '/assets/images/favicon.png' ); ?>">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="edf-navbar">
	<div class="edf-container edf-navbar__inner">
		<!-- Brand Logo -->
		<a class="edf-brand" href="<?php echo esc_url( $main_url . '/' ); ?>">
			<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/logo.png' ); ?>" alt="Edfosys" class="edf-brand__img" />
		</a>

		<!-- Desktop Navigation -->
		<nav class="edf-nav" aria-label="<?php esc_attr_e( 'Primary', 'cyancrm-blog' ); ?>">
			<a class="edf-nav__link" href="<?php echo esc_url( $main_url . '/' ); ?>"><?php esc_html_e( 'Home', 'cyancrm-blog' ); ?></a>

			<!-- Services Dropdown -->
			<div class="edf-dropdown">
				<a class="edf-nav__link edf-dropdown__trigger" href="<?php echo esc_url( $main_url . '/services/custom-software' ); ?>">
					<span><?php esc_html_e( 'Services', 'cyancrm-blog' ); ?></span>
					<svg class="edf-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
				</a>
				<div class="edf-dropdown__menu">
					<div class="edf-dropdown__col">
						<div class="edf-dropdown__label"><?php esc_html_e( 'Digital & IT Engineering', 'cyancrm-blog' ); ?></div>
						<a class="edf-dropdown__item" href="<?php echo esc_url( $main_url . '/services/custom-software' ); ?>">
							<div class="edf-dropdown__icon">💻</div>
							<div>
								<div class="edf-dropdown__title"><?php esc_html_e( 'Custom Software Development', 'cyancrm-blog' ); ?></div>
								<div class="edf-dropdown__desc"><?php esc_html_e( 'Enterprise ERP, SaaS & robust backend APIs', 'cyancrm-blog' ); ?></div>
							</div>
						</a>
						<a class="edf-dropdown__item" href="<?php echo esc_url( $main_url . '/services/web-development' ); ?>">
							<div class="edf-dropdown__icon">🌐</div>
							<div>
								<div class="edf-dropdown__title"><?php esc_html_e( 'Web Applications & Cloud', 'cyancrm-blog' ); ?></div>
								<div class="edf-dropdown__desc"><?php esc_html_e( 'Next.js & cloud infrastructure architecture', 'cyancrm-blog' ); ?></div>
							</div>
						</a>
						<a class="edf-dropdown__item" href="<?php echo esc_url( $main_url . '/services/mobile-apps' ); ?>">
							<div class="edf-dropdown__icon">📱</div>
							<div>
								<div class="edf-dropdown__title"><?php esc_html_e( 'Mobile App Engineering', 'cyancrm-blog' ); ?></div>
								<div class="edf-dropdown__desc"><?php esc_html_e( 'iOS & Android native and Flutter apps', 'cyancrm-blog' ); ?></div>
							</div>
						</a>
					</div>
					<div class="edf-dropdown__col">
						<div class="edf-dropdown__label"><?php esc_html_e( 'Business Growth & Setup', 'cyancrm-blog' ); ?></div>
						<a class="edf-dropdown__item" href="<?php echo esc_url( $main_url . '/business/growth-planner' ); ?>">
							<div class="edf-dropdown__icon">📈</div>
							<div>
								<div class="edf-dropdown__title"><?php esc_html_e( 'Business Growth Planner', 'cyancrm-blog' ); ?></div>
								<div class="edf-dropdown__desc"><?php esc_html_e( 'Financial modeling & roadmap planning', 'cyancrm-blog' ); ?></div>
							</div>
						</a>
						<a class="edf-dropdown__item" href="<?php echo esc_url( $main_url . '/business/setup' ); ?>">
							<div class="edf-dropdown__icon">🏛️</div>
							<div>
								<div class="edf-dropdown__title"><?php esc_html_e( 'Turnkey Business Setup', 'cyancrm-blog' ); ?></div>
								<div class="edf-dropdown__desc"><?php esc_html_e( 'Company incorporation, GST & compliance', 'cyancrm-blog' ); ?></div>
							</div>
						</a>
						<a class="edf-dropdown__item" href="<?php echo esc_url( $main_url . '/free-consulting' ); ?>">
							<div class="edf-dropdown__icon">✨</div>
							<div>
								<div class="edf-dropdown__title"><?php esc_html_e( 'Free 45-Min Consulting', 'cyancrm-blog' ); ?> <span class="edf-badge-pill">Free</span></div>
								<div class="edf-dropdown__desc"><?php esc_html_e( 'Strategy session with senior tech architects', 'cyancrm-blog' ); ?></div>
							</div>
						</a>
					</div>
				</div>
			</div>

			<!-- Edfosys CRM -->
			<a class="edf-nav__link" href="<?php echo esc_url( $main_url . '/crm' ); ?>">
				<span><?php esc_html_e( 'Edfosys CRM', 'cyancrm-blog' ); ?></span>
				<span class="edf-pill-saas">SaaS</span>
			</a>

			<!-- Free Consulting -->
			<a class="edf-nav__link" href="<?php echo esc_url( $main_url . '/free-consulting' ); ?>">
				<span><?php esc_html_e( 'Free Consulting', 'cyancrm-blog' ); ?></span>
				<span class="edf-pulse-dot"></span>
			</a>

			<a class="edf-nav__link" href="<?php echo esc_url( $main_url . '/about' ); ?>"><?php esc_html_e( 'About', 'cyancrm-blog' ); ?></a>
			<a class="edf-nav__link is-active" href="<?php echo esc_url( $blog_url ); ?>"><?php esc_html_e( 'Blog', 'cyancrm-blog' ); ?></a>
			<a class="edf-nav__link" href="<?php echo esc_url( $main_url . '/contact' ); ?>"><?php esc_html_e( 'Contact', 'cyancrm-blog' ); ?></a>
		</nav>

		<!-- Right CTAs -->
		<div class="edf-navbar__actions">
			<a href="https://app.edfosys.com/signup" target="_blank" rel="noopener noreferrer" class="edf-btn-primary">
				<?php esc_html_e( 'Start Free Trial', 'cyancrm-blog' ); ?>
			</a>
			<!-- Mobile Hamburger Toggle -->
			<button class="edf-mobile-toggle" id="edfMobileToggle" aria-label="Toggle navigation" type="button">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
			</button>
		</div>
	</div>

	<!-- Mobile Drawer -->
	<div class="edf-mobile-menu" id="edfMobileMenu">
		<a class="edf-mobile-menu__link" href="<?php echo esc_url( $main_url . '/' ); ?>"><?php esc_html_e( 'Home', 'cyancrm-blog' ); ?></a>
		<a class="edf-mobile-menu__link" href="<?php echo esc_url( $main_url . '/services/custom-software' ); ?>"><?php esc_html_e( 'Services', 'cyancrm-blog' ); ?></a>
		<a class="edf-mobile-menu__link" href="<?php echo esc_url( $main_url . '/crm' ); ?>"><?php esc_html_e( 'Edfosys CRM SaaS', 'cyancrm-blog' ); ?></a>
		<a class="edf-mobile-menu__link" href="<?php echo esc_url( $main_url . '/free-consulting' ); ?>"><?php esc_html_e( 'Free Consulting', 'cyancrm-blog' ); ?></a>
		<a class="edf-mobile-menu__link" href="<?php echo esc_url( $main_url . '/about' ); ?>"><?php esc_html_e( 'About', 'cyancrm-blog' ); ?></a>
		<a class="edf-mobile-menu__link is-active" href="<?php echo esc_url( $blog_url ); ?>"><?php esc_html_e( 'Blog', 'cyancrm-blog' ); ?></a>
		<a class="edf-mobile-menu__link" href="<?php echo esc_url( $main_url . '/contact' ); ?>"><?php esc_html_e( 'Contact', 'cyancrm-blog' ); ?></a>
		<div class="edf-mobile-menu__actions">
			<a href="https://app.edfosys.com/signup" target="_blank" rel="noopener noreferrer" class="edf-btn-primary" style="width: 100%; text-align: center;"><?php esc_html_e( 'Start Free Trial', 'cyancrm-blog' ); ?></a>
		</div>
	</div>
</header>

<script>
document.addEventListener('DOMContentLoaded', function() {
	var toggle = document.getElementById('edfMobileToggle');
	var menu = document.getElementById('edfMobileMenu');
	if (toggle && menu) {
		toggle.addEventListener('click', function() {
			menu.classList.toggle('is-open');
		});
	}
});
</script>

<main class="edf-main">
