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

<section class="edf-blog-hero">
	<div class="edf-container">
		<div class="edf-blog-hero__content">
			<div class="edf-pill-badge">
				<span>📂</span>
				<span><?php esc_html_e( 'Topic Archive', 'cyancrm-blog' ); ?></span>
			</div>
			<h1 class="edf-blog-hero__title">
				<?php
				if ( is_category() ) {
					printf(
						wp_kses_post(
							/* translators: %s: category name */
							__( 'Articles in <span class="edf-text-accent">%s</span>', 'cyancrm-blog' )
						),
						esc_html( single_cat_title( '', false ) )
					);
				} elseif ( is_tag() ) {
					printf(
						wp_kses_post(
							/* translators: %s: tag name */
							__( 'Tagged with <span class="edf-text-accent">%s</span>', 'cyancrm-blog' )
						),
						esc_html( single_tag_title( '', false ) )
					);
				} else {
					the_archive_title();
				}
				?>
			</h1>
			<?php if ( term_description() ) : ?>
				<div class="edf-blog-hero__desc"><?php echo wp_kses_post( term_description() ); ?></div>
			<?php else : ?>
				<p class="edf-blog-hero__desc"><?php esc_html_e( 'Curated articles designed to help enterprise leaders scale technology and accelerate business growth.', 'cyancrm-blog' ); ?></p>
			<?php endif; ?>

			<div class="edf-blog-hero__search">
				<form role="search" method="get" class="edf-search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
					<span class="edf-search-icon">🔍</span>
					<input type="search" class="edf-search-input" placeholder="<?php esc_attr_e( 'Search this topic...', 'cyancrm-blog' ); ?>" value="<?php echo get_search_query(); ?>" name="s" />
					<button type="submit" class="edf-search-btn"><?php esc_html_e( 'Search', 'cyancrm-blog' ); ?></button>
				</form>
			</div>
		</div>
	</div>
</section>

<?php if ( $categories ) : ?>
	<section class="edf-filter-bar">
		<div class="edf-container">
			<div class="edf-filter-bar__inner">
				<a class="edf-filter-pill<?php echo is_category() ? '' : ' is-active'; ?>" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'All Insights', 'cyancrm-blog' ); ?></a>
				<?php foreach ( $categories as $category ) : ?>
					<a class="edf-filter-pill<?php echo ( $current_category && (int) $current_category->term_id === (int) $category->term_id ) ? ' is-active' : ''; ?>" href="<?php echo esc_url( get_category_link( $category ) ); ?>">
						<?php echo esc_html( $category->name ); ?>
						<span class="edf-filter-count"><?php echo esc_html( $category->count ); ?></span>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>
<?php endif; ?>

<section class="edf-posts-section">
	<div class="edf-container">
		<?php if ( have_posts() ) : ?>
			<div class="edf-posts-grid">
				<?php
				while ( have_posts() ) :
					the_post();
					get_template_part( 'template-parts/post-card' );
				endwhile;
				?>
			</div>
			<div class="edf-pagination">
				<?php
				echo wp_kses_post(
					paginate_links(
						array(
							'type'      => 'list',
							'prev_text' => '&larr; Previous',
							'next_text' => 'Next &rarr;',
						)
					)
				);
				?>
			</div>
		<?php else : ?>
			<div class="edf-empty-box">
				<div class="edf-empty-icon">📂</div>
				<h2 class="edf-empty-title"><?php esc_html_e( 'No articles in this topic yet', 'cyancrm-blog' ); ?></h2>
				<p class="edf-empty-desc"><?php esc_html_e( 'Try another category or return to the main insights page.', 'cyancrm-blog' ); ?></p>
				<a class="edf-btn-primary" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'View All Insights', 'cyancrm-blog' ); ?></a>
			</div>
		<?php endif; ?>
	</div>
</section>

<?php
get_footer();
