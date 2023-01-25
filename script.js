function displayName() {
    let name = document.getElementById("name").value;
    let greeting = document.getElementById("greeting");
    greeting.innerHTML = "Hello, " + name + "!";
}