"use strict";
document.addEventListener("DOMContentLoaded", function () {
  var switchers = document.querySelectorAll(".dark-light-switcher");
  function updateTheme(isDarkMode) {
    switchers.forEach(function (switcher) {
      var darkIcon = switcher.querySelector(".bi-brightness-high ");
      var lightIcon = switcher.querySelector(".bi-moon");
      if (isDarkMode) {
        lightIcon.style.display = "none";
        darkIcon.style.display = "block";
      } else {
        lightIcon.style.display = "block";
        darkIcon.style.display = "none";
      }
    });
    document.documentElement.setAttribute(
      "data-bs-theme",
      isDarkMode ? "dark" : "light"
    );
  }
  var storedTheme =
    localStorage.getItem("theme") ||
    document.documentElement.getAttribute("data-bs-theme") ||
    "dark";
  var isDarkMode = storedTheme === "dark";
  updateTheme(isDarkMode);
  switchers.forEach(function (switcher) {
    switcher.addEventListener("click", function () {
      var currentTheme = localStorage.getItem("theme");
      var isDarkMode = currentTheme === "dark";
      var newTheme = isDarkMode ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      updateTheme(newTheme === "dark");
    });
  });
});
