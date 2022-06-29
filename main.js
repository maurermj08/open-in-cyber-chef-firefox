function encodeForCyberChef(data) {
  return encodeURIComponent(btoa(unescape(encodeURIComponent(data))));
}

openInCyberChef = function(word){
  var query = word.selectionText;
  browser.storage.local.get("my_url", function(items) {
	if (!!items.my_url) {
		browser.tabs.create({url: items.my_url + "#input=" + encodeForCyberChef(query)});
	} else {
		browser.tabs.create({url: "https://gchq.github.io/CyberChef#input=" + encodeForCyberChef(query)});
	}
  });
};

browser.contextMenus.create({
  title: "Open in CyberChef",
  contexts:["selection"],
  onclick: openInCyberChef
});
