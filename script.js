var urls = [
        "article1.html",
		"article2.html",
		"article3.html"
    ];

function randompage() {
    var url = urls[Math.floor(Math.random()*urls.length)];
    window.location = url;
}

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}