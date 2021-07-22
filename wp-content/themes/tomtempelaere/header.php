<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 */
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title( '|', true, 'right' ); ?></title>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> id="body"><!-- body -->

    <div id="page" class="hfeed"><!-- #page -->
        <header>
            <div class="container">
                <div class="logo">
                    <p>T</p>
                </div>
                <nav id="navigation">
                <?php
                    wp_nav_menu(
                    array(
                        'theme_location' => 'main-menu',
                        'menu_id' => 'primary-menu',
                    )
                    );
                ?>
                </nav>
                <!-- <div class="second-menu-btn">
                    <div class="line">
                        <div class="point"></div>
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                    <div class="line">
                        <div class="point"></div>
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                    <div class="line">
                        <div class="point"></div>
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                </div>-->
            </div>
        </header>

        <div id="main" class="page-<?php the_ID() ?>">
    