let events = [];
let selectedId = null;

function addEvent() {
  const date = document.getElementById("date").value;
  const title = document.getElementById("eventTitle").value;
  const desc = document.getElementById("desc").value;

  const event = {
    id: Date.now(),
    date,
    title,
    description: desc,
    color: "#3b82f6"
  };

  events.push(event);
  render();
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  events.sort((a,b) => a.date - b.date);

  events.forEach(e => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `${e.date} - ${e.title}`;
    div.onclick = () => selectEvent(e.id);
    list.appendChild(div);
  });
}

function selectEvent(id) {
  selectedId = id;
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
