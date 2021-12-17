let currentlyOpened = null;

document.querySelectorAll(".question-inactive").forEach(question => {
    question.addEventListener("click", event => {
        if (event.target === currentlyOpened) {
            close(event.target);
            currentlyOpened = null;
        } else if (currentlyOpened) {
            close(currentlyOpened);
            open(event.target);
            currentlyOpened = event.target;
        } else {
            open(event.target);
            currentlyOpened = event.target;
        }
    });
});

function close(target) {
    target.nextElementSibling.style.height = 0;
    target.classList.remove("question-active");
    target.classList.add("question-inactive")
}

function open(target) {
    const height = target.nextElementSibling.scrollHeight;
    target.nextElementSibling.style.height = height + "px";
    target.classList.remove("question-inactive");
    target.classList.add("question-active");
}