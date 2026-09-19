<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function cyancrm_blog_enqueue_assets() {
	wp_enqueue_style(
		'cyancrm-blog-fonts',
		'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap',
		array(),
		null
	);

	wp_enqueue_style(
		'cyancrm-blog-style',
		get_stylesheet_uri(),
		array( 'cyancrm-blog-fonts' ),
		wp_get_theme()->get( 'Version' )
	);
}
add_action( 'wp_enqueue_scripts', 'cyancrm_blog_enqueue_assets' );

function cyancrm_blog_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'editor-styles' );
	add_editor_style( 'style.css' );

	register_nav_menus(
		array(
			'primary' => __( 'Primary Menu', 'cyancrm-blog' ),
		)
	);
}
add_action( 'after_setup_theme', 'cyancrm_blog_setup' );

/**
 * Custom SEO Meta Tags for Blog Home
 */
function cyancrm_blog_custom_title( $title ) {
	if ( is_home() || is_front_page() ) {
		return 'Edfosys Blog – Engineering, Business Setup & CRM Growth';
	}
	return $title;
}
add_filter( 'pre_get_document_title', 'cyancrm_blog_custom_title', 99 );

function cyancrm_blog_meta_description() {
	if ( is_home() || is_front_page() ) {
		echo '<meta name="description" content="Explore custom engineering insights, business setup strategies, and high-velocity CRM automation on the Edfosys blog.">' . "\n";
	}
}
add_action( 'wp_head', 'cyancrm_blog_meta_description', 1 );

function cyancrm_blog_canonical_url() {
	if ( is_home() || is_front_page() ) {
		$canonical = home_url( '/' );
	} elseif ( is_single() || is_page() ) {
		$canonical = get_permalink();
	} elseif ( is_category() || is_tag() || is_tax() ) {
		$canonical = get_term_link( get_queried_object() );
	} else {
		global $wp;
		$canonical = home_url( add_query_arg( array(), $wp->request ) );
	}

	if ( $canonical && ! is_wp_error( $canonical ) ) {
		$canonical = untrailingslashit( $canonical );
		echo '<link rel="canonical" href="' . esc_url( $canonical ) . '" />' . "\n";
	}
}
remove_action( 'wp_head', 'rel_canonical' );
add_action( 'wp_head', 'cyancrm_blog_canonical_url', 1 );

function cyancrm_main_site_url() {
	if ( defined( 'CYANCRM_MAIN_SITE_URL' ) && CYANCRM_MAIN_SITE_URL ) {
		return untrailingslashit( CYANCRM_MAIN_SITE_URL );
	}

	$home_url = home_url( '/' );
	$parsed_url = parse_url( $home_url );
	$host = isset( $parsed_url['host'] ) ? $parsed_url['host'] : 'localhost';

	// If it's a local development environment (localhost or a local network IP)
	if ( 'localhost' === $host || preg_match( '/^(127\.|192\.168\.|10\.|172\.(1[6-9]|2[0-9]|3[0-1])\.)/', $host ) ) {
		$scheme = isset( $parsed_url['scheme'] ) ? $parsed_url['scheme'] : 'http';
		return $scheme . '://' . $host . ':3000';
	}

	// If it's a subdomain (e.g., blog.edfosys.com) -> redirect to root domain (edfosys.com)
	if ( 0 === strpos( $host, 'blog.' ) ) {
		$main_host = substr( $host, 5 ); // remove 'blog.' prefix
		$scheme = isset( $parsed_url['scheme'] ) ? $parsed_url['scheme'] : 'https';
		return $scheme . '://' . $main_host;
	}

	// Fallback for subfolder structure (e.g., edfosys.com/blog)
	return preg_replace( '#/blog/?$#', '', untrailingslashit( $home_url ) );
}

