const messages = [
    "Are you sure?",
    "Please Ame",
    "Please I’ll get you Nerd Clusters :(",
    "Are you really sure :( I’ll give you Xtra Cheddar Goldfish",
    "CMON AME PLEASEEEE!!!",
    "PRETTY PLEASEEE AMEEEE!!!",
    "I’m walking to your house right now.",
    "I’m actually driving to your house right now.",
    "Ame please."
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}