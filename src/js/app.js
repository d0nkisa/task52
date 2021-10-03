import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready

    const button = document.querySelector(".button");
    button.addEventListener("click", () => {
        alert("💣");
    });

    var body = document.getElementsByTagName("BODY")[0];
    body.addEventListener("click", () => {
        for (let index = 0; index < 5; index++) {
            addElement();
        }
    });

    let addElement = () => {
        const template = document.createElement('div');
        template.innerHTML =
            `<div class="message">
        <p>Test text for the card.</p>
      </div>`;

        document.body.appendChild(template);
    }
});