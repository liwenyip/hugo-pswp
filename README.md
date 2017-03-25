# hugo-pswp
Automagical image gallery in Hugo with PhotoSwipe and jQuery

Shortcodes, js, and css that enables PhotoSwipe to work with your existing Hugo `figure` shortcodes.

Full documentation and demo at https://www.liwen.id.au/photoswipe/

If you're looking for PhotoSwipe + pretty CSS image galleries on-page, have a look at https://github.com/liwenyip/hugo-easy-gallery/

## Features

- Loads all of the `<figure>` elements in your post, regardless of where in your post they appear, into a lightbox/carousel style image gallery
- Does not require you to [pre-define the image sizes](http://photoswipe.com/documentation/faq.html#image-size)
- Works with any of your existing `<figure>` elements/shortcodes
- Includes a custom `figure` shortcode that overrides Hugo's built-in `figure` shortcode and allows you to:
  - specify a suffix for thumbnail files
  - pre-define the image size if you want to avoid pre-loading images

## Installation
Put files in following places:

- /layouts/shortcodes/figure.html
- /layouts/shortcodes/pswp-init.html
- /layouts/shortcodes/gallery.html
- /static/js/pswp-init.js
- /static/css/pswp-gallery.js

## Usage

- Call {{< pswp-init >}} **once** anywhere you want on each page where you want to use PhotoSwipe
- `{{< figure src="image.jpg" >}}` will use `image.jpg` for thumbnail and lightbox
- `{{< figure src="thumb.jpg" link="image.jpg" >}}` will use `thumb.jpg` for thumbnail and `image.jpg` for lightbox
- `{{< figure thumb="-small" link="image.jpg" >}}` will use `image-small.jpg` for thumbnail and `image.jpg` for lightbox
- `{{< figure thumb="-small" link="image.jpg" size="1024x768">}}` will avoid needing to pre-load `image.jpg` to determine its size (optional)
- All the [features/parameters](https://gohugo.io/extras/shortcodes) of Hugo's built-in `figure` shortcode work as normal, i.e. src, link, title, caption, class, attr (attribution), attrlink, alt
- `{{< figure src="image.jpg" class="pswp-ignore" >}}` will be ignored by PhotoSwipe (if that's what you really want)
- enclose your figures in `{{< gallery title="title of your gallery (optional)" >}}` and `{{< gallery />}}` to arrange your thumbnails inside a box




