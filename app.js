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



$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});