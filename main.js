let links = document.querySelectorAll(".links div");
links.forEach((link) => {
 if (link.dataset.page == window.location.pathname.slice(1)) {
  link.classList.add("active");
 } else {
  link.classList.remove("active");
 }
 link.addEventListener("click", () => {
  link.classList.add("animate");
  setTimeout(() => {
   window.location.href = link.dataset.page;
   window.location.reload;
  }, 2000);
 });
});
