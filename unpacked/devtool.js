//console.log('Hello from -> Devtool');
chrome.devtools.panels.create(
	"devia.catfish.snapshot",
	"icon.gif",
	"content.html",
	function(panel) { 
		console.log("Content is loaded to panel"); 
	}
);