
// === Contact form (Formspree) + basic rate limit ===
(function(){
  let last = 0;
  const BLOCK = 30_000;
  window.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    if (!form) return;
    form.addEventListener("submit", async (ev)=>{
      ev.preventDefault();
      const now = Date.now();
      if (now - last < BLOCK){ status.textContent = "Вы слишком часто отправляете запросы. Пожалуйста, подождите немного."; return; }
      last = now;
      const data = new FormData(form);
      try {
        const res = await fetch(form.action, { method: form.method, body: data, headers: { "Accept":"application/json" } });
        if (res.ok){ status.textContent = "Спасибо за ваше сообщение!"; form.reset(); }
        else {
          const j = await res.json().catch(()=>({}));
          status.textContent = (j.errors && j.errors.map(e=>e.message).join(", ")) || "Упс! Произошла ошибка при отправке формы.";
        }
      } catch(err){
        status.textContent = "Упс! Произошла ошибка при отправке формы.";
      }
    });
  });
})();
