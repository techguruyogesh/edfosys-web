<?php
/**
 * Author archive template.
 *
 * @package cyancrm-blog
 */

get_header();

$author      = get_queried_object();
$author_id   = $author->ID;
$author_name = $author->display_name;
$author_designation = get_user_meta( $author_id, 'designation', true );
$author_bio         = get_the_author_meta( 'description', $author_id );
$author_linkedin    = get_user_meta( $author_id, 'linkedin', true );
$author_twitter     = get_user_meta( $author_id, 'twitter', true );
$initials    = cyancrm_blog_author_initials_by_name( $author_name );
?>

<div class="author-archive-hero">
	<div class="cyancrm-shell author-archive-hero__inner">
		<div class="author-archive-avatar"><?php echo esc_html( $initials ); ?></div>
		<div class="author-archive-info">
			<div class="author-archive-name-row">
				<h1 class="author-archive-name"><?php echo esc_html( $author_name ); ?></h1>
				<?php if ( $author_linkedin || $author_twitter ) : ?>
					<div class="author-archive-social">
						<?php if ( $author_linkedin ) : ?>
							<a href="<?php echo esc_url( $author_linkedin ); ?>" target="_blank" rel="noopener noreferrer" class="author-social-link" aria-label="LinkedIn">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
							</a>
						<?php endif; ?>
						<?php if ( $author_twitter ) : ?>
							<a href="<?php echo esc_url( $author_twitter ); ?>" target="_blank" rel="noopener noreferrer" class="author-social-link" aria-label="Twitter / X">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.734l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
							</a>
						<?php endif; ?>
					</div>
				<?php endif; ?>
			</div>
			<?php if ( $author_designation ) : ?>
				<p class="author-archive-designation"><?php echo esc_html( $author_designation ); ?></p>
			<?php endif; ?>
			<?php if ( $author_bio ) : ?>
				<p class="author-archive-bio"><?php echo esc_html( $author_bio ); ?></p>
			<?php endif; ?>
		</div>
	</div>
</div>

<section class="author-archive-posts">
	<div class="cyancrm-shell">
		<h2 class="author-archive-posts__title">
			<?php
			/* translators: %s: author display name */
			printf( esc_html__( 'Articles by %s', 'cyancrm-blog' ), esc_html( $author_name ) );
			?>
		</h2>

		<?php if ( have_posts() ) : ?>
			<div class="posts-grid">
				<?php
				while ( have_posts() ) :
					the_post();
					get_template_part( 'template-parts/post-card' );
				endwhile;
				?>
			</div>

			<div class="author-archive-pagination">
				<?php
				the_posts_pagination(
					array(
						'prev_text' => '&larr; ' . __( 'Newer', 'cyancrm-blog' ),
						'next_text' => __( 'Older', 'cyancrm-blog' ) . ' &rarr;',
					)
				);
				?>
			</div>
		<?php else : ?>
			<p class="author-archive-empty"><?php esc_html_e( 'No articles found.', 'cyancrm-blog' ); ?></p>
		<?php endif; ?>
	</div>
</section>

<?php get_footer(); ?>
