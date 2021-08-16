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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}