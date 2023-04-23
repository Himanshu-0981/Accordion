const sections = document.querySelectorAll("section");
const questionContainer = document.querySelector(".question-container");

sections.forEach((item) => {
    item.addEventListener("click", function () {
        if (item.children[1].classList.contains("active")) {
            item.children[1].classList.remove("active");
            item.childNodes[1].lastChild.previousSibling.innerHTML = '<i class="fa-sharp fa-solid fa-chevron-down"></i>';
        } else {
            item.children[1].classList.add("active");
            item.childNodes[1].lastChild.previousSibling.innerHTML = '<i class="fa-sharp fa-solid fa-chevron-up"></i>';
        }
    });
});
