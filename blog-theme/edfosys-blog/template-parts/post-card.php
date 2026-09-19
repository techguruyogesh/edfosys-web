<?php
/**
 * Post card partial.
 *
 * @package cyancrm-blog
 */

$category = cyancrm_blog_primary_category();
?>
<article <?php post_class( 'post-card' ); ?>>
	<a class="post-card__media" href="<?php the_permalink(); ?>">
		<?php if ( has_post_thumbnail() ) : ?>
			<?php the_post_thumbnail( 'large' ); ?>
		<?php endif; ?>
		<?php if ( $category ) : ?>
			<span class="post-card__chip <?php echo esc_attr( cyancrm_blog_category_theme_class( $category ) ); ?>"><?php echo esc_html( $category->name ); ?></span>
		<?php endif; ?>
	</a>
	<div class="post-card__body">
		<h2 class="post-card__title">
			<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
		</h2>
		<p class="post-card__excerpt"><?php echo esc_html( cyancrm_blog_excerpt() ); ?></p>
		<div class="post-card__footer">
			<div class="post-card__author">
				<a class="post-card__author-badge" href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>">
					<?php echo esc_html( cyancrm_blog_author_initials() ); ?>
				</a>
				<div class="post-card__author-meta">
					<p class="post-card__author-name">
						<a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>"><?php echo esc_html( get_the_author() ); ?></a>
					</p>
					<p class="post-card__author-readtime"><?php echo esc_html( cyancrm_blog_reading_time() ); ?></p>
				</div>
			</div>
			<a class="post-card__readmore" href="<?php the_permalink(); ?>" aria-label="<?php echo esc_attr( get_the_title() ); ?>">
				<span aria-hidden="true">&rarr;</span>
			</a>
		</div>
	</div>
</article>
