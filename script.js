// default
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;


// select element
const heartDisplay = document.getElementById("heartCount");
const coinDisplay = document.getElementById("coinCount");
const copyDisplay = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");


// emergency services data
const services = [
  {
    mainName: "National Emergency Number",
    name: "National Emergency",
    number: "999",
    category: "All",
  },
  {
    mainName: "Police Helpline Number",
    name: "Police",
    number: "999",
    category: "Police",
  },
  {
    mainName: "Fire Service Number",
    name: "Fire Service",
    number: "999",
    category: "Fire",
  },
  {
    mainName: "Ambulance Service",
    name: "Ambulance",
    number: "16263",
    category: "Health",
  },
  {
    mainName: "Women & Child Helpline",
    name: "Women & Child Helpline",
    number: "109",
    category: "Help",
  },
  {
    mainName: "Anti-Corruption Helpline",
    name: "Anti-Corruption",
    number: "106",
    category: "Govt",
  },
  {
    mainName: "Electricity Helpline",
    name: "Electricity Outage",
    number: "16216",
    category: "Electricity",
  },
  {
    mainName: "Brac Helpline",
    name: "Brac",
    number: "16445",
    category: "NGO",
  },
  {
    mainName: "Bangladesh Railway Helpline ",
    name: "Bangladesh Railway",
    number: "163",
    category: "Travel",
  },
];

// Render cards dynamically
const cardSection = document.getElementById("cardSection");
services.forEach((service) => {
  const card = document.createElement("div");
  card.className =
    "bg-white p-4 rounded-lg shadow flex flex-col gap-3 relative";

  card.innerHTML = `
        <!-- Heart button -->
        <button class="heartBtn absolute top-4 right-4 text-gray-500 text-xl">♡</button>

        <!-- Text info -->
        <h3 class="font-bold text-[black]">${service.mainName}</h3>
        <p class="font-bold">${service.name}
        <p class="font-bold text-lg number text-[black]">${service.number}</p>
        <span class="badge badge-outline">${service.category}</span>

        <!-- Buttons -->
        <div class="flex gap-2 mt-4">
            <button class="copyBtn btn btn-sm btn-outline">📋 Copy</button>
            <button class="callBtn btn btn-sm btn-success text-white">📞 Call</button>
        </div>
    `;
  cardSection.appendChild(card);
});



// Event handling
document.addEventListener("click", (e) => {
  // Heart button
  if (e.target.classList.contains("heartBtn")) {
    heartCount++;
    heartDisplay.textContent = heartCount;
  }

  // Copy button
  if (e.target.classList.contains("copyBtn")) {
    const number = e.target
      .closest("div")
      .parentElement.querySelector(".number").textContent;
    navigator.clipboard.writeText(number);
    alert(`Copied: ${number}`);
    copyCount++;
    copyDisplay.textContent = copyCount;
  }

  // Call button
  if (e.target.classList.contains("callBtn")) {
    const card = e.target.closest("div").parentElement;
    const serviceName = card.querySelector("h3").textContent;
    const number = card.querySelector(".number").textContent;

    if (coinCount >= 20) {
      coinCount -= 20;
      coinDisplay.textContent = coinCount;
      alert(`Calling ${serviceName} at ${number}`);

      const time = new Date().toLocaleTimeString();
      if (historyList.children[0].textContent === "No history yet...") {
        historyList.innerHTML = "";
      }
      const li = document.createElement("li");
      li.textContent = `${serviceName} - ${number} (${time})`;
      historyList.appendChild(li);
    } else {
      alert("Not enough coins!");
    }
  }
});


// Clear history
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML =
    '<li class="text-sm text-gray-500">No history yet...</li>';
});

