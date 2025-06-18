function submitName(event) {
  event.preventDefault();
  const input = document.getElementById("name-input").value.trim();
  petName = input || "Fluffy";
  document.getElementById("pet-name").textContent = petName;
  document.getElementById("name-form").style.display = "none";
  document.querySelector(".pet-area").style.display = "block";

  updateStats();
}
let hunger = 50;
let cleanliness = 80;

function updateStats() {
  document.getElementById("hunger").textContent = hunger;
  document.getElementById("cleanliness").textContent = cleanliness;
}

function showMessage(text) {
  const box = document.getElementById("message-box");
  box.textContent = text;
}

function feedPet() {
  if (hunger > 0) {
    hunger -= 10;
    if (hunger < 0) hunger = 0;
    cleanliness -= 5;
    updateStats();
    showMessage(`You fed ${petName}!`);
  } else {
    showMessage(`${petName} is full!`);
  }
}

function cleanPet() {
  if (cleanliness < 100) {
    cleanliness += 15;
    if (cleanliness > 100) cleanliness = 100;
    updateStats();
    showMessage(`You cleaned ${petName}!`);
  } else {
    showMessage(`${petName} is already clean!`);
  }
}


// Simulate time passing (hunger increases)
setInterval(() => {
  hunger += 1;
  if (hunger > 100) hunger = 100;
  updateStats();
}, 5000); // Every 5 seconds

updateStats();

