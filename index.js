var hamburgerBtn = document.querySelector('.hamburger-btn');
var menu = document.querySelector('.hamburger-menu');

function openMenu() {
    menu.classList.toggle("show-menu");
    hamburgerBtn.setAttribute("aria-expanded", true);
}

function closeMenu() {
    menu.classList.remove("show-menu");
    hamburgerBtn.setAttribute("aria-expanded", false);
    hamburgerBtn.focus();
}

hamburgerBtn.onclick = function (e) {
    if (!menu.classList.contains("show-menu")) {
        openMenu();
    } else {
        closeMenu();
    }
}

document.body.onclick = function (e) {
    if (!menu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        closeMenu();
    }
}

document.onkeyup = function (e) {
    if (e.key === 'Escape') {
        closeMenu();
    }
}




