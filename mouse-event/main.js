// document.addEventListener('click', function(event) {
//     console.log(event);
//    })   

// document.addEventListener("mousedown", function () {
//   console.log("mousedown");
// });

// document.addEventListener("mousemove", function () {
//   console.log("mousemove");
// });

// document.addEventListener("mouseup", function () {
//   console.log("mouseup");
// });

document.addEventListener('click', function(event) {
    //Xoá hình tròn trước đó (nếu có)
    const currentCircle = document.querySelector('.circle');
    if (currentCircle) {
        currentCircle.remove(); //Cách 1
        //Cách 2: currentCircle.parentElement.removeChild(currentCircle);
    }

    //Tạo hình tròn
    const circleDiv = document.createElement('div');
    circleDiv.classList.add('circle');

    //Gắn vị trí cho hình tròn (X - right, left; Y - top, bottom)
    circleDiv.style.left = (event.offsetX - 50) + 'px'; 
    circleDiv.style.top = (event.offsetY - 50)+ 'px'; 
    //Thêm vào DOM
    document.body.appendChild(circleDiv);
   })  
