document.addEventListener("DOMContentLoaded", function () {
  const accordionTitles = document.querySelectorAll(".accordion-section-title");

  accordionTitles.forEach(function (title) {
    title.addEventListener("click", function () {
      const tabId = this.getAttribute("data-target");
      const content = document.querySelector(tabId);
      console.log("click");

      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});
