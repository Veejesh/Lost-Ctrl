const startHour = 0;
const endHour = 24;
const tbody = document.querySelector("#timetable tbody");

for (let hour = startHour; hour < endHour; hour++) {
  const row = document.createElement("tr");
  const timeCell = document.createElement("td");
  timeCell.textContent = `${hour}:00 - ${hour + 1}:00`;
  row.appendChild(timeCell);

  for (let day = 0; day < 5; day++) {
    const cell = document.createElement("td");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter subject/task";
    cell.appendChild(input);
    row.appendChild(cell);
  }

  tbody.appendChild(row);
}
function save() {
  const inputs = document.querySelectorAll("td input");
  let data = [];
  inputs.forEach(input => data.push(input.value));

  localStorage.setItem("schedule", JSON.stringify(data));
  alert("Schedule saved!");
}
window.onload = function () {
  const saved = JSON.parse(localStorage.getItem("schedule"));
  if (saved) {
    const inputs = document.querySelectorAll("td input");
    inputs.forEach((input, i) => {
      input.value = saved[i] || "";
    });
  }
};
