const generateBtn = document.querySelector("#generate-btn");
const textInput = document.querySelector("#text");
const generatedText = document.querySelector("#generated-words");

const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusantium repellat facilis ea? Mollitia sint aspernatur dignissimos possimus, enim officia voluptatum. Ipsam commodi vero praesentium similique, ducimus laboriosam corrupti quam?";

const tokens = {};

function getTokens() {
    const tokens = text.split("/\W/");
    generatedText.innerHTML = tokens;
    console.log(tokens);
}

generateBtn.onclick = () => {
    getTokens();
}