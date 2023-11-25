const para = document.getElementById("text");

//Câu 1
const changeContent = () => {
  const quotes = [
    "I am the best 1",
    "I am the best 2",
    "I am the best 3",
    "I am the best 4",
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  para.innerText = randomQuote;
};

//Câu 2
const btn2 = document.getElementById("btn-2");
const randomHexColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hex.length);
    const randomChar = hex[randomIndex];
    color += randomChar;
  }

  return color;
};
btn2.onclick = () => {
  para.style.color = randomHexColor();
};

//Câu 3
const btn3 = document.getElementById("btn-3");
const randomRGBcolor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
};
btn3.addEventListener("click", () => {
    para.style.color = randomRGBcolor();
});
