<?php
/**
 * Post card partial — modern Calendly/Lattice inspired article card.
 *
 * @package edfosys-blog
 */

$category = cyancrm_blog_primary_category();
$post_date = get_the_date( 'M j, Y' );
$read_time = cyancrm_blog_reading_time();
?>
<article <?php post_class( 'edf-card' ); ?>>
	<a class="edf-card__media" href="<?php the_permalink(); ?>">
		<?php if ( has_post_thumbnail() ) : ?>
			<?php the_post_thumbnail( 'large', array( 'class' => 'edf-card__img' ) ); ?>
		<?php else : ?>
			<div class="edf-card__placeholder">
				<div class="edf-card__placeholder-icon">⚡</div>
				<div class="edf-card__placeholder-brand">Edfosys Engineering</div>
			</div>
		<?php endif; ?>
		<?php if ( $category ) : ?>
			<span class="edf-card__category"><?php echo esc_html( $category->name ); ?></span>
		<?php endif; ?>
	</a>

	<div class="edf-card__body">
		<div class="edf-card__meta">
			<span class="edf-card__date"><?php echo esc_html( $post_date ); ?></span>
			<span class="edf-card__dot">•</span>
			<span class="edf-card__time"><?php echo esc_html( $read_time ); ?></span>
		</div>

		<h2 class="edf-card__title">
			<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
		</h2>

		<p class="edf-card__excerpt"><?php echo esc_html( cyancrm_blog_excerpt() ); ?></p>

		<div class="edf-card__footer">
			<div class="edf-card__author">
				<div class="edf-card__avatar">
					<?php echo esc_html( cyancrm_blog_author_initials() ); ?>
				</div>
				<div class="edf-card__author-info">
					<span class="edf-card__author-name"><?php echo esc_html( get_the_author() ); ?></span>
					<span class="edf-card__author-role"><?php esc_html_e( 'Technology Architect', 'cyancrm-blog' ); ?></span>
				</div>
			</div>
			<a class="edf-card__arrow" href="<?php the_permalink(); ?>" aria-label="<?php echo esc_attr( get_the_title() ); ?>">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
			</a>
		</div>
	</div>
</article>

