// const keyElem = document.querySelector(".key");
// const locationElem = document.querySelector(".location");
// const codeElem = document.querySelector(".code");
// const whichElem = document.querySelector(".which");
// const keyCodeTitle = document.querySelector(".keycode-title");
// const keyCodeElem = document.querySelector(".keycode");

// document.body.addEventListener("keydown", function (event) {
//     event.preventDefault();

//     // document.body.className = "key-pressed";
//     document.body.classList.add("key-pressed");

//     keyElem.innerHTML = event.key;
//     locationElem.innerHTML = event.location;
//     codeElem.innerHTML = event.code;
//     whichElem.innerHTML = event.which;
//     keyCodeTitle.innerHTML = event.which;
//     keyCodeElem.innerHTML = event.key;
// });

const keyCodeElem = document.querySelector(".keycode");
const keyCodeTitle = document.querySelector(".keycode-title");
const locationElem = document.querySelector(".location");
const codeElem = document.querySelector(".code");
const whichElem = document.querySelector(".which");
const keyElem = document.querySelector(".key");

document.body.addEventListener("keydown", function (event) {
    event.preventDefault();

    document.body.classList.add("key-pressed");

    keyElem.innerHTML = event.key;
    locationElem.innerHTML = event.location;
    keyCodeElem.innerHTML = event.key;
    keyCodeTitle.innerHTML = event.which;
    codeElem.innerHTML = event.code;
    whichElem.innerHTML = event.which;
});