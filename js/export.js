function exportBIN() {
  const project = {
    version: 1,
    timelineName: document.getElementById("title").value,
    events: events
  };

  const blob = new Blob([JSON.stringify(project)], {
    type: "application/octet-stream"
  });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "frise.bin";
  a.click();
}
