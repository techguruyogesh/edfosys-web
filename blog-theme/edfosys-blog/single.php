<?php
/**
 * Single post template.
 *
 * @package cyancrm-blog
 */

get_header();

if ( have_posts() ) :
	while ( have_posts() ) :
		the_post();

		$primary_category = cyancrm_blog_primary_category();
		$toc_items        = cyancrm_blog_get_toc();
		$all_categories   = get_categories(
			array(
				'orderby' => 'count',
				'order'   => 'DESC',
				'number'  => 6,
			)
		);
		$related_posts    = null;

		if ( $primary_category ) {
			$related_posts = new WP_Query(
				array(
					'post_type'           => 'post',
					'posts_per_page'      => 3,
					'post__not_in'        => array( get_the_ID() ),
					'cat'                 => (int) $primary_category->term_id,
					'ignore_sticky_posts' => true,
				)
			);
		}
		?>

		<div class="article-breadcrumb-band">
			<div class="cyancrm-shell">
				<div class="article-breadcrumbs">
					<a href="<?php echo esc_url( cyancrm_main_site_url() . '/' ); ?>"><?php esc_html_e( 'Home', 'cyancrm-blog' ); ?></a>
					<span>/</span>
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Blog', 'cyancrm-blog' ); ?></a>
					<span>/</span>
					<span><?php the_title(); ?></span>
				</div>
			</div>
		</div>

		<section class="article-hero">
			<div class="cyancrm-shell article-hero__inner">
				<a class="article-back-link" href="<?php echo esc_url( home_url( '/' ) ); ?>">
					<span aria-hidden="true">&larr;</span>
					<?php esc_html_e( 'Back to Blog', 'cyancrm-blog' ); ?>
				</a>

				<?php if ( $primary_category ) : ?>
					<span class="post-card__chip article-hero__category <?php echo esc_attr( cyancrm_blog_category_theme_class( $primary_category ) ); ?>">
						<?php echo esc_html( $primary_category->name ); ?>
					</span>
				<?php endif; ?>

				<h1 class="article-hero__title"><?php the_title(); ?></h1>

				<div class="article-hero__meta">
					<div class="article-author">
						<a class="article-author__badge" href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>">
							<?php echo esc_html( cyancrm_blog_author_initials() ); ?>
						</a>
						<div>
							<p class="article-author__name">
								<a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>"><?php echo esc_html( get_the_author() ); ?></a>
							</p>
							<?php $author_designation = get_user_meta( get_the_author_meta( 'ID' ), 'designation', true ); if ( $author_designation ) : ?>
								<p class="article-author__role"><?php echo esc_html( $author_designation ); ?></p>
							<?php endif; ?>
						</div>
					</div>

					<div class="article-meta-pills">
						<?php foreach ( cyancrm_blog_post_meta_items() as $meta_item ) : ?>
							<span class="article-meta-pill"><?php echo esc_html( $meta_item ); ?></span>
						<?php endforeach; ?>
					</div>
				</div>

				<div class="article-share-row">
					<span class="article-share-row__label"><?php esc_html_e( 'Share:', 'cyancrm-blog' ); ?></span>
					<div class="article-share">
						<a href="https://twitter.com/intent/tweet?url=<?php echo rawurlencode( get_permalink() ); ?>&text=<?php echo rawurlencode( get_the_title() ); ?>" target="_blank" rel="noopener noreferrer">X</a>
						<a href="https://www.linkedin.com/sharing/share-offsite/?url=<?php echo rawurlencode( get_permalink() ); ?>" target="_blank" rel="noopener noreferrer">in</a>
						<a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo rawurlencode( get_permalink() ); ?>" target="_blank" rel="noopener noreferrer">f</a>
					</div>
				</div>
			</div>
		</section>

		<section class="single-section single-section--content">
			<div class="cyancrm-shell single-layout">
				<div class="single-layout__main">
					<?php if ( has_post_thumbnail() ) : ?>
						<div class="article-featured">
							<?php the_post_thumbnail( 'full' ); ?>
						</div>
					<?php endif; ?>

					<article class="article-panel">
						<div class="article-content">
							<?php the_content(); ?>
						</div>

						<?php
						$post_tags = get_the_tags();
						if ( $post_tags ) :
							?>
							<div class="article-tags-wrap">
								<div class="article-tags-label"><?php esc_html_e( 'Tags', 'cyancrm-blog' ); ?></div>
								<div class="article-tags">
									<?php foreach ( $post_tags as $tag ) : ?>
										<a class="article-tag" href="<?php echo esc_url( get_tag_link( $tag ) ); ?>"><?php echo esc_html( $tag->name ); ?></a>
									<?php endforeach; ?>
								</div>
							</div>
						<?php endif; ?>

						<div class="author-card">
							<div class="author-card__row">
								<a class="author-card__avatar" href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>">
									<?php echo esc_html( cyancrm_blog_author_initials() ); ?>
								</a>
								<div>
									<div class="author-card__name-row">
										<h3 class="author-card__name">
											<a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>"><?php echo esc_html( get_the_author() ); ?></a>
										</h3>
										<?php $author_linkedin = get_user_meta( get_the_author_meta( 'ID' ), 'linkedin', true ); if ( $author_linkedin ) : ?>
											<a href="<?php echo esc_url( $author_linkedin ); ?>" target="_blank" rel="noopener noreferrer" class="author-social-link" aria-label="LinkedIn">
												<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
											</a>
										<?php endif; ?>
									</div>
									<?php $author_designation = get_user_meta( get_the_author_meta( 'ID' ), 'designation', true ); if ( $author_designation ) : ?>
										<p class="author-card__role"><?php echo esc_html( $author_designation ); ?></p>
									<?php endif; ?>
								</div>
							</div>
							<?php $author_bio = get_the_author_meta( 'description' ); if ( $author_bio ) : ?>
								<p class="article-sidebar__text"><?php echo esc_html( $author_bio ); ?></p>
							<?php endif; ?>
						</div>
					</article>
				</div>

				<aside class="article-sidebar">
					<div class="article-sidebar__sticky">
						<?php if ( $toc_items ) : ?>
							<div class="sidebar-panel">
								<h2 class="sidebar-title"><?php esc_html_e( 'Table of Contents', 'cyancrm-blog' ); ?></h2>
								<ul class="toc-list">
									<?php foreach ( $toc_items as $item ) : ?>
										<li class="toc-list__item toc-list__item--level-<?php echo esc_attr( $item['level'] ); ?>">
											<a href="<?php echo esc_url( '#' . $item['id'] ); ?>"><?php echo esc_html( $item['text'] ); ?></a>
										</li>
									<?php endforeach; ?>
								</ul>
							</div>
						<?php endif; ?>

						<?php if ( $related_posts instanceof WP_Query && $related_posts->have_posts() ) : ?>
							<div class="sidebar-panel sidebar-panel--soft">
								<h2 class="sidebar-title"><?php esc_html_e( 'Related Articles', 'cyancrm-blog' ); ?></h2>
								<div class="related-compact-list">
									<?php
									while ( $related_posts->have_posts() ) :
										$related_posts->the_post();
										?>
										<a class="related-compact-card" href="<?php the_permalink(); ?>">
											<?php if ( has_post_thumbnail() ) : ?>
												<div class="related-compact-card__image"><?php the_post_thumbnail( 'thumbnail' ); ?></div>
											<?php endif; ?>
											<div class="related-compact-card__body">
												<h3><?php the_title(); ?></h3>
												<p><?php echo esc_html( cyancrm_blog_reading_time() ); ?></p>
											</div>
										</a>
									<?php endwhile; ?>
								</div>
								<?php wp_reset_postdata(); ?>
							</div>
						<?php endif; ?>

						<?php if ( $all_categories ) : ?>
							<div class="sidebar-panel">
								<h2 class="sidebar-title"><?php esc_html_e( 'Categories', 'cyancrm-blog' ); ?></h2>
								<div class="sidebar-category-list">
									<?php foreach ( $all_categories as $category ) : ?>
										<a href="<?php echo esc_url( get_category_link( $category ) ); ?>"><?php echo esc_html( $category->name ); ?></a>
									<?php endforeach; ?>
								</div>
							</div>
						<?php endif; ?>

						<div class="sidebar-panel sidebar-panel--cta" style="background: linear-gradient(135deg, #0C3246 0%, #071f2c 100%); color: #ffffff; border-radius: 20px; padding: 24px;">
							<h2 class="sidebar-title" style="color: #ffffff;"><?php esc_html_e( 'Scale With Edfosys', 'cyancrm-blog' ); ?></h2>
							<p class="article-sidebar__text" style="color: #cbd5e1;"><?php esc_html_e( 'Experience modern engineering and high-velocity CRM automation.', 'cyancrm-blog' ); ?></p>
							<a class="edf-btn-primary" href="https://app.edfosys.com/signup" target="_blank" rel="noopener noreferrer" style="display: block; text-align: center; margin-top: 12px;">
								<?php esc_html_e( 'Start 14-Day Free Trial', 'cyancrm-blog' ); ?> &rarr;
							</a>
						</div>
					</div>
				</aside>
			</div>
		</section>

		<?php
		if ( $related_posts instanceof WP_Query ) {
			$related_posts->rewind_posts();
		}
		?>
		<?php if ( $related_posts instanceof WP_Query && $related_posts->have_posts() ) : ?>
			<section class="related-section">
				<div class="edf-container">
					<h2 class="section-header__title related-section__title"><?php esc_html_e( 'You Might Also Like', 'cyancrm-blog' ); ?></h2>
					<div class="edf-posts-grid">
						<?php
						while ( $related_posts->have_posts() ) :
							$related_posts->the_post();
							get_template_part( 'template-parts/post-card' );
						endwhile;
						wp_reset_postdata();
						?>
					</div>
				</div>
			</section>
		<?php endif; ?>

		<?php
	endwhile;
endif;

get_footer();
