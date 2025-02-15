function toggleEnabled(ev){
  browser.runtime.getBackgroundPage().then((bg) => {
    if (ev.target.checked){
      bg.start();
      console.log("Started");
    }else{
      bg.stop();
      console.log("Stopped");
    }
  });
}

browser.runtime.getBackgroundPage().then((bg) => {
  document.getElementById("globalStatusPortAuthority").checked = bg.isListening();

  // Add an event listener to the switch
  document.getElementById('globalStatusPortAuthority').addEventListener("change", toggleEnabled);

  // Make sure this doesn't run too early
  setTimeout(() => document.documentElement.classList.remove('loading'), 0);
});
