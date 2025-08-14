
// === Secret keyboard sequence -> Discord role popup ===
(function(){
  const SECRET = [88,49,48,49,48,49,49]; // X101011
  const buf = [];
  function activate(){
    if (document.getElementById("hidden-quest")) return;
    const t = window.ELM && window.ELM.translations && (window.ELM.translations[window.ELM.currentLang] || window.ELM.translations.en);
    const title = (t && t.hidden_quest_title) || "Hidden Quest Activated!";
    const text  = (t && t.hidden_quest_text)  || "You've found the secret.";
    const btn   = (t && t.hidden_quest_btn)   || "Get Role";

    const div = document.createElement("div");
    div.id = "hidden-quest";
    div.style.position = "fixed";
    div.style.top = "50%"; div.style.left = "50%"; div.style.transform = "translate(-50%,-50%)";
    div.style.background = "rgba(0,0,0,.95)"; div.style.color="#fff"; div.style.padding="30px";
    div.style.border = "2px solid #E5E4E2"; div.style.zIndex="1000"; div.style.textAlign="center";
    div.innerHTML = `<h2>${title}</h2><p>${text}</p><br><button id="discord-btn" class="btn btn-bw" style="margin-top:20px;">${btn}</button>`;
    document.body.appendChild(div);
    document.getElementById("discord-btn").addEventListener("click", ()=>{
      window.open("https://discord.gg/xwfAzWDByf","_blank");
      div.remove();
    });
  }
  window.addEventListener("keydown", (e)=>{
    buf.push(e.keyCode);
    if (buf.length > SECRET.length) buf.shift();
    if (SECRET.toString()===buf.toString()) activate();
  });
})();
