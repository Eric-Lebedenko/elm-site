
// === Social Popup delayed ===
(function(){
  function show(){ const el = document.getElementById("social-popup"); if (el) el.style.display = "block"; }
  window.addEventListener("load", () => { setTimeout(show, 11000); });
})();
