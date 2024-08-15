const buttonsContainer = document.querySelector("#buttons-container");
const mainList = document.querySelectorAll("main>section");
const buttonsList = [];

for (let i = 0; i < mainList.length; i++) {
    let elmt = document.createElement("button");
    buttonsContainer.appendChild(elmt);
}

function mapButtons(buttonsList) {
    for (let i = 0; i < buttonsList.children.length; i++) {
        buttonsList.children[i].addEventListener("click", () => {
            mainList[i].scrollIntoView({ behavior: "smooth" });
        })
    }
}
mapButtons(buttonsContainer)

let r = document.querySelector(":root")

r.style.setProperty('--btn-container-height', `${buttonsContainer.offsetHeight / 2}px`)

const headerHeadingChilds = document.querySelectorAll("header>h2>span");
const colorArray = ["#F00", "#080", "#808", "#FF0", "#00F"];
const fontArray = ["Moderniz"];

function changeHeading() {
    headerHeadingChilds.forEach((e, i) => {
        e.style.color = colorArray[Math.floor(Math.random() * (colorArray.length - 0 + 1) + 0)]
    })
}

setInterval(changeHeading, 500)
