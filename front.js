
function hidenshow(show) {
    $("#" + show).slideToggle("slow");
    document.getElementById('contact').style.display = 'none';
    document.getElementById('project').style.display = 'none';
    document.getElementById('skill').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('home').style.display = 'none';
    $("#" + show).slideToggle("slow");

}

function showData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    //sorting data.

    var name = localStorage.setItem("name", name);
    var email = localStorage.setItem("email", email);
    var message = localStorage.setItem("message", message);

}

function validation() {
    var name = document.getElementById('name').value;
    if (name == "") {
        document.getElementById('username').innerHTML = "*Enter your name";
        return false;
    }
    var email = document.getElementById('email').value;
    if (email == "") {
        document.getElementById('useremail').innerHTML = "*Enter your email";
        return false;
    }
    var message = document.getElementById('message').value;
    if (message == "") {
        document.getElementById('usermessage').innerHTML = "*Enter your message";
        return false;
    }
}



