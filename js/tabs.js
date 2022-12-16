let tabLinks = document.querySelectorAll(".tablinks");
let tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function (el) {
    el.addEventListener("click", openTabs);
});

function openTabs(el) {
    let btnTarget = el.currentTarget;
    let page = btnTarget.dataset.page;

    tabContent.forEach(function (el) {
        el.classList.remove("tabcontent--active");
    });

    tabLinks.forEach(function (el) {
        el.classList.remove("tablinks--active");
    });

    document.querySelector("#" + page).classList.add("tabcontent--active");
    btnTarget.classList.add("tablinks--active");
}

