const navSlide = () => {
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");


    menu.addEventListener("click",()=>{
        //toggle nav
        nav.classList.toggle("nav-active");

        //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = "";
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });
        //burger animation
        menu.classList.toggle("toggle");
    });


}

navSlide();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onClick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onClick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}