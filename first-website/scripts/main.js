const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/jellyfish_ec.png") {
    myImage.setAttribute("src", "images/jellyfish-world1-1024x576.jpg");
  } else {
    myImage.setAttribute("src", "images/jellyfish_ec.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("あなたの名前を入力してください。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName} さん、クラゲ素敵だね。`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `クラゲって素敵、${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};