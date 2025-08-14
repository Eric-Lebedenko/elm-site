
// === Main bootstrap ===
(function(){
  // Block context menu & basic devtools shortcuts (note: security by obscurity)
  document.addEventListener("contextmenu", e => e.preventDefault());
  document.addEventListener("copy", e => e.preventDefault());
  document.addEventListener("selectstart", e => e.preventDefault());
  document.addEventListener("keydown", function (e) {
    if (e.keyCode === 123 ||
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
        (e.ctrlKey && e.keyCode === 85)) {
      e.preventDefault();
      return false;
    }
  });

  // Preloader
  window.addEventListener("load", ()=>{
    const pre = document.getElementById("preloader");
    const content = document.getElementById("content");
    if (pre){ pre.classList.add("fade"); pre.style.display="none"; }
    if (content){ content.style.opacity = "1"; }
  });

  // Smooth scroll inside #content
  function smoothTo(hash){
    const target = document.querySelector(hash);
    const container = document.getElementById("content");
    if (!target || !container) return;
    const targetPos = target.getBoundingClientRect().top + container.scrollTop;
    const scrollTo = targetPos - ((container.clientHeight - target.offsetHeight)/2);
    container.scrollTo({ top: Math.max(scrollTo, 0), behavior:"smooth" });
  }
  document.addEventListener("click", (e)=>{
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute("href");
    if (href && href.startsWith("#")){
      e.preventDefault();
      smoothTo(href);
      // collapse mobile menu if open (Bootstrap)
      const navbar = document.querySelector(".navbar-collapse");
      if (navbar && getComputedStyle(document.querySelector(".navbar-toggler")).display !== "none"){
        $(navbar).collapse("hide");
      }
    }
  });

  // Back-to-top visibility toggling
  const ctn = document.getElementById("content");
  const back = document.getElementById("back-to-top");
  if (ctn && back){
    ctn.addEventListener("scroll", ()=>{
      if (ctn.scrollTop > 300) back.style.display = "block"; else back.style.display = "none";
    });
    back.addEventListener("click", ()=> ctn.scrollTo({ top:0, behavior:"smooth" }));
  }

  // Navbar brand scroll to top
  const brand = document.querySelector(".navbar-brand");
  if (brand){
    brand.addEventListener("click", (e)=>{ e.preventDefault(); ctn && ctn.scrollTo({ top: 0, behavior:"smooth" }); });
  }

  // Language controls
  window.ELM = window.ELM || {};
  window.ELM.currentLang = "en";
  window.addEventListener("DOMContentLoaded", ()=>{
    if (window.ELM.wireLanguageControls) window.ELM.wireLanguageControls();
    if (window.ELM.applyTranslations) window.ELM.applyTranslations("en");
    const dd = document.getElementById("languageDropdown");
    if (dd) dd.textContent = "English";
  });
})();
