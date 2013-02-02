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
  $().ready(function() {

    $('.views-slideshow-pager-field-item').first().before('<div class="before-widget"></div>');
    $('.views-slideshow-pager-field-item').last().after('<div class="after-widget"></div>');
    $('.views-slideshow-pager-field-item').wrapAll('<div class="slider-container"><div class="slider-scroll"></div></div>');
    var count = $('.view-id-Gallery .views-slideshow-pager-fields .views-field-field-main-photo img').length;
    if (count > 7) {
      $('.view-id-Gallery .views-slideshow-controls-bottom .slider-container .slider-scroll').width(count * 125);
      $('.view-id-Gallery .views-slideshow-controls-text').css('top', 0);
      $('.view-id-Gallery .views-slideshow-controls-text').css('background', '#f8f8f5');
    }

    // prev
    $('.view-display-id-page .before-widget').click(function() {
      Drupal.viewsSlideshow.action({ "action": 'previousSlide', "slideshowID": 'Gallery-page' });     
      return false;
    });
    $('.view-display-id-page_1 .before-widget').click(function() {
      Drupal.viewsSlideshow.action({ "action": 'previousSlide', "slideshowID": 'Gallery-page_1' });     
      return false;
    });
   
    //next
     $('.view-display-id-page .after-widget').click(function() {
      Drupal.viewsSlideshow.action({ "action": 'nextSlide', "slideshowID": 'Gallery-page' });     
      return false;
    });
    $('.view-display-id-page_1 .after-widget').click(function() {
      Drupal.viewsSlideshow.action({ "action": 'nextSlide', "slideshowID": 'Gallery-page_1' });     
      return false;
    });
   
    $('.view-display-id-page_1 .views-slideshow-cycle-main-frame-row img').click(function() {   
      Drupal.viewsSlideshow.action({ "action": 'nextSlide', "slideshowID": 'Gallery-page_1' });     
      return false;
    });
    $('.view-display-id-page .views-slideshow-cycle-main-frame-row img').click(function() {
      Drupal.viewsSlideshow.action({ "action": 'nextSlide', "slideshowID": 'Gallery-page' });       
      return false;
    });

    $('#block-menu-block-1 li.menu-mlid-271 > a').click(function(e){
      e.preventDefault();
    });   
    
  });

})(jQuery, Drupal, this, this.document);
