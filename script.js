function displayName() {
    let name = document.getElementById("name").value;
    let greeting = document.getElementById("greeting");
    greeting.innerHTML = "Hello, " + name + "!";
}

$(document).ready(function() {
    $('.circle').on('click', function() {
        $(this).hide();
        setTimeout(function() {
        $(this).show();
        }, 5000);
    });
});