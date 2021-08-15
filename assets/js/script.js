if (!localStorage.theme) localStorage.theme = "light"
document.body.className = localStorage.theme

themes.onclick = () => {
    document.body.classList.toggle("dark")
    localStorage.theme = document.body.className || "light"
}

$(document).ready(function() {
    $( ".arrow" ).click( function() {
        $("#image").toggleClass('flip');
    });
});