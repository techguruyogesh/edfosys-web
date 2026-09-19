<?php
/**
 * Archive template.
 *
 * @package cyancrm-blog
 */

get_header();

$categories       = get_categories(
	array(
		'orderby' => 'count',
		'order'   => 'DESC',
	)
);
$current_category = is_category() ? get_queried_object() : null;
?>

<section class="blog-hero blog-hero--archive">
	<div class="cyancrm-shell">
		<div class="blog-hero__inner">
			<div class="hero__eyebrow"><?php esc_html_e( 'Browse the Blog', 'cyancrm-blog' ); ?></div>
			<h1 class="blog-hero__title blog-hero__title--archive">
				<?php
				if ( is_category() ) {
					printf(
						wp_kses_post(
							/* translators: %s: category name */
							__( 'Articles in <span class="hero__title-accent">%s</span>', 'cyancrm-blog' )
						),
						esc_html( single_cat_title( '', false ) )
					);
				} elseif ( is_tag() ) {
					printf(
						wp_kses_post(
							/* translators: %s: tag name */
							__( 'Tagged with <span class="hero__title-accent">%s</span>', 'cyancrm-blog' )
						),
						esc_html( single_tag_title( '', false ) )
					);
				} else {
					the_archive_title();
				}
				?>
			</h1>
			<?php if ( term_description() ) : ?>
				<div class="blog-hero__description"><?php echo wp_kses_post( term_description() ); ?></div>
			<?php else : ?>
				<p class="blog-hero__description"><?php esc_html_e( 'Explore curated articles designed to help sales and operations teams improve capture, follow-up, and conversion performance.', 'cyancrm-blog' ); ?></p>
			<?php endif; ?>
			<div class="blog-hero__search">
				<?php get_search_form(); ?>
			</div>
		</div>
	</div>
</section>

<?php if ( $categories ) : ?>
	<section class="blog-filter-bar">
		<div class="cyancrm-shell">
			<div class="blog-filter-bar__inner">
				<a class="blog-filter-chip<?php echo is_category() ? '' : ' is-current'; ?>" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'All Articles', 'cyancrm-blog' ); ?></a>
				<?php foreach ( $categories as $category ) : ?>
					<a class="blog-filter-chip<?php echo ( $current_category && (int) $current_category->term_id === (int) $category->term_id ) ? ' is-current' : ''; ?>" href="<?php echo esc_url( get_category_link( $category ) ); ?>"><?php echo esc_html( $category->name ); ?></a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>
<?php endif; ?>

<section class="posts-section posts-section--listing">
	<div class="cyancrm-shell">
		<?php if ( have_posts() ) : ?>
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
				<h2 class="section-header__title"><?php esc_html_e( 'Nothing here yet', 'cyancrm-blog' ); ?></h2>
				<p class="archive-empty__text"><?php esc_html_e( 'Try another category or publish a new article from the WordPress dashboard.', 'cyancrm-blog' ); ?></p>
			</div>
		<?php endif; ?>
	</div>
</section>

<?php
get_footer();
