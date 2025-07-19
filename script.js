const accContent = document.querySelectorAll(".accordion-content");

accContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");
    let des = item.querySelector(".des");
    if (item.classList.contains("open")) {
      des.style.height = `${des.scrollHeight}px`;
      item.querySelector("i").classList.replace("fa-plus", "fa-minus");
    } else {
      des.style.height = "0px";
      item.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
    removeOpen(index);
  });
});

function removeOpen(index1) {
  accContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let des = item2.querySelector(".des");
    des.style.height = "0px";

      item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
  });
}
