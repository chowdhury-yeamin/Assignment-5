// default
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

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
