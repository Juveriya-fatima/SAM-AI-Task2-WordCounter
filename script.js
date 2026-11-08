const textInput = document.getElementById("textInput");

function countText() {
    const text = textInput.value;
    const trimmedText = text.trim();

    const words = trimmedText ? trimmedText.split(/\s+/).length : 0;
    const sentences = trimmedText
        ? (trimmedText.match(/[.!?]+(?=\s|$)/g) || []).length
        : 0;

    document.getElementById("words").textContent = words;
    document.getElementById("characters").textContent = text.length;
    document.getElementById("sentences").textContent = sentences;
}

textInput.addEventListener("input", countText);

document.getElementById("clearBtn").addEventListener("click", function () {
    textInput.value = "";
    countText();
    textInput.focus();
});

countText();
