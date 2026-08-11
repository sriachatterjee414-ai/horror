const startButton =
    document.getElementById("startButton");

const transition =
    document.getElementById("transition");


startButton.addEventListener("click", () => {

    transition.classList.add("active");

    setTimeout(() => {

        window.location.href = "chapter1.html";

    }, 700);

});
