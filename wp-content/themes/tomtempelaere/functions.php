<?php
    

    // -------------
    // INDISPENSABLE
    // -------------

    // I1 - Constantes de theme
    define('site_name', get_bloginfo('name') );
    define('site_url', site_url() );
    define('theme_name',  get_template() );
    define('theme_url', get_template_directory_uri() );
    define('theme_path',  get_template_directory() );
    define('posts_page_id', get_option('page_for_posts') );
    define('posts_url', get_permalink(posts_page_id).'.html');


    // I2 Appel styles & scripts
	wp_enqueue_style('css', theme_url.'/style.css'); // CSS
    wp_enqueue_style('css-min', theme_url.'/style.min.css'); // CSS mim
    wp_enqueue_script('js', theme_url.'/assets/js/menu.js'); // JS


    // -----
    // Menus
    // -----

    // M1 - Menu principale
    function register_my_menu(){
        register_nav_menu( 'main-menu', 'Menu principal' );
    }
    add_action( 'after_setup_theme', 'register_my_menu' );


?>