function startIdleTimer() {
    var time;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;
    window.ontouchstart = resetTimer;
    window.onclick = resetTimer;
    window.onkeypress = resetTimer;
    window.addEventListener("scroll", resetTimer, true);
  
    function showModal() {
      document.getElementById("overlay").style.visibility = "visible";
      document.getElementById("overlay").classList.add("modal-animation");
    }
  
    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(showModal, 1000);
    }
  }
  
  // function setCookie() {
  //   document.cookie = "visited=yes";
  // }
  
  // if (document.cookie.indexOf("visited") === -1) {
    startIdleTimer();
  //   setCookie();
  //   console.log("first visit - overlay fired!");
  // } else {
  //   console.log("already visited - overlay not fired!");
  // }
  
  function closeModal() {
    document.getElementById("overlay").style.display = "none";
  }
  