var dropdown = document.getElementsByClassName("dropdown_content")[0]
var seta = document.getElementsByClassName("fa-caret-up")[0]
var bttdropdown = document.getElementsByClassName("btt_dropdown")[0]
var menu = document.getElementsByClassName("menu")[0]


function show_menu() {
    let menu = document.getElementById("my_menu")
    if (menu.className == "menu") {
        menu.className += " responsive"
    } else {
        menu.className = "menu"
    }
}

function mouseenter() {
    let w = window.innerWidth
    if (w > 800 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
        show_dropdown()
    }
}

function show_dropdown() {
    dropdown.style.display = "block"
    seta.style.transform = "rotate(180deg)"
    seta.style.transition = "0.2s"
    bttdropdown.style.color = "wheat"
}

function hide_dropdown() {
    dropdown.style.display = "none"
    seta.style.transform = "rotate(360deg)"
    bttdropdown.style.color = "white"
}

function show_hide() {
    if (dropdown.style.display == "block"
    ) {
        hide_dropdown()
    }
    else {
        show_dropdown()
    }
}