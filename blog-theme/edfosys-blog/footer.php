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

<<!-- ============================================================
     CTA BANNER — matches Edfosys brand
     ============================================================ -->
<section class="cta-banner" style="background: linear-gradient(135deg, #0C3246 0%, #071c27 100%);">
	<div class="cta-banner__inner">
		<h2 class="cta-banner__title" style="color: #ffffff;"><?php esc_html_e( 'Ready to Transform & Scale Your Business?', 'cyancrm-blog' ); ?></h2>
		<p class="cta-banner__text" style="color: #cbd5e1;"><?php esc_html_e( 'Experience sub-second CRM workflows, custom engineering, and automated business operations built for modern growth.', 'cyancrm-blog' ); ?></p>
		<div class="cta-banner__actions">
			<a class="cta-banner__btn cta-banner__btn--primary" href="https://app.edfosys.com/signup" target="_blank" rel="noopener noreferrer" style="background: #F7941D; color: #ffffff; border: none; font-weight: 700;">
				<?php esc_html_e( 'Start 14-Day Free Trial', 'cyancrm-blog' ); ?> →
			</a>
			<a class="cta-banner__btn cta-banner__btn--secondary" href="<?php echo esc_url( $main_url . '/free-consulting' ); ?>" style="color: #ffffff; border-color: rgba(255,255,255,0.25);">
				<?php esc_html_e( 'Book 45-Min Free Session', 'cyancrm-blog' ); ?>
			</a>
		</div>
	</div>
</section>

<!-- ============================================================
     FOOTER — mirrors Edfosys layout
     ============================================================ -->
<footer class="site-footer" style="background: #061822; color: #94a3b8;">
	<div class="cyancrm-shell site-footer__inner">
		<div class="site-footer__grid">

			<!-- Col 1: Logo + Tagline + Social -->
			<div class="site-footer__brand">
				<a class="footer-brand" href="<?php echo esc_url( $main_url . '/' ); ?>">
					<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/logo.png' ); ?>" alt="Edfosys" style="height: 38px; width: auto; filter: brightness(0) invert(1);" />
				</a>
				<p class="site-footer__tagline" style="color: #94a3b8; font-size: 13px; margin-top: 12px;"><?php esc_html_e( 'Turnkey engineering, strategic advisory, and high-velocity CRM automation built for high-growth teams.', 'cyancrm-blog' ); ?></p>
			</div>

			<!-- Col 2: Engineering -->
			<div>
				<h3 class="site-footer__heading" style="color: #f8fafc; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;"><?php esc_html_e( 'Services', 'cyancrm-blog' ); ?></h3>
				<ul class="footer-links">
					<li><a href="<?php echo esc_url( $main_url . '/services/custom-software' ); ?>"><?php esc_html_e( 'Custom Software', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/services/web-development' ); ?>"><?php esc_html_e( 'Web Applications', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/services/mobile-apps' ); ?>"><?php esc_html_e( 'Mobile Apps', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/services/cloud-devops' ); ?>"><?php esc_html_e( 'Cloud & DevOps', 'cyancrm-blog' ); ?></a></li>
				</ul>
			</div>

			<!-- Col 3: SaaS Platform -->
			<div>
				<h3 class="site-footer__heading" style="color: #f8fafc; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;"><?php esc_html_e( 'Edfosys CRM', 'cyancrm-blog' ); ?></h3>
				<ul class="footer-links">
					<li><a href="<?php echo esc_url( $main_url . '/crm' ); ?>"><?php esc_html_e( 'CRM Overview', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/crm/pricing' ); ?>"><?php esc_html_e( 'Pricing Plans', 'cyancrm-blog' ); ?></a></li>
					<li><a href="https://app.edfosys.com/signup" target="_blank" rel="noopener noreferrer"><?php esc_html_e( 'Start Free Trial', 'cyancrm-blog' ); ?></a></li>
					<li><a href="https://app.edfosys.com/login" target="_blank" rel="noopener noreferrer"><?php esc_html_e( 'Customer Login', 'cyancrm-blog' ); ?></a></li>
				</ul>
			</div>

			<!-- Col 4: Advisory -->
			<div>
				<h3 class="site-footer__heading" style="color: #f8fafc; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;"><?php esc_html_e( 'Advisory', 'cyancrm-blog' ); ?></h3>
				<ul class="footer-links">
					<li><a href="<?php echo esc_url( $main_url . '/free-consulting' ); ?>"><?php esc_html_e( 'Free Consulting', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/business/incorporation' ); ?>"><?php esc_html_e( 'Business Setup', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/business/growth-planner' ); ?>"><?php esc_html_e( 'Growth Planner', 'cyancrm-blog' ); ?></a></li>
				</ul>
			</div>

			<!-- Col 5: Company -->
			<div>
				<h3 class="site-footer__heading" style="color: #f8fafc; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;"><?php esc_html_e( 'Company', 'cyancrm-blog' ); ?></h3>
				<ul class="footer-links">
					<li><a href="<?php echo esc_url( $main_url . '/about' ); ?>"><?php esc_html_e( 'About Edfosys', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $blog_url ); ?>"><?php esc_html_e( 'Blog & Insights', 'cyancrm-blog' ); ?></a></li>
					<li><a href="<?php echo esc_url( $main_url . '/contact' ); ?>"><?php esc_html_e( 'Contact Us', 'cyancrm-blog' ); ?></a></li>
				</ul>
			</div>

		</div><!-- .site-footer__grid -->

		<!-- Bottom Bar -->
		<div class="site-footer__bottom" style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 24px; margin-top: 40px;">
			<p class="site-footer__copy">© <?php echo esc_html( gmdate( 'Y' ) ); ?> <?php esc_html_e( 'Edfosys Technologies. All rights reserved.', 'cyancrm-blog' ); ?></p>
			<p class="site-footer__copy"><?php esc_html_e( 'Enterprise Cloud & CRM Ecosystem', 'cyancrm-blog' ); ?></p>
		</div>
	</div><!-- .site-footer__inner -->
</footer>
<?php wp_footer(); ?>
</body>
</html>
