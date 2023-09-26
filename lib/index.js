class inputValue {
    constructor(inputId, h1Id, element) {
        this.inputId = inputId;
        this.h1Id = h1Id;
        this.element = element;
    }
}

let array = [0, 0, 0];

let arrayOfValues = [
    new inputValue("first", "firstH1", 0),
    new inputValue("second", "secondH1", 1),
    new inputValue("third", "thirdH1", 2),
    new inputValue("firstNumberInput", null, 0),
    new inputValue("secondNumberInput", null, 1),
    new inputValue("thirdNumberInput", null, 2)
];

function updateColors() {

    const btn = document.getElementById("btn");
    const mainDiv = document.querySelector(".secondContainer");
    document.body.style.backgroundColor = `rgb(${array[0]}, ${array[1]}, ${array[2]})`;
    const complementaryColor = `rgb(${256 - array[0]}, ${256 - array[1]}, ${256 - array[2]})`;
    document.body.style.color = complementaryColor;
    btn.style.backgroundColor = complementaryColor;
    btn.style.color = `rgb(${array[0]}, ${array[1]}, ${array[2]})`;
    mainDiv.querySelectorAll("div").forEach(div => {
        div.style.backgroundColor = complementaryColor;
    });
}

arrayOfValues.forEach(inputValueItem => {
    const inputElement = document.getElementById(inputValueItem.inputId);
    inputElement.addEventListener("input", function() {
        if (inputValueItem.h1Id) {
            const h1Element = document.getElementById(inputValueItem.h1Id);
            h1Element.innerHTML = this.value;
        }
        if (!inputValueItem.h1Id && (this.value > 256 || this.value < 0)) {
            this.value = 0;
            alert("please pick a number from 0 to 256");
        }
        array[inputValueItem.element] = parseInt(this.value);
        // correctingValues(inputValueItem);
        updateColors();
    });
});

document.getElementById("btn").addEventListener("click", function() {
    const mainDiv = document.querySelector(".secondContainer");
    let newDiv = document.createElement("div");
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.backgroundColor = `rgb(${256 - array[0]}, ${256 - array[1]}, ${256 - array[2]})`;
    newDiv.style.margin = "50px";
    newDiv.style.borderRadius = "10px";
    mainDiv.appendChild(newDiv);
});

document.getElementById("fontRange").addEventListener("input", function() {
    const paragraph = document.getElementById("paragraph");
    const size = document.getElementById("size");
    paragraph.style.fontSize = `${this.value / 100}rem`;
    size.innerHTML = `${this.value / 100}`;
});
