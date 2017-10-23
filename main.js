openInCyberChef = function(word){
  var query = word.selectionText;
	browser.tabs.create({url: "https://gchq.github.io/CyberChef?input=" + encodeURIComponent(btoa(query))});
};

browser.contextMenus.create({
  id: "open-in-cyberchef",
  title: "Open in CyberChef",
  contexts:["selection"],
  onclick: openInCyberChef
});