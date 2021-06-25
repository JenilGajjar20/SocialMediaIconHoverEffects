let list = document.querySelectorAll(".social__icons li");
let bgColor = document.querySelector(".social__media");

list.forEach((element) => {
  element.addEventListener("mouseenter", (event) => {
    let color = event.target.getAttribute("data-color");
    bgColor.style.backgroundColor = color;
  });

  element.addEventListener("mouseleave", () => {
    bgColor.style.backgroundColor = "#fff";
  });
});