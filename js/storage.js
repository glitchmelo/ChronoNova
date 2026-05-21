function saveLocal() {
  localStorage.setItem("chrononova", JSON.stringify(events));
}

function loadLocal() {
  const data = localStorage.getItem("chrononova");
  if (data) {
    events = JSON.parse(data);
    render();
  }
}

setInterval(saveLocal, 2000);
window.onload = loadLocal;
