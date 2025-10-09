// Has to be in the head tag, otherwise a flicker effect will occur.
// Theme is locked to light mode - dark mode functionality removed

let initLightMode = () => {
  // Always use light theme
  const theme = "light";
  
  // Set data-theme attribute (though light is the default in CSS)
  document.documentElement.setAttribute("data-theme", theme);

  // Ensure tables don't have dark mode class
  let tables = document.getElementsByTagName("table");
  for (let i = 0; i < tables.length; i++) {
    tables[i].classList.remove("table-dark");
  }

  // Set jupyter notebooks to light theme
  let jupyterNotebooks = document.getElementsByClassName("jupyter-notebook-iframe-container");
  for (let i = 0; i < jupyterNotebooks.length; i++) {
    let bodyElement = jupyterNotebooks[i].getElementsByTagName("iframe")[0].contentWindow.document.body;
    bodyElement.setAttribute("data-jp-theme-light", "true");
    bodyElement.setAttribute("data-jp-theme-name", "JupyterLab Light");
  }

  // Store theme preference
  localStorage.setItem("theme", theme);

  // Updates the background of medium-zoom overlay
  if (typeof medium_zoom !== "undefined") {
    medium_zoom.update({
      background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for transparency
    });
  }

  // Set Giscus to light theme
  const giscusIframe = document.querySelector("iframe.giscus-frame");
  if (giscusIframe) {
    giscusIframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme: theme } } },
      "https://giscus.app"
    );
  }

  // Set Mermaid to light theme (if present)
  if (typeof mermaid !== "undefined") {
    mermaid.initialize({ theme: "default" });
    window.mermaid.init(undefined, document.querySelectorAll(".mermaid"));
  }
};

// Initialize light mode immediately
initLightMode();
