window.onload = function () {
    alert("ยินดีต้อนรับสู่การทดสอบ!");
};
function changeColor() {

    var colors = ["red", "green", "yellow", "pink", "orange",];

    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}
document.getElementById("mainTitle").onclick = function () {
    console.log("คุณคลิกที่หัวข้อหลัก");
};