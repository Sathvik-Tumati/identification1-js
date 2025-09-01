const button = document.getElementByID("btn");
const message = document.getElementbyId("message");

button.addEventlistener("onclick", function() {
    message.innertext = "Button Clicked!";
});