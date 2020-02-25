const button = document.querySelector("#click-button");
const number = document.querySelector("#number");
const message = document.querySelector("#message");

let counter = number.innerText;

// safety check
function addOneToNumber() {
    counter = parseInt(counter, 10);
    counter = counter + 1;
    number.innerText = counter;
    updateMessage();
}


function updateMessage() {

    if (counter >= 10) {

        message.innerText = "Way to go"
    }


    if (counter >= 20) {
        message.innerText = "Wooooops!"
    }


    if (counter >= 30) {
        message.innerText = "Fighting!"
    }


    if (counter >= 40) {
        message.innerText = "You are so boring..."
    }

    if (counter >= 50) {
        message.innerText = "Stop that"
    }



}


button.addEventListener("click", addOneToNumber)
