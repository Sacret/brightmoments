/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

jQuery(document).ready(function() {

	jQuery(".goBack").click(function() {
		moveBack("#block-views-item-collection-images-block .img-scroll .views-row", 
			"#block-views-item-collection-images-block .img-scroll");
	});  
	
	jQuery(".goNext").click(function() {
		moveNext("#block-views-item-collection-images-block .img-scroll .views-row",
			"#block-views-item-collection-images-block .img-scroll");
	});
	
	jQuery(".goBack2").click(function() {
		moveBack("#block-views-item-images-block .field-content img",
			"#block-views-item-images-block .field-content");
	});
	
	jQuery(".goNext2").click(function() {
		moveNext("#block-views-item-images-block .field-content img",
			"#block-views-item-images-block .field-content");
	});

	jQuery(".goBack3").click(function() {
		var rel = jQuery(this).attr("rel");
		moveBack("#block-collective-page-followers-followers-by-collections-items .img-scroll" + rel + " .row" + rel,
			"#block-collective-page-followers-followers-by-collections-items .img-scroll" + rel);
	});
	
	jQuery(".goNext3").click(function() {
		var rel = jQuery(this).attr("rel");
		moveNext("#block-collective-page-followers-followers-by-collections-items .img-scroll" + rel + " .row" + rel,
			"#block-collective-page-followers-followers-by-collections-items .img-scroll" + rel);
	});

	jQuery(".goNext4").click(function() {
		moveNext(".view-collection-items .img-scroll .views-row",
			".view-collection-items .img-scroll");
	});

	function moveBack(string1, string2) {		 
		jQuery(string1).eq(-1).clone().prependTo(string2);
		jQuery(string1).eq(-1).remove(); 
	}

	function moveNext(string1, string2) {
		jQuery(string1).eq(0).clone().appendTo(string2);
		jQuery(string1).eq(0).remove();			
	}

	jQuery('.view-recent-collections > .view-content').masonry({
    itemSelector : '.view-recent-collections > .view-content > .views-row',
    columnWidth : 25
  });
  
	jQuery('.view-recent-collections .views-row').mouseover(function() {
		jQuery(this).find('.div-following').css('display', 'block');
		jQuery(this).find('.div-unfollowing .img-following').css('display', 'none');
		jQuery(this).find('.div-unfollowing a').css('display', 'block');
	});

	jQuery('.view-recent-collections .views-row').mouseout(function() {
		jQuery(this).find('.div-following').css('display', 'none');
		jQuery(this).find('.div-unfollowing .img-following').css('display', 'block');
		jQuery(this).find('.div-unfollowing a').css('display', 'none');
	});

	jQuery('.view-collector-collections-block .views-row').mouseover(function() {
		jQuery(this).find('.div-following').css('display', 'block');
		jQuery(this).find('.div-unfollowing .div-sign-following').css('display', 'none');
		jQuery(this).find('.div-unfollowing a').css('display', 'block');
	});

	jQuery('.view-collector-collections-block .views-row').mouseout(function() {
		jQuery(this).find('.div-following').css('display', 'none');
		jQuery(this).find('.div-unfollowing .div-sign-following').css('display', 'block');
		jQuery(this).find('.div-unfollowing a').css('display', 'none');
	});
	
});