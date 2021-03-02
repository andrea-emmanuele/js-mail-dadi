let overlay = document.getElementById("overlay");
let email = document.getElementById("email-container");
let dadi = document.getElementById("dadi-container");

function showOverlay (id) {
    overlay.style.display = "flex";

    if (id == 1)
        email.style.display = "flex"
    else
        dadi.style.display = "flex";
}

function closeContainer() {
    overlay.style.display = "none";
    email.style.display = "none";
    dadi.style.display = "none";
}


