<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'tomtempelaere' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'F@UMkw?Tjj$gA9cM@<6)x *N=f|xWKLUnO}2wY@5~!=@i6v~P~9TdO@Jf5zRb{Mv' );
define( 'SECURE_AUTH_KEY',  'I3{>dNt$.qGiF)`lc&UPCIK9qOzT.^DQx{wwZ(XaF.=]]8Sz#*X|;Db~5i0k%}wF' );
define( 'LOGGED_IN_KEY',    '1VQ<[eSB()][k`eIZ:|jMoWVyD.}D.}R&u(WCUl;EqvuF  #!U[%;Oit|BO6.QaL' );
define( 'NONCE_KEY',        '~mSH9Dm.SeDv+KyM:.>+%p2)`1Lz5:&*R-W9CoT9~HT+P|BtFujj{7p|ina~|AY;' );
define( 'AUTH_SALT',        'H`xp#4wybSGM@ap^xK9<d|[) 9Jsf$=Wh+8Aa%drQ*g>^6G;@C_z G`,QQz-]*91' );
define( 'SECURE_AUTH_SALT', 'uX{;l&AsHc`_d2H`LagtZ@Z17cO{Ui|QJ Oj7M/tM2G12y2D}?LZX^*n?cRpb4vL' );
define( 'LOGGED_IN_SALT',   '_4W6R;p?sHa(]ol|C8f(HZfJr+`,--wPsgh[%7-N/wUph^Iqwizc7X<:.Jdf_:lb' );
define( 'NONCE_SALT',       '{1k~MZ=Ir,$D0CQ7IY16g4[O*X fScJ)d)BVTum+X97Vo|#k d?:VzOhF`S2.rLB' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
