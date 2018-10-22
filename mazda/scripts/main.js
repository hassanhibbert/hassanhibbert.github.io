var pswpElement = document.querySelectorAll('.pswp')[0];
var numberOfImages = 27;
var items = [];

// build items array
for (var i = 0; i < numberOfImages; i++) {
  (function (count) {
    items.push({
      src: 'images/' + (count + 1) + '.jpg',
      w: 640,
      h: 480
    })
  }(i));
}

// define options (if needed)
var options = {
  // optionName: 'option value'
  // for example:
  index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();
