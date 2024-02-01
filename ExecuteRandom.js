
let imgArray = ['CatNo1.jpg', 'CatNo2.gif', 'CatNo3.jpg', 'CatNo4.jpg', 'CatNo5.gif', 'CatNo6.png', 'CatNo7.png', 'CatNo8.gif'];
let imgCatHappy = ['catYes1.gif', 'catYes2.gif', 'catYes3.gif', 'catYes4.gif', 'catYes5.gif'];
let basePath="resources/CatNo/";
let modeSelected
let button = document.querySelector("nobtn");

let MainTitle = [
    'Will you be my valentine?',
    'Will you be my valentine? 💐',
    'Will you be my valentine? 💞💖',
    'Will you be my valentine? 💖',
    'Are you free on 14th?',
    'Are you free on 14th? 💐',
    'Are you free on 14th? 💖',
    'Are you free on 14th? 💞'
]
let sitemode = [
    1, //Button random spam
    2, //Button falls down
    3, //Button switch
    1,
    2,
    3,
    1,
    4 //NO, NOOO NOOO NONO NOOOO
]

/* Listeners */
document.getElementById("nobtn").addEventListener("click", buttonClicked);
document.getElementById("nobtn").addEventListener("mouseover", NoBtnHovered);
document.getElementById("nobtn").addEventListener("mouseleave", changeBack);
/* Listeners */

let clickedYes = false;

let image = document.getElementById("cat");

const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

function yesClicked(){
    const yesBUTTON = document.getElementById("yesbtn");
    if(clickedYes == false)
    {
        clickedYes = true;
        yesBUTTON.style.marginLeft = 0+"px";
        yesBUTTON.style.fontSize = 50+"px";
        document.getElementById("maintitle").innerHTML = "";
        document.getElementById("noisnotanoption").innerHTML = "";
        document.getElementById("nobtn").remove();
        image.style.visibility = "hidden";

        setTimeout(()=> {
            randomHappyGIF();
            let rand = Math.floor(Math.random() * 100) + 1;
            if(rand >= 50)
            {
                document.getElementById("maintitle").innerHTML = "See u on 14th.💖💐";
            }
            else if(rand <= 50)
            {
                const d = new Date("January 14, 2024 00:00:00"); 
                const now = new Date();
                let day = now.getDate();
                let day2 = d.getDate();
                let diff = day2 - day;
                if(diff == 1)
                {
                    document.getElementById("maintitle").innerHTML = "See u in " + diff + " Day!!! 💞";
                }
                else
                {
                    document.getElementById("maintitle").innerHTML = "See u in " + diff + " Days.💖💐";
                }
            }
            image.style.visibility = "visible";
            jsConfetti.addConfetti({
                emojis: ['💖', '💐', '💞', '💐', '💫', '🌸'],
            }).then(() => jsConfetti.addConfetti())
        }
        ,3000);
    }
}

function imgRandom() {
    for (let i = 0; i < 8; i++) {
        let rand = imgArray[Math.floor(Math.random() * imgArray.length)];
        let image = document.getElementById("cat");
        image.src = basePath+rand;
        image.style="width:30px,height:auto;"
    }
}

function randomHappyGIF(){
    for (let i = 0; i < 5; i++) {
        let rand = imgCatHappy[Math.floor(Math.random() * imgCatHappy.length)];
        let image = document.getElementById("cat");
        image.src = "resources/"+rand;
        image.style="width:30px,height:auto;"
    }
}

function NoBtnHovered(){
    imgRandom();
}

function changeBack(){
    if(clickedYes == false)
    {
        let image = document.getElementById("cat");
        image.src = "resources/cat.gif";
    }
}

function buttonClicked(){
    document.getElementById("noisnotanoption").innerHTML = "No, is not an option.";
    let element = document.getElementById("nobtn");
    switch(modeSelected){
        case 1:
            newPosition();
            break;
        
        case 2:
            element.classList.add("slide-out-bottom");
            break;

        case 3:
            element.classList.add("flip-2-ver-right-fwd");
            setTimeout(()=> {
                document.getElementById("nobtn").removeEventListener("click", buttonClicked);
                document.getElementById("nobtn").removeEventListener("mouseover", NoBtnHovered);
                document.getElementById("nobtn").removeEventListener("mouseleave", changeBack);
                element.innerHTML = "Yes"
                document.getElementById("nobtn").addEventListener("click", yesClicked);
                element.classList.remove("flip-2-ver-right-fwd");
            }
            ,1000);
            break;
        
        case 4:
            document.getElementById("yesbtn").remove();
            document.getElementById("noisnotanoption").innerHTML = "";
            document.getElementById("maintitle").innerHTML = "";
            document.getElementById("nobtn").style.marginRight = 0+"px";
            document.getElementById("nobtn").style.marginLeft = 0+"px";
            document.getElementById("nobtn").removeEventListener("click", buttonClicked);
            document.getElementById("nobtn").removeEventListener("mouseover", NoBtnHovered);
            document.getElementById("nobtn").removeEventListener("mouseleave", changeBack);
            document.getElementById("nobtn").style.backgroundColor = "gray";
            document.getElementById("body").style.backgroundColor = "black";
            image.style.visibility = "hidden";
            document.getElementById("footer").style.visibility = "hidden";
            setTimeout(()=> {
                element.classList.add("shake-bottom");
            }
            ,3000);
            setTimeout(()=> {
                element.classList.remove("shake-bottom");
                element.classList.add("slide-out-bottom");
                document.getElementById("body").style.backgroundBlendMode = "overlay";
            }
            ,6000);
            setTimeout(()=> {
                document.getElementById("body").style.backgroundImage = "url('/resources/Bad.png')";
                document.getElementById("body").style.backgroundBlendMode = "lighten";
                document.getElementById("body").style.backgroundPosition = "center center";
                document.getElementById("nobtn").remove();
            }
            ,9000);
            break;
        
    }
}

function newPosition(){
    const noButtn = document.getElementById("nobtn");
    const newPosX = Math.floor(Math.random() * window.innerWidth);
    const newPosY = Math.floor(Math.random() * window.innerHeight);

    noButtn.style.position = "absolute";
    noButtn.style.left = newPosX+"px";
    noButtn.style.top  = newPosY+"px";
}

function prepareMode(){
    let rng = Math.floor(Math.random() * (sitemode.length));
    modeSelected = sitemode[rng];
    
} 

function loadNew(){
    let rng = Math.floor(Math.random() * (MainTitle.length));
    document.getElementById("maintitle").innerHTML = MainTitle[rng];
    prepareMode();
}
