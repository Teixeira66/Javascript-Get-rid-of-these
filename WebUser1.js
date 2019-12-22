const Content = document.getElementById("Content");
const MyTextBox = document.getElementById("MyTextBox");
const MyButton = document.getElementById("MyButton");
const Title = document.getElementById("Title");
const Main = document.getElementById("Main");
const Remove = document.getElementById("Remove");


function Addelements()  {
    const paragraph = document.createElement("p");
    paragraph.className = "Great ";
    paragraph.innerText = MyTextBox.value;
    Content.appendChild(paragraph);
}

function RemoveFirstPara() {
    const paragraph = document.getElementsByClassName("Great");
    if(paragraph.length > 0) {
        const lastposition = paragraph.length - 1; 
        Content.removeChild(paragraph[lastposition]);
    }
}

MyButton.addEventListener("click",Addelements);
Remove.addEventListener("click",RemoveFirstPara);