function cyancrm_blog_nav_items() {
	$main_url = cyancrm_main_site_url();

	return array(
		array(
			'label'    => 'Home',
			'url'      => $main_url . '/',
			'current'  => false,
			'dropdown' => false,
		),
		array(
			'label'    => 'Features',
			'url'      => $main_url . '/features',
			'current'  => false,
			'dropdown' => false,
		),
		array(
			'label'    => 'Industries',
			'url'      => $main_url . '/industries',
			'current'  => false,
			'dropdown' => true,
		),
		array(
			'label'    => 'Pricing',
			'url'      => $main_url . '/pricing',
			'current'  => false,
			'dropdown' => false,
		),
		array(
			'label'    => 'About',
			'url'      => $main_url . '/about',
			'current'  => false,
			'dropdown' => false,
		),
		array(
			'label'    => 'Blog',
			'url'      => home_url( '/' ),
			'current'  => is_home() || is_front_page() || is_archive() || is_single() || is_search(),
			'dropdown' => false,
		),
		array(
			'label'    => 'Contact',
			'url'      => $main_url . '/contact',
			'current'  => false,
			'dropdown' => false,
		),
	);
}

function cyancrm_blog_reading_time( $post_id = null ) {
	$post_id = $post_id ? $post_id : get_the_ID();
	$content = get_post_field( 'post_content', $post_id );
	$words   = str_word_count( wp_strip_all_tags( $content ) );
	$minutes = max( 1, (int) ceil( $words / 220 ) );

	return sprintf( _n( '%s min read', '%s mins read', $minutes, 'cyancrm-blog' ), $minutes );
}

function cyancrm_blog_primary_category( $post_id = null ) {
	$post_id    = $post_id ? $post_id : get_the_ID();
	$categories = get_the_category( $post_id );

	return ! empty( $categories ) ? $categories[0] : null;
}

function cyancrm_blog_post_meta_items( $post_id = null ) {
	$post_id = $post_id ? $post_id : get_the_ID();

	return array(
		get_the_date( 'M j, Y', $post_id ),
		cyancrm_blog_reading_time( $post_id ),
	);
}

function cyancrm_blog_excerpt( $post_id = null, $fallback_length = 24 ) {
	$post_id = $post_id ? $post_id : get_the_ID();
	$excerpt = get_the_excerpt( $post_id );

	if ( $excerpt ) {
		return $excerpt;
	}

	return wp_trim_words( wp_strip_all_tags( get_post_field( 'post_content', $post_id ) ), $fallback_length );
}

function cyancrm_blog_author_initials( $post_id = null ) {
	$post_id = $post_id ? $post_id : get_the_ID();
	$name    = get_the_author_meta( 'display_name', (int) get_post_field( 'post_author', $post_id ) );
	return cyancrm_blog_author_initials_by_name( $name );
}

function cyancrm_blog_author_initials_by_name( $name ) {
	$parts = preg_split( '/\s+/', trim( (string) $name ) );

	if ( empty( $parts ) ) {
		return 'C';
	}

	$initials = strtoupper( substr( $parts[0], 0, 1 ) );

	if ( isset( $parts[1] ) ) {
		$initials .= strtoupper( substr( $parts[1], 0, 1 ) );
	}

	return $initials;
}

function cyancrm_blog_category_theme_class( $category = null ) {
	$category = $category ? $category : cyancrm_blog_primary_category();
	$slug     = $category ? $category->slug : 'default';
	$map      = array(
		'crm-tips'        => 'theme-blue',
		'lead-management' => 'theme-purple',
		'sales-growth'    => 'theme-green',
		'business-tips'   => 'theme-orange',
		'product-updates' => 'theme-indigo',
		'case-studies'    => 'theme-rose',
	);

	return isset( $map[ $slug ] ) ? $map[ $slug ] : 'theme-blue';
}

