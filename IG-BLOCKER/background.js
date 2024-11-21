chrome.webRequest.onBeforeRequest.addListener(
    function () {
      return { redirectUrl: "file:///C:/Users/divya/OneDrive/Desktop/IG-BLOCKER/index.html" };
    },
    { urls: ["*://www.instagram.com/*"] },
    ["blocking"]
  );
  