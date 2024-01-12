const container = document.querySelector(".content");
const baseURL = "http://source.unsplash.com/random/";
const rows = 5;

for (let i=0; i<rows*3; i++){
    const img= document.createElement("img");
    img.src=`${baseURL}${rastgeleBoyut()}`;
    container.appendChild(img);
}

function rastgeleBoyut(){
    return `${rastgeleSayi()}x${rastgeleSayi()}`;
}


function rastgeleSayi(){
   return Math.floor(Math.random() * 10) + 300 ;
}
