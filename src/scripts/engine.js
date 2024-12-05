const emojis = [
  "❤️",
  "❤️",
  "🙈",
  "🙈",
  "🐎",
  "🐎",
  "🐶",
  "🐶",
  "🦁",
  "🦁",
  "🐷",
  "🐷",
  "🐮",
  "🐮",
  "🐸",
  "🐸"
];
let openCards = [];
let shuffleEmojis = emojis.sort(()=>(Math.random()> 0.5) ? 2 : -1);
for (let i=0; i < emojis.length; i++){
  let box = document.createElement
  ("div");
  box.className = "item";
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handleCLick;
  document.querySelector(".game").appendChild(box);
}
function handleCLick(){
  if(openCards.length < 2){
    this.classList.add("boxOpen");
    openCards.push(this);
  }
  if(openCards.length == 2){
      setTimeout(checkMatch, 500);
  }
  console.log(openCards);
}
function checkMatch(){
  if(openCards[0].innerHTML ===openCards[1].innerHTML){
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  }else{
      openCards[0].classList.remove("boxOpen");
      openCards[1].classList.remove("boxOpen");
  }
  openCards = [];
  if (document.querySelectorAll(".boxMatch").length === emojis.length){
      alert("Você venceu !");
  }
  

}
const reloadInterval = 50000;
let timeLeft = reloadInterval / 1000;
const countdownTimer = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const countdownElement = document.getElementById("countdown");
  countdownElement.textContent = `Tempo para recarregar: ${timeLeft} segundos`;
  timeLeft--;

  if (timeLeft < 0) {
      clearInterval(countdownTimer);
      showMessageBeforeReload();
      }

}

function showMessageBeforeReload() {
  Swal.fire({
      title:'Você perdeu!',
      text: ' Clique OK e tente novamente, ou clique em Cancelar para parar o jogo.',
      icon: 'info',
      confirmButtonText: 'OK',
      showCancelButton:"Cancelar",

      })

.then((result) => {
      if (result.isConfirmed) {
          location.reload();
      }
  });
}
