/*
Put this file in /static/js/pswp-init.js
*/
$( document ).ready(function() {
	var items = []; // array of slide objects that will be passed to PhotoSwipe()
	// for every figure element on the page:
	$('figure').each( function() {
		if ($(this).attr('class') == 'pswp-ignore') return true; // ignore any figures where class="pswp-ignore"
		// get properties from child a/img/figcaption elements,
		var $figure = $(this),
			$a 		= $figure.find('a'),
			$src	= $a.attr('href'),
			$title  = $figure.find('figcaption').html(),
			$msrc	= $figure.find('img').attr('src');
		// if data-size on <a> tag is set, read it and create an item
		if ($a.data('size')) {
			var $size 	= $a.data('size').split('x');
			var item = {
				src		: $src,
				w		: $size[0],
				h 		: $size[1],
				title 	: $title,
				msrc	: $msrc
			};
		// if not, set temp default size then load the image to check actual size
		} else {
			var item = {
				src		: $src,
				w		: 800, // temp default size
				h 		: 600, // temp default size
				title 	: $title,
				msrc	: $msrc
			};
			// load the image to check its dimensions
			// update the item as soon as w and h are known (check every 30ms)
			var img = new Image(); 
			img.src = $src;
			var wait = setInterval(function() {
				var w = img.naturalWidth,
					h = img.naturalHeight;
				if (w && h) {
					clearInterval(wait);
					item.w = w;
					item.h = h;
				}
			}, 30);
	   	}
		// Save the index of this image then add it to the array
		var index = items.length;
		items.push(item);
		// Event handler for click on a figure
		$figure.on('click', function(event) {
			event.preventDefault(); // prevent the normal behaviour i.e. load the <a> hyperlink
			// Get the PSWP element and initialise it with the desired options
			var $pswp = $('.pswp')[0];
			var options = {
				index: index, 
				bgOpacity: 0.8,
				showHideOpacity: true
			}
			new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options).init();
		});	
	});
});