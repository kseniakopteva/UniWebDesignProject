function change_font(increase, decrease) {
    var html = document.getElementsByTagName("html")[0];
    var style = window.getComputedStyle(html, null).getPropertyValue("font-size");
    var fontSize = parseFloat(style);
    var newSize = fontSize + increase - decrease;
    html.style.fontSize = newSize + "px";

    localStorage.setItem("font-size", newSize);
}

// 22px - max, 12px - min

function bigger_font() {
    if (localStorage.getItem("font-size") <= 20 || localStorage.getItem("font-size") === null) {
        change_font(2, 0);
    }
    if (localStorage.getItem("font-size") == 22) {
        document.getElementById("font-btn-larger").innerHTML = "Lielāks <br /> Teksts <br /> (max)";
    }
    if (localStorage.getItem("font-size") > 12) {
        document.getElementById("font-btn-smaller").innerHTML = "Mazāks <br /> Teksts";
    }
}

function smaller_font() {
    if (localStorage.getItem("font-size") >= 14 || localStorage.getItem("font-size") === null) {
        change_font(0, 2);
    }
    if (localStorage.getItem("font-size") == 12) {
        document.getElementById("font-btn-smaller").innerHTML = "Mazāks <br /> Teksts <br /> (min)";
    }
    if (localStorage.getItem("font-size") < 22) {
        document.getElementById("font-btn-larger").innerHTML = "Lielāks <br /> Teksts";
    }
}

function default_font() {
    document.getElementById("font-btn-larger").innerHTML = "Lielāks <br /> Teksts";
    document.getElementById("font-btn-smaller").innerHTML = "Mazāks <br /> Teksts";
    var html = document.getElementsByTagName("html")[0];
    html.style.fontSize = "16px";
    localStorage.removeItem("font-size");
}

function font_set() {
    var previouslySetFontSize = localStorage.getItem("font-size");
    if (previouslySetFontSize === null) {
        document.getElementsByTagName("html")[0].style.fontSize = "16px";
    } else {
        document.getElementsByTagName("html")[0].style.fontSize = previouslySetFontSize + "px";
    }
}

font_set();
