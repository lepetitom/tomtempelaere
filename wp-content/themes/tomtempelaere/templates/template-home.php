<?php
/**
* Template Name: Template Accueil
*/

get_header(); ?>

<div class="page-template page-accueil page-<?php the_ID() ?>" id="page-template" data-page="accueil">

    <div class="container">
        <?php include theme_path.'/components/_simple-table.php';?>
        <div class="homepres">
            <div class="bigtitle">
                <h1>Créative</h1>
            </div>
            <div class="secondbigtitle">
                <h1>&lt;dev&gt;</h1>
            </div>
            <div class="introduction">
                <div class="col-3 pos-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolor incidunt fuga officiis beatae dicta assumenda, aperiam magni dolore repudiandae culpa quam cum veniam doloremque quaerat id non? Veniam, veritatis.</p>
                </div>
            </div>
            <?php include theme_path.'/components/_scroll-point.php';?>
        </div>

        <?php include theme_path.'/components/_cards.php';?>
        
    </div>

</div>

<?php get_footer(); ?>