const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images=[{
    filename:'pic1.jpg',
    alt: "人間の目のクローズアップ"
},
{
    filename:'pic2.jpg',
    alt: "波のような岩"
},
{
    filename:'pic3.jpg',
    alt: "紫と白のパンジー"
},
{
    filename:'pic4.jpg',
    alt: "ファラオの墓にある壁画"
},
{
    filename:'pic5.jpg',
    alt: "葉の上の大きな蛾"
}
];
const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";
for(const image of images){
    const newImage = document.createElement('img');
    newImage.src = `${baseURL}${image.filename}`;
    newImage.alt = image.alt;
    newImage.tabIndex = "0";
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click",updateDisplayedImage);
    newImage.addEventListener("keydown",(e)=>{
        if(e.key=="Enter"){
           updateDisplayedImage(e); 
        }
    });
}
function updateDisplayedImage(e){
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
}
btn.addEventListener("click",()=>{
      if (btn.classList.contains("dark")) {
    btn.textContent = "明るく";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    btn.textContent = "暗く";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }
  btn.classList.toggle("dark");
});
