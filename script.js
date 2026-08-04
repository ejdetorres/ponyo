/* ======================================================
   Generic Website Utilities
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("script.js loaded");

    /* ==========================================
       Loading Screen
    ========================================== */
const loader = document.getElementById("loading-screen");

    window.addEventListener("load", () => {

        if (!loader) return;

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";

            setTimeout(() => {
                loader.remove();
            }, 800);

        }, 1000);

    });

   

    /* ==========================================
       Generic Screen Navigation
    ========================================== */

    function showScreen(id){

        document.querySelectorAll(".screen").forEach(screen=>{
            screen.classList.remove("active");
        });

        const target=document.getElementById(id);

        if(target){
            target.classList.add("active");
        }

    }

    // Make available globally if needed
    window.showScreen = showScreen;

    /* ==========================================
       Generic Navigation Buttons
    ========================================== */

    const continueBtn = document.getElementById("continueBtn");
    const nextBtn = document.getElementById("nextBtn");

    if(continueBtn){

        continueBtn.addEventListener("click", ()=>{

            playMusic();
           
            console.log("Continue clicked");

            showScreen("message");

        });

    }

    if(nextBtn){

        nextBtn.addEventListener("click", ()=>{

            console.log("Next clicked");

            showScreen("question");

        });

    }

    /* ==========================================
       Generic Celebration Example
    ========================================== */

    const yesBtn = document.getElementById("yesBtn");

    if(yesBtn){

        yesBtn.addEventListener("click", ()=>{

            launchConfetti();

            showScreen("celebration");

        });

    }

    /* ==========================================
       Floating Hearts
    ========================================== */

    const heartsContainer = document.getElementById("hearts");

    function createHeart(){

        if(!heartsContainer) return;

        const heart=document.createElement("div");

        heart.className="heart";

        heart.textContent="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(14+Math.random()*18)+"px";

        heart.style.animationDuration=(6+Math.random()*4)+"s";

        heartsContainer.appendChild(heart);

        setTimeout(()=>heart.remove(),9000);

    }

    setInterval(createHeart,700);

    /* ==========================================
       Generic Confetti
    ========================================== */

    const confettiContainer=document.getElementById("confetti");

    function launchConfetti(){

        if(!confettiContainer) return;

        for(let i=0;i<80;i++){

            const piece=document.createElement("div");

            piece.className="confetti-piece";

            piece.style.left=Math.random()*100+"vw";

            piece.style.background=
                `hsl(${Math.random()*360},90%,70%)`;

            piece.style.animationDuration=
                (2+Math.random()*2)+"s";

            confettiContainer.appendChild(piece);

            setTimeout(()=>piece.remove(),4500);

        }

    }

   /* ==========================================
   Music Helper
========================================== */

   const bgMusic = document.getElementById("bgMusic");

// Set initial volume
   if (bgMusic) {
       bgMusic.volume = 0;
   }

   window.playMusic = function () {

       if (!bgMusic) return;

    // Don't restart if already playing
       if (!bgMusic.paused) return;

       bgMusic.volume = 0;

       bgMusic.play().catch(err => {
           console.log("Music couldn't start:", err);
       });

       let volume = 0;

       const fadeIn = setInterval(() => {

           volume += 0.05;

           if (volume >= 1) {

               bgMusic.volume = 1;
               clearInterval(fadeIn);

           } else {

               bgMusic.volume = volume;

           }

       }, 150);

   };

   window.pauseMusic = function () {

       if (!bgMusic) return;

       let volume = bgMusic.volume;

       const fadeOut = setInterval(() => {

           volume -= 0.05;

           if (volume <= 0) {

               bgMusic.volume = 0;
               bgMusic.pause();
               clearInterval(fadeOut);

           } else {

               bgMusic.volume = volume;

           }

       }, 100);

   };


   const noBtn = document.getElementById("noBtn");

   const funnyText = document.getElementById("funnyText");

   const messages = [
       "Wait... 🥺",
       "Don't decide just yet. ❤️",
       "Please? ❤️",
       "My treat! 🍽️",
       "Give me a chance. 🌸",
       "I'd really love to take you out. 💕",
       "I promise it'll be fun! ✨",
       "Pretty please? 🥹",
       "I'll make it worth your time. 🌸",
       "Okay... let's try again 😊"
   ];

   let messageIndex = 0;

   noBtn.addEventListener("mouseenter", moveButton);

   function moveButton() {

       const area = document.querySelector(".button-area");

       const maxX = area.clientWidth - noBtn.offsetWidth;
       const maxY = area.clientHeight - noBtn.offsetHeight;

       const x = Math.random() * maxX;
       const y = Math.random() * maxY;

       noBtn.style.left = x + "px";
       noBtn.style.top = y + "px";

      if (funnyText) {
           funnyText.textContent = messages[messageIndex];
           messageIndex = (messageIndex + 1) % messages.length;
       }

   }

}
