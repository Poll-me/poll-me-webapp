/**
 * Configuration for head elements added during the creation of index.html.
 *
 * All href attributes are added the publicPath (if exists) by default.
 * You can explicitly hint to prefix a publicPath by setting a boolean value to a key that has
 * the same name as the attribute you want to operate on, but prefix with =
 *
 * Example:
 * { name: 'msapplication-TileImage', content: '/assets/img/favicon/ms-icon-144x144.png', '=content': true },
 * Will prefix the publicPath to content.
 *
 * { rel: 'apple-touch-icon', sizes: '57x57', href: '/assets/img/favicon/apple-icon-57x57.png', '=href': false },
 * Will not prefix the publicPath on href (href attributes are added by default
 *
 */
module.exports = {
  link: [
    /** <link> tags for 'apple-touch-icon' (AKA Web Clips). **/
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/img/favicon/apple-touch-icon.png' },

    /** <link> tags for safari web app icons **/
    { rel: 'mask-icon', color: '#d8403f', href: '/assets/img/favicon/safari-pinned-tab.svg' },

    /** <link> tags for android web app icons **/
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/assets/img/favicon/android-chrome-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/assets/img/favicon/android-chrome-512x512.png' },

    /** <link> tags for favicons **/
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/img/favicon/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/img/favicon/favicon-16x16.png' },
    { rel: 'shortcut icon', href: '/assets/favicon.ico' },

    /** <link> tags for a Web App Manifest **/
    { rel: 'manifest', href: '/assets/manifest.json' }
  ],
  meta: [
    { name: 'msapplication-TileColor', content: '#b91d47' },
    { name: 'msapplication-TileImage', content: '/assets/img/favicon/mstile-144x144.png', '=content': true },
    { name: 'msapplication-config', content: '/browserconfig.xml' },
    { name: 'theme-color', content: '#d8403f' }
  ]
};
