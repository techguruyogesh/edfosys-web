<?php
/**
 * Theme footer — mirrors the React CTABanner + Footer components exactly.
 *
 * @package cyancrm-blog
 */

$main_url = cyancrm_main_site_url();
$blog_url = home_url( '/' );
?>
</main>

<!-- ============================================================
     CTA BANNER — matches React <CTABanner /> exactly
     ============================================================ -->
<section class="cta-banner">
	<div class="cta-banner__orb cta-banner__orb--cyan"></div>
	<div class="cta-banner__orb cta-banner__orb--indigo"></div>

	<div class="cta-banner__inner">
		<h2 class="cta-banner__title"><?php esc_html_e( 'Ready to Transform Your Business?', 'cyancrm-blog' ); ?></h2>
		<p class="cta-banner__text"><?php esc_html_e( 'Join 200+ businesses already growing with Edfosys CRM. Start your free 14-day trial today.', 'cyancrm-blog' ); ?></p>
		<div class="cta-banner__actions">
			<a class="cta-banner__btn cta-banner__btn--primary" href="<?php echo esc_url( $main_url . '/contact' ); ?>">
				<?php esc_html_e( 'Start Free Trial', 'cyancrm-blog' ); ?> →
			</a>
			<a class="cta-banner__btn cta-banner__btn--secondary" href="<?php echo esc_url( $main_url . '/contact' ); ?>">
				<?php esc_html_e( 'Contact Us', 'cyancrm-blog' ); ?>
			</a>
		</div>
	</div>
</section>

<!-- ============================================================
     FOOTER — mirrors the React <Footer /> exactly
     bg-slate-900, 5-column grid, social icons, bottom bar
     ============================================================ -->
<footer class="site-footer">
	<div class="cyancrm-shell site-footer__inner">
		<div class="site-footer__grid">

			<!-- Col 1: Logo + Tagline + Social -->
			<div class="site-footer__brand">
				<a class="footer-brand" href="<?php echo esc_url( $main_url . '/' ); ?>">
					<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/dark-logo.svg' ); ?>" alt="Edfosys CRM" style="height: 40px; width: auto;" />
				</a>
				<p class="site-footer__tagline"><?php esc_html_e( 'Manage Every Lead. Win Every Deal.', 'cyancrm-blog' ); ?></p>
				<div class="site-footer__social">
					<!-- Facebook -->
					<a href="https://www.facebook.com/Edfosys CRM/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" class="footer-social-link">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
					</a>
					<!-- Instagram -->
					<a href="https://www.instagram.com/cyancrm/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" class="footer-social-link">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
					</a>
					<!-- LinkedIn -->
					<a href="https://www.linkedin.com/company/cyan-crm/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" class="footer-social-link">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
					</a>
					<!-- WhatsApp -->
					<a href="https://api.whatsapp.com/send/?phone=917405672371&text&type=phone_number&app_absent=0" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" class="footer-social-link">
						<svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M16.24 0C7.56 0 0.5 7.06 0.5 15.74c0 2.78 0.73 5.49 2.11 7.87L0 32l8.61-2.58a15.66 15.66 0 007.62 1.97h.01c8.68 0 15.75-7.06 15.75-15.74C31.99 7.06 24.93 0 16.24 0zm0 28.73h-.01c-2.21 0-4.38-.59-6.28-1.72l-.45-.27-5.11 1.53 1.54-4.99-.29-.47a12.96 12.96 0 01-1.98-6.89C3.66 8.58 9.08 3.16 16.24 3.16c3.48 0 6.74 1.35 9.19 3.8a12.9 12.9 0 013.81 9.18c0 7.17-5.83 12.99-13 12.99z"/><path d="M23.88 19.72c-.41-.2-2.42-1.19-2.8-1.33-.37-.14-.65-.2-.92.2-.27.41-1.05 1.33-1.29 1.6-.24.27-.47.31-.88.1-.41-.2-1.71-.63-3.26-2.01-1.2-1.06-2.02-2.38-2.26-2.79-.24-.41-.03-.63.18-.83.18-.18.41-.47.61-.71.2-.24.27-.41.41-.68.14-.27.07-.51-.03-.71-.1-.2-.92-2.21-1.25-3.03-.33-.79-.67-.69-.92-.7l-.78-.01c-.27 0-.71.1-1.08.51-.37.41-1.42 1.39-1.42 3.38 0 1.99 1.45 3.9 1.66 4.17.2.27 2.84 4.34 6.88 6.08.96.41 1.71.66 2.29.84.96.31 1.83.27 2.52.16.77-.12 2.42-.99 2.76-1.95.34-.95.34-1.77.24-1.95-.1-.17-.37-.27-.78-.48z"/></svg>
					</a>
				</div>
			</div>

			<!-- Col 2: Product -->
			<div>
				<h3 class="site-footer__heading"><?php esc_html_e( 'Product', 'cyancrm-blog' ); ?></h3>
				<ul class="footer-links">
					<li><a href="<?php echo esc_url( $main_url . '/features' ); ?>"><?php esc_html_e( 'Features', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/features#integrations' ); ?>"><?php esc_html_e( 'Integrations', 'cyancrm-blog' ); ?></a></li>
				</ul>
			</div>

			<!-- Col 3: Industries -->
			<div>
				<h3 class="site-footer__heading"><?php esc_html_e( 'Industries', 'cyancrm-blog' ); ?></h3>
				<ul class="footer-links">
					<li><a href="<?php echo esc_url( $main_url . '/industries/education' ); ?>"><?php esc_html_e( 'Education', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/industries/immigration' ); ?>"><?php esc_html_e( 'Immigration', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/industries/auction' ); ?>"><?php esc_html_e( 'Auction Management', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/industries/real-estate' ); ?>"><?php esc_html_e( 'Real Estate', 'cyancrm-blog' ); ?></a></li>
				</ul>
			</div>

			<!-- Col 4: Company -->
			<div>
				<h3 class="site-footer__heading"><?php esc_html_e( 'Company', 'cyancrm-blog' ); ?></h3>
				<ul class="footer-links">
					<li><a href="<?php echo esc_url( $main_url . '/about' ); ?>"><?php esc_html_e( 'About', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $blog_url ); ?>"><?php esc_html_e( 'Blog', 'cyancrm-blog' ); ?></a></li>
				</ul>
			</div>

			<!-- Col 5: Support -->
			<div>
				<h3 class="site-footer__heading"><?php esc_html_e( 'Support', 'cyancrm-blog' ); ?></h3>
				<ul class="footer-links">
					<li><a href="<?php echo esc_url( $main_url . '/contact' ); ?>"><?php esc_html_e( 'Contact Us', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/privacy' ); ?>"><?php esc_html_e( 'Privacy Policy', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/terms' ); ?>"><?php esc_html_e( 'Terms of Service', 'cyancrm-blog' ); ?></a></li>
				</ul>
			</div>

		</div><!-- .site-footer__grid -->

		<!-- Bottom Bar -->
		<div class="site-footer__bottom">
			<p class="site-footer__copy">© <?php echo esc_html( gmdate( 'Y' ) ); ?> <?php esc_html_e( 'Edfosys CRM. All rights reserved.', 'cyancrm-blog' ); ?></p>
			<p class="site-footer__copy"><?php esc_html_e( 'Made with ❤️ in India', 'cyancrm-blog' ); ?></p>
		</div>
	</div><!-- .site-footer__inner -->
</footer>
<?php wp_footer(); ?>
</body>
</html>
