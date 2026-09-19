<?php
/**
 * Search form template.
 *
 * @package cyancrm-blog
 */
?>
<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label class="screen-reader-text" for="cyancrm-search-field"><?php esc_html_e( 'Search for:', 'cyancrm-blog' ); ?></label>
	<div class="search-form__field-wrap">
		<span class="search-form__icon" aria-hidden="true">
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"></circle>
				<path d="M20 20L17 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
			</svg>
		</span>
		<input
			type="search"
			id="cyancrm-search-field"
			class="search-field"
			placeholder="<?php esc_attr_e( 'Search articles...', 'cyancrm-blog' ); ?>"
			value="<?php echo esc_attr( get_search_query() ); ?>"
			name="s"
		/>
		<button type="submit" class="search-submit"><?php esc_html_e( 'Search', 'cyancrm-blog' ); ?></button>
	</div>
</form>
