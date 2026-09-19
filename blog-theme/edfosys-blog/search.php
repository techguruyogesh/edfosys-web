<?php
/**
 * Search results template.
 *
 * @package cyancrm-blog
 */

get_header();
?>

<section class="blog-hero blog-hero--archive">
	<div class="cyancrm-shell">
		<div class="blog-hero__inner">
			<div class="hero__eyebrow"><?php esc_html_e( 'Search Results', 'cyancrm-blog' ); ?></div>
			<h1 class="blog-hero__title blog-hero__title--archive">
				<?php
				printf(
					wp_kses_post(
						/* translators: %s: search query */
						__( 'Results for <span class="hero__title-accent">%s</span>', 'cyancrm-blog' )
					),
					esc_html( get_search_query() )
				);
				?>
			</h1>
			<p class="blog-hero__description"><?php esc_html_e( 'Browse the matching blog posts and guides found in the Edfosys CRM knowledge base.', 'cyancrm-blog' ); ?></p>
			<div class="blog-hero__search">
				<?php get_search_form(); ?>
			</div>
		</div>
	</div>
</section>

<section class="posts-section posts-section--listing">
	<div class="cyancrm-shell">
		<?php if ( have_posts() ) : ?>
			<div class="blog-results-meta">
				<?php
				printf(
					/* translators: %d: number of posts */
					esc_html__( 'Showing %d article(s).', 'cyancrm-blog' ),
					(int) $wp_query->found_posts
				);
				?>
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Clear filters', 'cyancrm-blog' ); ?></a>
			</div>

			<div class="posts-grid">
				<?php
				while ( have_posts() ) :
					the_post();
					get_template_part( 'template-parts/post-card' );
				endwhile;
				?>
			</div>
			<div class="pagination">
				<?php
				echo wp_kses_post(
					paginate_links(
						array(
							'type'      => 'list',
							'prev_text' => '&larr;',
							'next_text' => '&rarr;',
						)
					)
				);
				?>
			</div>
		<?php else : ?>
			<div class="archive-empty">
				<div class="archive-empty__icon">?</div>
				<h2 class="section-header__title"><?php esc_html_e( 'No matching articles found', 'cyancrm-blog' ); ?></h2>
				<p class="archive-empty__text"><?php esc_html_e( 'Try a broader keyword or browse by category to discover more content.', 'cyancrm-blog' ); ?></p>
				<a class="button" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Clear all filters', 'cyancrm-blog' ); ?></a>
			</div>
		<?php endif; ?>
	</div>
</section>

<?php
get_footer();
