import "./style.css";

let isExpanded = false;
const seeMoreBtn = document.querySelector("#see-more");
const expandedContent = document.querySelector("#danh-dan");
seeMoreBtn.addEventListener("click", (e) => {
  e.target.innerText = isExpanded ? "See more" : "See less";
  isExpanded
    ? expandedContent.classList.add("contracted")
    : expandedContent.classList.remove("contracted");
  isExpanded = !isExpanded;
});