function cyancrm_blog_inject_heading_ids( $content ) {
	if ( ! is_singular( 'post' ) || ! in_the_loop() || ! is_main_query() ) {
		return $content;
	}

	static $is_running = false;

	if ( $is_running ) {
		return $content;
	}

	$is_running = true;
	$seen_ids   = array();

	$content = preg_replace_callback(
		'/<h([23])([^>]*)>(.*?)<\/h\1>/is',
		function ( $matches ) use ( &$seen_ids ) {
			$level      = $matches[1];
			$attributes = $matches[2];
			$inner_html = $matches[3];

			if ( preg_match( '/\sid=("|\')(.*?)\1/i', $attributes ) ) {
				return $matches[0];
			}

			$base_id = sanitize_title( wp_strip_all_tags( $inner_html ) );
			$base_id = $base_id ? $base_id : 'section';
			$id      = $base_id;
			$index   = 2;

			while ( in_array( $id, $seen_ids, true ) ) {
				$id = $base_id . '-' . $index;
				$index++;
			}

			$seen_ids[] = $id;

			return sprintf(
				'<h%s%s id="%s">%s</h%s>',
				esc_attr( $level ),
				$attributes,
				esc_attr( $id ),
				$inner_html,
				esc_attr( $level )
			);
		},
		$content
	);

	$is_running = false;

	return $content;
}
add_filter( 'the_content', 'cyancrm_blog_inject_heading_ids', 20 );

function cyancrm_blog_get_toc( $post_id = null ) {
	$post_id = $post_id ? $post_id : get_the_ID();
	$content = apply_filters( 'the_content', get_post_field( 'post_content', $post_id ) );
	$toc     = array();

	if ( preg_match_all( '/<h([23])([^>]*)id=("|\')(.*?)\3[^>]*>(.*?)<\/h\1>/is', $content, $matches, PREG_SET_ORDER ) ) {
		foreach ( $matches as $match ) {
			$toc[] = array(
				'level' => (int) $match[1],
				'id'    => $match[4],
				'text'  => wp_strip_all_tags( $match[5] ),
			);
		}
	}

	return $toc;
}

function cyancrm_blog_custom_user_fields( $user ) {
	?>
	<h3><?php esc_html_e( 'Edfosys CRM Author Info', 'cyancrm-blog' ); ?></h3>
	<table class="form-table">
		<tr>
			<th><label for="designation"><?php esc_html_e( 'Designation / Job Title', 'cyancrm-blog' ); ?></label></th>
			<td>
				<input type="text" name="designation" id="designation" value="<?php echo esc_attr( get_user_meta( $user->ID, 'designation', true ) ); ?>" class="regular-text" />
				<p class="description"><?php esc_html_e( 'e.g. Founder & CEO, Edfosys CRM', 'cyancrm-blog' ); ?></p>
			</td>
		</tr>
	</table>
	<?php
}
add_action( 'show_user_profile', 'cyancrm_blog_custom_user_fields' );
add_action( 'edit_user_profile', 'cyancrm_blog_custom_user_fields' );

function cyancrm_blog_save_custom_user_fields( $user_id ) {
	if ( ! current_user_can( 'edit_user', $user_id ) ) {
		return;
	}
	if ( isset( $_POST['designation'] ) ) {
		update_user_meta( $user_id, 'designation', sanitize_text_field( wp_unslash( $_POST['designation'] ) ) );
	}
}
add_action( 'personal_options_update', 'cyancrm_blog_save_custom_user_fields' );
add_action( 'edit_user_profile_update', 'cyancrm_blog_save_custom_user_fields' );

function cyancrm_blog_comment_form_defaults( $defaults ) {
	$defaults['class_form']          = 'comment-form';
	$defaults['class_submit']        = 'button';
	$defaults['title_reply_before']  = '<h3 class="sidebar-title">';
	$defaults['title_reply_after']   = '</h3>';
	$defaults['comment_notes_before'] = '';
	$defaults['comment_notes_after']  = '';

	return $defaults;
}
add_filter( 'comment_form_defaults', 'cyancrm_blog_comment_form_defaults' );
