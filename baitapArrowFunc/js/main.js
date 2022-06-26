const colorList = [
    "pallet",
    "viridian",
    "pewter",
    "cerulean",
    "vermillion",
    "lavender",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar",
];

let loadButton = () => {
    let buttonList = "";
    colorList.map((color, index) => {
        // if (index == 0) {
        //     buttonList += `
        //     <button class="color-button ${color} active"
        //     onclick="changeColor('${color}')"></button>
        // `;
        // } else {
        buttonList += `
                <button class="color-button ${color}" onclick="changeColor('${color}')"></button>
            `;
        // }
    });
    document.querySelector("#colorContainer").innerHTML = buttonList;
};

loadButton();

let changeColor = (color, index) => {
    document.querySelector("#house").className = `house ${color}`;
    document
        .querySelector(`#colorContainer .cinnabar `)
        .classList.remove("active");
    document
        .querySelector(`#colorContainer .fuschia `)
        .classList.remove("active");
    document
        .querySelector(`#colorContainer .saffron `)
        .classList.remove("active");
    document
        .querySelector(`#colorContainer .celadon `)
        .classList.remove("active");
    document
        .querySelector(`#colorContainer .lavender `)
        .classList.remove("active");
    document
        .querySelector(`#colorContainer .vermillion `)
        .classList.remove("active");
    document
        .querySelector(`#colorContainer .cerulean `)
        .classList.remove("active");
    document
        .querySelector(`#colorContainer .pewter `)
        .classList.remove("active");
    document
        .querySelector(`#colorContainer .viridian `)
        .classList.remove("active");
    document
        .querySelector(`#colorContainer .pallet `)
        .classList.remove("active");
    document
        .querySelector(`#colorContainer .${color} `)
        .classList.add("active");
};
