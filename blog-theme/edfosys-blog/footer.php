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
     CTA BANNER — matches Edfosys brand
     ============================================================ -->
<section class="edf-cta-banner">
	<div class="edf-container">
		<div class="edf-cta-banner__box">
			<div class="edf-cta-banner__content">
				<span class="edf-pill-badge"><?php esc_html_e( 'Scale Faster With Edfosys', 'cyancrm-blog' ); ?></span>
				<h2 class="edf-cta-banner__title"><?php esc_html_e( 'Ready to Transform & Automate Your Business Operations?', 'cyancrm-blog' ); ?></h2>
				<p class="edf-cta-banner__desc"><?php esc_html_e( 'Get expert cloud engineering, frictionless company setup, and high-velocity CRM workflows designed for high-growth enterprises.', 'cyancrm-blog' ); ?></p>
				<div class="edf-cta-banner__actions">
					<a class="edf-btn-primary" href="https://app.edfosys.com/signup" target="_blank" rel="noopener noreferrer">
						<?php esc_html_e( 'Start 14-Day Free CRM Trial', 'cyancrm-blog' ); ?> &rarr;
					</a>
					<a class="edf-btn-outline" href="<?php echo esc_url( $main_url . '/free-consulting' ); ?>">
						<?php esc_html_e( 'Book Free 45-Min Consulting', 'cyancrm-blog' ); ?>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================================================
     FOOTER — mirrors Edfosys Next.js Footer.js exactly
     ============================================================ -->
<footer class="edf-footer">
	<div class="edf-container">
		<div class="edf-footer__grid">

			<!-- Column 1: Brand Info -->
			<div class="edf-footer__col-brand">
				<a class="edf-footer__brand" href="<?php echo esc_url( $main_url . '/' ); ?>">
					<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/logo.png' ); ?>" alt="Edfosys" class="edf-footer__logo" />
				</a>
				<p class="edf-footer__desc">
					<?php esc_html_e( 'Edfosys is a premier technology studio and business growth accelerator. We engineer modern cloud architectures, custom software, and AI-driven CRM platforms for ambitious enterprises.', 'cyancrm-blog' ); ?>
				</p>
				<div class="edf-footer__contact">
					<div class="edf-footer__contact-item">
						<span>📍</span>
						<span><?php esc_html_e( 'Ahmedabad, Gujarat, India', 'cyancrm-blog' ); ?></span>
					</div>
					<div class="edf-footer__contact-item">
						<span>📞</span>
						<a href="tel:+919099699965"><?php esc_html_e( '+91 90996 99965', 'cyancrm-blog' ); ?></a>
					</div>
					<div class="edf-footer__contact-item">
						<span>✉️</span>
						<a href="mailto:info@edfosys.com"><?php esc_html_e( 'info@edfosys.com', 'cyancrm-blog' ); ?></a>
					</div>
				</div>
			</div>

			<!-- Column 2: Digital & IT -->
			<div class="edf-footer__col">
				<h3 class="edf-footer__heading"><?php esc_html_e( 'Digital & IT', 'cyancrm-blog' ); ?></h3>
				<ul class="edf-footer__links">
					<li><a href="<?php echo esc_url( $main_url . '/services/custom-software' ); ?>"><?php esc_html_e( 'Custom Software', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/services/web-development' ); ?>"><?php esc_html_e( 'Web & Cloud Architecture', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/services/mobile-apps' ); ?>"><?php esc_html_e( 'Mobile App Engineering', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/services/cloud-devops' ); ?>"><?php esc_html_e( 'Cloud & DevOps', 'cyancrm-blog' ); ?></a></li>
				</ul>
			</div>

			<!-- Column 3: Business Growth -->
			<div class="edf-footer__col">
				<h3 class="edf-footer__heading"><?php esc_html_e( 'Business Growth', 'cyancrm-blog' ); ?></h3>
				<ul class="edf-footer__links">
					<li><a href="<?php echo esc_url( $main_url . '/business/growth-planner' ); ?>"><?php esc_html_e( 'Growth Planner', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/business/setup' ); ?>"><?php esc_html_e( 'Company Setup & GST', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/free-consulting' ); ?>" class="edf-highlight-link"><?php esc_html_e( 'Free Consulting ↗', 'cyancrm-blog' ); ?></a></li>
				</ul>
			</div>

			<!-- Column 4: SaaS Products -->
			<div class="edf-footer__col">
				<h3 class="edf-footer__heading"><?php esc_html_e( 'SaaS Products', 'cyancrm-blog' ); ?></h3>
				<ul class="edf-footer__links">
					<li>
						<a href="<?php echo esc_url( $main_url . '/crm' ); ?>">
							<span><?php esc_html_e( 'Edfosys CRM', 'cyancrm-blog' ); ?></span>
							<span class="edf-badge-flagship"><?php esc_html_e( 'Flagship', 'cyancrm-blog' ); ?></span>
						</a>
					</li>
					<li><a href="<?php echo esc_url( $main_url . '/crm/pricing' ); ?>"><?php esc_html_e( 'CRM Pricing & Plans', 'cyancrm-blog' ); ?></a></li>
					<li><a href="https://app.edfosys.com/signup" target="_blank" rel="noopener noreferrer"><?php esc_html_e( 'Start Free CRM Trial', 'cyancrm-blog' ); ?></a></li>
				</ul>
			</div>

			<!-- Column 5: Company & Blog -->
			<div class="edf-footer__col">
				<h3 class="edf-footer__heading"><?php esc_html_e( 'Company', 'cyancrm-blog' ); ?></h3>
				<ul class="edf-footer__links">
					<li><a href="<?php echo esc_url( $main_url . '/about' ); ?>"><?php esc_html_e( 'About Edfosys', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $blog_url ); ?>"><?php esc_html_e( 'Blog & Insights', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/contact' ); ?>"><?php esc_html_e( 'Contact Support', 'cyancrm-blog' ); ?></a></li>
				</ul>
			</div>

		</div>

		<!-- Bottom Bar -->
		<div class="edf-footer__bottom">
			<p>&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> <?php esc_html_e( 'Edfosys. All rights reserved.', 'cyancrm-blog' ); ?></p>
			<div class="edf-footer__legal">
				<a href="<?php echo esc_url( $main_url . '/privacy' ); ?>"><?php esc_html_e( 'Privacy Policy', 'cyancrm-blog' ); ?></a>
				<a href="<?php echo esc_url( $main_url . '/terms' ); ?>"><?php esc_html_e( 'Terms of Service', 'cyancrm-blog' ); ?></a>
				<a href="<?php echo esc_url( $main_url . '/contact' ); ?>"><?php esc_html_e( 'Contact', 'cyancrm-blog' ); ?></a>
				<span><?php esc_html_e( 'Made with ❤️ in India', 'cyancrm-blog' ); ?></span>
			</div>
		</div>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
