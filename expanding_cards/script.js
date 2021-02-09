const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActivClasses();

    panel.classList.add("active");
  });
});

function removeActivClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
