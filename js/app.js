let events = [];
let selectedId = null;

let zoom = 1;

const timeline = document.getElementById("timeline");
const list = document.getElementById("list");

function addEvent() {
  const e = {
    id: Date.now(),
    date: Number(document.getElementById("date").value || 0),
    title: document.getElementById("eventTitle").value,
    description: document.getElementById("desc").value,
    color: "#3b82f6",
    x: 0
  };

  events.push(e);
  render();
}

/* =======================
   RENDER TIMELINE
======================= */
function render() {
  timeline.innerHTML = "";

  // LINE
  const line = document.createElement("div");
  line.id = "line";
  timeline.appendChild(line);

  list.innerHTML = "";

  events.sort((a,b) => a.date - b.date);

  events.forEach((e, i) => {

    // position based on date
    const x = (e.date * zoom) + 5000;

    const div = document.createElement("div");
    div.className = "event";
    div.style.left = x + "px";
    div.style.borderColor = e.color;
    div.innerHTML = `<b>${e.date}</b><br>${e.title}`;

    // CLICK SELECT
    div.onclick = () => selectEvent(e.id);

    // DRAG
    let dragging = false;

    div.onmousedown = () => dragging = true;

    document.onmouseup = () => dragging = false;

    document.onmousemove = (ev) => {
      if (!dragging) return;

      e.date = Math.round((ev.pageX - 5000) / zoom);
      render();
    };

    timeline.appendChild(div);

    // sidebar
    const item = document.createElement("div");
    item.innerHTML = `${e.date} - ${e.title}`;
    item.onclick = () => selectEvent(e.id);
    list.appendChild(item);
  });
}

/* =======================
   SELECT EVENT
======================= */
function selectEvent(id) {
  selectedId = id;
  const e = events.find(x => x.id === id);

  document.getElementById("date").value = e.date;
  document.getElementById("eventTitle").value = e.title;
  document.getElementById("desc").value = e.description;
}

/* =======================
   EDIT EVENT
======================= */
function saveEdit() {
  const e = events.find(x => x.id === selectedId);
  if (!e) return;

  e.date = Number(document.getElementById("date").value);
  e.title = document.getElementById("eventTitle").value;
  e.description = document.getElementById("desc").value;

  render();
}

/* =======================
   ZOOM (molette souris)
======================= */
window.addEventListener("wheel", (e) => {
  if (e.ctrlKey) return;

  zoom += e.deltaY * -0.001;
  zoom = Math.min(Math.max(zoom, 0.2), 5);

  render();
});

/* INIT */
render();  selectedId = id;
  const e = events.find(ev => ev.id === id);

  document.getElementById("date").value = e.date;
  document.getElementById("eventTitle").value = e.title;
  document.getElementById("desc").value = e.description;
}

function saveEdit() {
  const e = events.find(ev => ev.id === selectedId);
  if (!e) return;

  e.date = document.getElementById("date").value;
  e.title = document.getElementById("eventTitle").value;
  e.description = document.getElementById("desc").value;

  render();
}
