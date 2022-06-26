let heading = document.querySelector(".heading").innerHTML;
let char = [...heading];
console.log(char);
let addSpan = () => {
    document.querySelector("h2").innerHTML = "";
    char.map((letter) => {
        let span = document.createElement("span");
        span.innerHTML = `${letter}`;
        document.querySelector(".heading").appendChild(span);
    });
};
addSpan();
