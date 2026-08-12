// PASSWORD

const correctPassword = "my god gifted one";

function checkPassword() {

    const input = document
        .getElementById("password")
        .value
        .trim()
        .toLowerCase();

        if (input === correctPassword) {

    hideAllPages();

    const music = document.getElementById("birthdayMusic");

    if (music) {
        music.play().catch(() => {
            console.log("Browser blocked autoplay");
        });
    }

    document.getElementById("loadingPage").style.display = "flex";

    setTimeout(() => {

        hideAllPages();

        document.getElementById("birthdayPage").style.display = "flex";

    }, 2000);

}

    else {

        document.getElementById("error").innerHTML =
        "❌ Wrong Password";

    }

}


// LETTER

function showLetter(){

    hideAllPages();

    document.getElementById("letterPage").style.display="flex";

}


// MEMORIES

function showMemory(){

    hideAllPages();

    document.getElementById("memoryPage").style.display="flex";

}


// END

function showEnd(){

    hideAllPages();

    document.getElementById("endPage").style.display="flex";

}


// HIDE ALL

function hideAllPages(){

    const pages=document.querySelectorAll(".page");

    pages.forEach(page=>{

        page.style.display="none";

    });

}



// COUNTDOWN
const birthday = new Date("August 13, 2026 00:00:00").getTime();

setInterval(function(){

    const now = new Date().getTime();

    const distance = birthday-now;

    if(distance<=0){

        const c=document.getElementById("countdown");

        if(c){

            c.innerHTML="🎉 It's Your Day Papa ❤️";

        }

        return;

    }

    const days=Math.floor(distance/(1000*60*60*24));

    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds=Math.floor((distance%(1000*60))/1000);

    const c=document.getElementById("countdown");

    if(c){

        c.innerHTML=

        `⏳ ${days} Days ${hours}h ${minutes}m ${seconds}s`;

    }

},1000);




// ❤️ LIGHT FLOATING HEARTS

setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.fontSize=(15+Math.random()*10)+"px";

    heart.style.opacity=".7";

    heart.style.pointerEvents="none";

    heart.style.zIndex="9999";

    document.body.appendChild(heart);

    let pos=100;

    const fly=setInterval(()=>{

        pos-=1;

        heart.style.top=pos+"vh";

        heart.style.opacity-=0.01;

        if(pos<0){

            clearInterval(fly);

            heart.remove();

        }

    },40);

},1800);

