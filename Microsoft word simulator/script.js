const fonts = ["arial", "verdana", "helvetica", "tahoma", "georgia"];
const fontsSelector = document.getElementById("fonts");
const colorPicker = document.getElementById("coloring");
const textSizeSelector = document.getElementById("size");
const tester = document.getElementById("test");

fontsSelector.innerHTML = fonts.map(font => `<option >${font}</option>`).join("");



fontsSelector.addEventListener("change", function () {
    test.style.fontFamily = this.value;
});

colorPicker.addEventListener("change", function () {
    test.style.color = this.value;
});

textSizeSelector.addEventListener("change", function () {
    test.style.fontSize = this.value + "px";
});
