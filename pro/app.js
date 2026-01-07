
// app.js
const alertButton = document.querySelector("#alert-button");

alertButton.addEventListener("click", () => {
    alert("안녕하세요! 버튼이 클릭되었습니다.");
});

const colorButton = document.querySelector
("#color-button");

colorButton.addEventListener("click", ()=>{
    document.body.style.backgroundColor -"#FF5733"
})