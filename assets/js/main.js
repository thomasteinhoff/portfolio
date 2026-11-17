(function () {
  "use strict";

  var doc = document;
  var menu = doc.querySelector(".menu");
  var menuLinks = menu ? menu.querySelectorAll("a") : [];

  if (menu) {
    var summary = menu.querySelector("summary");

    var syncBody = function () {
      doc.body.classList.toggle("menu-open", menu.open);
    };

    menu.addEventListener("toggle", syncBody);

    menuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        menu.open = false;
        syncBody();
      });
    });

    doc.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menu.open) {
        menu.open = false;
        syncBody();
        if (summary) summary.focus();
      }
    });

    var desktop = window.matchMedia("(min-width: 901px)");
    var handleBreakpoint = function (event) {
      if (event.matches && menu.open) {
        menu.open = false;
        syncBody();
      }
    };

    if (desktop.addEventListener) {
      desktop.addEventListener("change", handleBreakpoint);
    } else if (desktop.addListener) {
      desktop.addListener(handleBreakpoint);
    }
  }

  var year = new Date().getFullYear();
  var yearNodes = doc.querySelectorAll("[data-year]");
  for (var i = 0; i < yearNodes.length; i += 1) {
    yearNodes[i].textContent = String(year);
  }
})();
