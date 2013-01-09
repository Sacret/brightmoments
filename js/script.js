/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
  $().ready(function(){
    console.log(1);
    $('.views-slideshow-pager-field-item').first().before('<div class="before-widget"></div>');
    $('.views-slideshow-pager-field-item').last().after('<div class="after-widget"></div>');
  });
})(jQuery, Drupal, this, this.document);
