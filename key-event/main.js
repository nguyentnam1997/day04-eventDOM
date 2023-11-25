// // Lắng nghe sự kiện keydown
// document.addEventListener("keydown", function () {
//     console.log("keydown");
// });

// // Lắng nghe sự kiện keyup
// document.addEventListener("keyup", function () {
//     console.log("keyup");
// });

// // Lắng nghe sự kiện keypress
// document.addEventListener("keypress", function () {
//     console.log("keypress");
// });
// Lắng nghe sự kiện keydown
// document.addEventListener("keydown", function (event) {
//     console.log(event);
// });

//function đổi màu
const randomRGBcolor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};
const randomNumber =() => {
    return Math.floor(Math.random() * 500);
}

//Tạo hình tròn
const circleDiv = document.createElement("div");
circleDiv.classList.add("circle");

//Tạo hình vuông
const squareDiv = document.createElement("div");
squareDiv.classList.add("square");

//HÀM XỬ LÝ
document.addEventListener("keydown", function (event) {
    console.log(event);
  //Xoá hình trước đó (nếu có)
  const currentCircle = document.querySelector(".circle");
  if (currentCircle) {
    currentCircle.remove();
  }
  const currentSquare = document.querySelector(".square");
  if (currentSquare) {
    currentSquare.remove();
  }
  
  //Ấn Enter để vẽ hình tròn
if (event.keyCode == 13) {
    document.body.style.backgroundColor = "#ffffff";
    circleDiv.style.top = randomNumber() + "px";
    circleDiv.style.left = randomNumber() + "px";
    document.body.appendChild(circleDiv);
  }
  //Ấn Space để vẽ hình vuông
  else if (event.keyCode == 32) {
    document.body.style.backgroundColor = "#ffffff";
    squareDiv.style.top = randomNumber() + "px";
    squareDiv.style.left = randomNumber() + "px";
    document.body.appendChild(squareDiv);
  }
  //Ấn phím khác sẽ đổi màu background
  else {
    document.body.style.backgroundColor = randomRGBcolor();
  }
});
