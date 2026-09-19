<?php
/**
 * Blog index template — matches Edfosys modern marketing design.
 *
 * @package edfosys-blog
 */

get_header();

$paged = max( 1, get_query_var( 'paged', 1 ) );

$posts_query = new WP_Query(
	array(
		'post_type'           => 'post',
		'posts_per_page'      => 9,
		'paged'               => $paged,
		'ignore_sticky_posts' => true,
	)
);

$categories = get_categories(
	array(
		'orderby' => 'count',
		'order'   => 'DESC',
		'hide_empty' => false,
	)
);
?>

<!-- Hero Header Section -->
<section class="edf-blog-hero">
	<div class="edf-container">
		<div class="edf-blog-hero__content">
			<div class="edf-pill-badge">
				<span>✦</span>
				<span><?php esc_html_e( 'Edfosys Engineering & Growth Insights', 'cyancrm-blog' ); ?></span>
			</div>
			<h1 class="edf-blog-hero__title">
				<?php esc_html_e( 'Ideas, Architecture & Playbooks for', 'cyancrm-blog' ); ?>
				<span class="edf-text-accent"><?php esc_html_e( 'Modern Scale', 'cyancrm-blog' ); ?></span>
			</h1>
			<p class="edf-blog-hero__desc">
				<?php esc_html_e( 'Practical engineering deep-dives, business setup blueprints, and high-velocity CRM automation from our technology architects and growth advisors.', 'cyancrm-blog' ); ?>
			</p>

			<!-- Search Bar -->
			<div class="edf-blog-hero__search">
				<form role="search" method="get" class="edf-search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
					<span class="edf-search-icon">🔍</span>
					<input type="search" class="edf-search-input" placeholder="<?php esc_attr_e( 'Search articles, architectures, blueprints...', 'cyancrm-blog' ); ?>" value="<?php echo get_search_query(); ?>" name="s" />
					<button type="submit" class="edf-search-btn"><?php esc_html_e( 'Search', 'cyancrm-blog' ); ?></button>
				</form>
			</div>
		</div>
	</div>
</section>

<!-- Category Filter Pills Bar -->
<?php if ( $categories ) : ?>
	<section class="edf-filter-bar">
		<div class="edf-container">
			<div class="edf-filter-bar__inner">
				<a class="edf-filter-pill is-active" href="<?php echo esc_url( home_url( '/' ) ); ?>">
					<?php esc_html_e( 'All Insights', 'cyancrm-blog' ); ?>
				</a>
				<?php foreach ( $categories as $category ) : ?>
					<a class="edf-filter-pill" href="<?php echo esc_url( get_category_link( $category ) ); ?>">
						<?php echo esc_html( $category->name ); ?>
						<span class="edf-filter-count"><?php echo esc_html( $category->count ); ?></span>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>
<?php endif; ?>

<!-- Main Posts Listing -->
<section class="edf-posts-section">
	<div class="edf-container">
		<?php if ( $posts_query->have_posts() ) : ?>
			<div class="edf-posts-grid">
				<?php
				while ( $posts_query->have_posts() ) :
					$posts_query->the_post();
					get_template_part( 'template-parts/post-card' );
				endwhile;
				?>
			</div>

			<!-- Pagination -->
			<div class="edf-pagination">
				<?php
				echo wp_kses_post(
					paginate_links(
						array(
							'total'      => $posts_query->max_num_pages,
							'current'    => $paged,
							'type'       => 'list',
							'prev_text'  => '&larr; Previous',
							'next_text'  => 'Next &rarr;',
						)
					)
				);
				?>
			</div>
		<?php else : ?>
			<div class="edf-empty-box">
				<div class="edf-empty-icon">📝</div>
				<h2 class="edf-empty-title"><?php esc_html_e( 'No articles found', 'cyancrm-blog' ); ?></h2>
				<p class="edf-empty-desc"><?php esc_html_e( 'We are actively writing new engineering and strategy guides. Check back soon or browse our services.', 'cyancrm-blog' ); ?></p>
				<a class="edf-btn-primary" href="<?php echo esc_url( cyancrm_main_site_url() . '/services/custom-software' ); ?>">
					<?php esc_html_e( 'Explore Engineering Services', 'cyancrm-blog' ); ?>
				</a>
			</div>
		<?php endif; ?>
	</div>
</section>

<?php
wp_reset_postdata();
get_footer();

