const button = document.getElementById("openButton");
const story = document.getElementById("story");

button.addEventListener("click", function () {

    story.classList.remove("hidden");

    story.scrollIntoView({
        behavior: "smooth"
    });

});
