<?php
/**
 * Blog index template.
 *
 * @package cyancrm-blog
 */

get_header();

$paged = max( 1, get_query_var( 'paged', 1 ) );

$posts_query = new WP_Query(
	array(
		'post_type'           => 'post',
		'posts_per_page'      => 6,
		'paged'               => $paged,
		'ignore_sticky_posts' => true,
	)
);

$categories = get_categories(
	array(
		'orderby' => 'count',
		'order'   => 'DESC',
	)
);
?>

<section class="blog-hero">
	<div class="cyancrm-shell">
		<div class="blog-hero__inner">
			<div class="hero__eyebrow">
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="color:#06b6d4;flex-shrink:0;">
					<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="currentColor" fill-opacity="0.3"/>
				</svg>
				<?php esc_html_e( 'Edfosys CRM Blog', 'cyancrm-blog' ); ?>
			</div>
			<h1 class="blog-hero__title">
				<?php esc_html_e( 'CRM Insights, Tips &', 'cyancrm-blog' ); ?>
				<span class="hero__title-accent"><?php esc_html_e( 'Industry Updates', 'cyancrm-blog' ); ?></span>
			</h1>
			<p class="blog-hero__description">
				<?php esc_html_e( 'Learn how to manage leads better, close more deals, and grow your business with expert advice.', 'cyancrm-blog' ); ?>
			</p>
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
				<a class="blog-filter-chip is-current" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'All Articles', 'cyancrm-blog' ); ?></a>
				<?php foreach ( $categories as $category ) : ?>
					<a class="blog-filter-chip" href="<?php echo esc_url( get_category_link( $category ) ); ?>"><?php echo esc_html( $category->name ); ?></a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>
<?php endif; ?>

<section class="posts-section posts-section--listing">
	<div class="cyancrm-shell">
		<?php if ( $posts_query->have_posts() ) : ?>
			<div class="posts-grid">
				<?php
				while ( $posts_query->have_posts() ) :
					$posts_query->the_post();
					get_template_part( 'template-parts/post-card' );
				endwhile;
				?>
			</div>

			<div class="pagination">
				<?php
				echo wp_kses_post(
					paginate_links(
						array(
							'total'      => $posts_query->max_num_pages,
							'current'    => $paged,
							'type'       => 'list',
							'prev_text'  => '&larr;',
							'next_text'  => '&rarr;',
						)
					)
				);
				?>
			</div>
		<?php else : ?>
			<div class="archive-empty">
				<div class="archive-empty__icon">?</div>
				<h2 class="section-header__title"><?php esc_html_e( 'No articles published yet', 'cyancrm-blog' ); ?></h2>
				<p class="archive-empty__text"><?php esc_html_e( 'Publish your first WordPress post and it will automatically appear in this layout.', 'cyancrm-blog' ); ?></p>
				<a class="button" href="<?php echo esc_url( admin_url( 'post-new.php' ) ); ?>"><?php esc_html_e( 'Create first post', 'cyancrm-blog' ); ?></a>
			</div>
		<?php endif; ?>
	</div>
</section>

<?php
wp_reset_postdata();
get_footer();
