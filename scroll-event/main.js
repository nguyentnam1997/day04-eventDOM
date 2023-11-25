//1. Ẩn/Hiện nút Button TOP
const btn = document.getElementById('btn');
window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 300) {
        btn.classList.add('show');
    }
    else {
        btn.classList.remove('show');
    }
});

//2. Ấn vào button TOP thì trở về đầu trang
btn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/////Ẩn / Hiện password
const btn2 = document.getElementById("btn2");
const input = document.getElementById("input");
// btn2.onclick(function () {
//     if (input.type == "password") {
//         input.type = "text";
//         btn2.innerText = "Hide";
//     } else {
//         input.type = "password";
//         btn2.innerText = "Show";
//     }
// });
btn2.addEventListener("click", function () {
    console.log(input.type);
    if (input.type == "password") {
        input.type = "text";
        btn2.innerText = "Hide";
    } else {
        input.type = "password";
        btn2.innerText = "Show";
    }
});