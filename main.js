function encodeForCyberChef(data) {
  return encodeURIComponent(btoa(unescape(encodeURIComponent(data))));
}

openInCyberChef = function(word){
  browser.storage.local.get("my_url", function(items) {
	if (!!items.my_url) {
		browser.tabs.create({url: items.my_url + "#input=" + encodeForCyberChef(word)});
	} else {
		browser.tabs.create({url: "https://gchq.github.io/CyberChef#input=" + encodeForCyberChef(word)});
	}
  });
};

chrome.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    title: "Open in CyberChef",
    id: "open-in-cyberchef",
    contexts:["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    openInCyberChef(info.selectionText);
});
