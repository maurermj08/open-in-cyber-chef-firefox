openInCyberChef = function(word){
  var query = word.selectionText;
  browser.storage.local.get("my_url", function(items) {
	if (!!items.my_url) {
		browser.tabs.create({url: items.my_url + "?input=" + encodeURIComponent(btoa(query))});
	} else {
		browser.tabs.create({url: "https://gchq.github.io/CyberChef?input=" + encodeURIComponent(btoa(query))});
	}
  });
};

browser.contextMenus.create({
  title: "Open in CyberChef",
  contexts:["selection"],
  onclick: openInCyberChef
});
