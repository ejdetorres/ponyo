/* ======================================================
   Loading Screen
====================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loading-screen");

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1200);

});

document.addEventListener("DOMContentLoaded", () => {

    const continueBtn = document.getElementById("continueBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (continueBtn) {
        continueBtn.addEventListener("click", () => {
            showScreen("message");
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            showScreen("question");
        });
    }

});


/* ======================================================
   Generic Screen Navigation
====================================================== */

function showScreen(id){

    document
        .querySelectorAll(".screen")
        .forEach(screen=>{

            screen.classList.remove("active");

        });

    const target=document.getElementById(id);

    if(target){

        target.classList.add("active");

    }

}


/* ======================================================
   Floating Hearts
====================================================== */

const heartsContainer=document.getElementById("hearts");

function createHeart(){

    if(!heartsContainer) return;

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=
        (6+Math.random()*4)+"s";

    heart.style.fontSize=
        (14+Math.random()*18)+"px";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,700);


/* ======================================================
   Simple Confetti
====================================================== */

const confettiContainer=document.getElementById("confetti");

function launchConfetti(){

    if(!confettiContainer) return;

    for(let i=0;i<80;i++){

        const piece=document.createElement("div");

        piece.className="confetti-piece";

        piece.style.left=Math.random()*100+"vw";

        piece.style.animationDuration=
            (2+Math.random()*2)+"s";

        piece.style.background=
            `hsl(${Math.random()*360},90%,70%)`;

        confettiContainer.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },4500);

    }

}


/* ======================================================
   Music Helper
====================================================== */

const bgMusic=document.getElementById("bgMusic");

function playMusic(){

    if(!bgMusic) return;

    bgMusic.play().catch(()=>{});

}

function pauseMusic(){

    if(!bgMusic) return;

    bgMusic.pause();

}

