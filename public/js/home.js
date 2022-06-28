var inactivityTime = function () {
  var time;
  window.onload = resetTimer;
  // DOM Events
  document.onmousemove = resetTimer;

  function logoutMeOut() {
    logout();
  }

  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(logoutMeOut, 600000);
    // 1000 milliseconds = 1 second
  }
};

window.onload = function () {
  inactivityTime();
};
