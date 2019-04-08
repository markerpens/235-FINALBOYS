//Click on farmin Col
$(".farminCol").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

//Click on killin Col
$(".killinCol").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

//Click on truckin Col
$(".truckinCol").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

//Click on dinin Col
$(".dininCol").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

// STACK OVERFLOW VERTICAL SCROLL BOYS
(function() {
function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.documentElement.scrollLeft -= (delta*40); // Multiplied by 40
    document.body.scrollLeft -= (delta*40); // Multiplied by 40
    //e.preventDefault();
}
if (window.addEventListener) {
    // IE9, Chrome, Safari, Opera
    window.addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
} else {
    // IE 6/7/8
    window.attachEvent("onmousewheel", scrollHorizontally);
}
})();
