function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    my_url: document.querySelector("#my_url").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#my_url").value = result.my_url || "https://gchq.github.io/CyberChef";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("my_url");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);