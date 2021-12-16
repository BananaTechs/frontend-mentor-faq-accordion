let currentlyOpened = null;

document.querySelectorAll(".question").forEach(question => {
    question.addEventListener("click", event => {
        if (event.target === currentlyOpened) {
            close(event.target);
            currentlyOpened = null;
        } else if (!currentlyOpened) {
            open(event.target);
            currentlyOpened = event.target;
        } else {
            close(currentlyOpened);
            open(event.target);
            currentlyOpened = event.target;
        }
    });
});

function close(target) {
    target.nextElementSibling.style.height = 0;
    target.classList.remove("question-active");
    target.style.color = "hsl(237, 12%, 33%)";
    target.style.fontWeight = 400;
    console.log(target.nextElementSibling);
    console.log("closed");
}

function open(target) {
    target.nextElementSibling.style.height = "auto";
    target.classList.add("question-active");
    target.style.color = "hsl(238, 29%, 16%)";
    target.style.fontWeight = 700;
    console.log("opened");
}