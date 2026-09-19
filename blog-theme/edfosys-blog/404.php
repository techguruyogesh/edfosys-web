<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package cyancrm-blog
 */

get_header();
?>

<div style="padding-top: 20px; padding-bottom: 80px; min-height: 80vh; display: flex; align-items: center; justify-content: center; background-color: #f8fafc; position: relative; overflow: hidden;">
	
	<!-- Background blur orbs -->
	<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 800px; height: 800px; background: #cffafe; border-radius: 9999px; filter: blur(100px); opacity: 0.5; mix-blend-mode: multiply; pointer-events: none;"></div>
	<div style="position: absolute; top: 50%; right: 25%; transform: translateY(-50%); width: 600px; height: 600px; background: #dbeafe; border-radius: 9999px; filter: blur(100px); opacity: 0.4; mix-blend-mode: multiply; pointer-events: none;"></div>

	<div style="max-width: 42rem; width: 100%; margin: 0 auto; padding: 4rem 1rem 0; position: relative; z-index: 10; text-align: center; display: flex; flex-direction: column; align-items: center;">
		
		<!-- Red alert icon -->
		<div style="width: 6rem; height: 6rem; background: #fef2f2; color: #ef4444; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin-bottom: 2rem; border: 1px solid #fee2e2; box-shadow: 0 1px 2px rgba(0,0,0,0.05); flex-shrink: 0;">
			<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="12" cy="12" r="10"></circle>
				<line x1="12" y1="8" x2="12" y2="12"></line>
				<line x1="12" y1="16" x2="12.01" y2="16"></line>
			</svg>
		</div>
		
		<!-- 404 number -->
		<h1 style="font-size: clamp(3.75rem, 12vw, 6rem); font-weight: 900; color: #0f172a; letter-spacing: -0.025em; margin: 0 0 1rem 0; line-height: 1;">
			404
		</h1>
		
		<!-- Heading -->
		<h2 style="font-size: clamp(1.25rem, 4vw, 1.875rem); font-weight: 700; color: #1e293b; margin: 0 0 1.5rem 0;">
			<?php esc_html_e( 'Oops! Page not found', 'cyancrm-blog' ); ?>
		</h2>
		
		<!-- Description -->
		<p style="font-size: 1.125rem; color: #475569; margin: 0 0 2.5rem 0; max-width: 30rem;">
			<?php esc_html_e( 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.', 'cyancrm-blog' ); ?>
		</p>

		<!-- Buttons – allow wrapping on small screens -->
		<div class="four-oh-four-buttons" style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; width: 100%;">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="notfound-btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 1rem 2rem; background: #06b6d4; color: #fff; border-radius: 0.75rem; font-weight: 600; font-size: 1rem; text-decoration: none; box-shadow: 0 10px 15px -3px rgba(6,182,212,0.3); transition: transform 0.2s, background 0.2s; white-space: nowrap;">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
					<polyline points="9 22 9 12 15 12 15 22"></polyline>
				</svg>
				<?php esc_html_e( 'Back to Blog', 'cyancrm-blog' ); ?>
			</a>
			<a href="<?php echo esc_url( cyancrm_main_site_url() . '/contact' ); ?>" class="notfound-btn-secondary" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 1rem 2rem; background: #fff; color: #334155; border-radius: 0.75rem; font-weight: 600; font-size: 1rem; text-decoration: none; border: 1px solid #e2e8f0; transition: transform 0.2s, background 0.2s; white-space: nowrap;">
				<?php esc_html_e( 'Contact Support', 'cyancrm-blog' ); ?>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<line x1="5" y1="12" x2="19" y2="12"></line>
					<polyline points="12 5 19 12 12 19"></polyline>
				</svg>
			</a>
		</div>
	</div>
</div>

<style>
.notfound-btn-primary:hover { background: #0891b2 !important; transform: translateY(-2px); }
.notfound-btn-secondary:hover { background: #f8fafc !important; transform: translateY(-2px); }
</style>

<?php
get_footer();
