// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var textMessage = document.getElementById("subject");

var textEmail = document.getElementById("email");

// When the user clicks on the button, open the modal
btn.onclick = function() {
    if (textEmail.value==="" || textMessage.value==="") {
        alert("Please fill out the form.");
    }
    else {
        modal.style.display = "block";
        textMessage.value = "";
        textEmail.value = "";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}