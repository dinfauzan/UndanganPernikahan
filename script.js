const countdownDate = new Date("December 6, 2025 00:00:00").getTime();
const timer = setInterval(() => {
  const now = new Date().getTime();
  const d = countdownDate - now;
  if (d < 0) { clearInterval(timer); document.getElementById("timer").innerHTML = "Acara telah dimulai!"; return; }
  document.getElementById("days").innerText = Math.floor(d/(1000*60*60*24));
  document.getElementById("hours").innerText = Math.floor((d%(1000*60*60*24))/(1000*60*60));
  document.getElementById("minutes").innerText = Math.floor((d%(1000*60*60))/(1000*60));
  document.getElementById("seconds").innerText = Math.floor((d%(1000*60))/1000);
}, 1000);
