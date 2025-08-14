
// === Investor Mode Ticker ===
window.ELM = window.ELM || {};
(function(){
  const API_KEY = "YOUR_KEY"; // keep/change as needed
  const symbols = "GOLD,JNJ,DIA,PR,GS,BA,GD,LHX,NOC,MHPC,FOPO,SAP,DHR,AAPL,LMT,MCO,OXY,CVX,KO,BAC,AXP,TSLA,AMZN,MSFT";
  let intervalId = null;

  async function fetchQuotes(){
    try{
      const url = `https://financialmodelingprep.com/api/v3/quote/${symbols}?apikey=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      return Array.isArray(data) ? data : [];
    }catch(e){
      console.error("Ticker fetch error", e);
      return [];
    }
  }

  function renderTicker(data){
    const html = data.map((s, idx) => {
      const price = (s && typeof s.price === "number") ? s.price.toFixed(2) : "-";
      return `<a href="https://www.google.com/search?q=${s.symbol}" target="_blank">${s.symbol}: $${price}</a>`;
    }).join('<span class="ticker-delimiter">|</span>');
    const nodes = document.querySelectorAll("#ticker-top span, #ticker-bottom span");
    nodes.forEach(n => n.innerHTML = html);
  }

  async function updateTickerOnce(){
    const data = await fetchQuotes();
    renderTicker(data);
  }

  function start(){
    stop();
    updateTickerOnce();
    intervalId = setInterval(updateTickerOnce, 60_000);
  }
  function stop(){
    if (intervalId){ clearInterval(intervalId); intervalId = null; }
  }

  window.ELM.startTicker = start;
  window.ELM.stopTicker = stop;
})();
