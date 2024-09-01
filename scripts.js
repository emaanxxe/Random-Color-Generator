const btnGenerate = document.querySelector('.generate');
const Color = document.getElementById('Color');
const HexCode = document.getElementById('hexCode');
const btnCopy = document.querySelector('.copy');
const copyMessage = document.getElementById('copyMessage');

const ColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#800020",
    "#DFFF00",
    "#FFBF00",
    "#FF7F50",
    "#DE3163",
    "#9FE2BF",
    "#40E0D0",
    "#6495ED",
    "#CCCCFF",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#000000",
    "#808000",
    "#800080",
    "#FF1493",
    "#191970",
    "#7CFC00",
    "#32CD32",
    "#BC8F8F",
    "#228B22",
    "#32CD32",
    "#20B2AA",
    "#DEB887",
    "#BC8F8F",
    "#B8860B",
    "#A0522D",
    "#808080",
    "#708090",
    "#2F4F4F",
    "#B22222",
    "#11636E"
];

function getRandomIndex() {
    return Math.floor(ColorsArr.length * Math.random());
}

function changeColor(event) {
    event.preventDefault();
    const index = getRandomIndex();
    Color.style.background=ColorsArr[index];
    Color.style.border = '1px solid rgb(234, 234, 234)';
    HexCode.innerText=ColorsArr[index];
    HexCode.style.color= 'white';

    return index;
}

function copy(event){
        event.preventDefault();
        copyMessage.classList.remove('hide');
        setTimeout(()=>{copyMessage.classList.add('hide');},1500);
        
        
        navigator.clipboard.writeText(HexCode.innerText);
}

btnGenerate.onclick = changeColor;
btnCopy.onclick = copy;








































/*const Color = document.getElementById('Color');
Color.style.background='green';

const btnGenerate = document.querySelector('.generate');
const btnCopy = document.querySelector('.copy');

const copyMessage = document.getElementById('copyMessage');

btnCopy.addEventListener('click' ,()=>{
    console.log("Bouton cliqué !");

    copyMessage.classList.remove('hide');

    console.log(copyMessage);

    setTimeout(
        ()=>{copyMessage.classList.add('hide');
            console.log("Cacher le message après 5 secondes");
        },5000); 
})
*/

