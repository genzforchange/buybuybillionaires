var products = [
  {name: "End World Hunger", price: 40000000000, image: "https://codingyaar.com/wp-content/uploads/chair-image.jpg"},
  {name: "Product 2", price: 399, image: "https://codingyaar.com/wp-content/uploads/chair-image.jpg"},
  {name: "Product 3", price: 40000000000, image: "https://codingyaar.com/wp-content/uploads/chair-image.jpg"},
  {name: "Product 2", price: 399, image: "https://codingyaar.com/wp-content/uploads/chair-image.jpg"},
  {name: "End World Hunger", price: 40000000000, image: "https://codingyaar.com/wp-content/uploads/chair-image.jpg"},
  {name: "Product 2", price: 399, image: "https://codingyaar.com/wp-content/uploads/chair-image.jpg"}
];

var billionaires = [
  {id: "jeff-bezos", name: "Jeff Bezos", money: 35000000000, image: "assets/jeff.png"},
  {id: "elon-musk", name: "Elon Musk", money: 270000000000, image: "assets/elon.png"},
  {id: "bill-gates", name: "Bill Gates", money: 130000000000, image: "assets/jeff.png"},
  {id: "mark-zuckerberg", name: "Mark Zuckerberg", money: 120000000000, image: "assets/jeff.png"},
  {id: "warren-buffett", name: "Warren Buffett", money: 118000000000, image: "assets/jeff.png"},
  {id: "larry-ellison", name: "Larry Ellison", money: 105000000000, image: "assets/larry.png"}
];

const billionaireList = document.querySelector("#billionaire-selector");
const selectedHeadContainer = document.querySelector("#selected-head");
const billionaireName = document.querySelector("#billionaire-name");
const billionaireMoney = document.querySelector("#billionaire-money");

let currentBillionaire = null;

billionaires.forEach((b, i) => {
  const li = document.createElement("li");
  li.classList.add("billionaire-card");
  li.id = b.id;
   li.style.setProperty('--index', i);
  li.innerHTML = `<img src="${b.image}" alt="${b.name}"><span>${b.name}</span>`;
  billionaireList.appendChild(li);
  b.element = li;
});

billionaireList.querySelectorAll(".billionaire-card").forEach(li => {
  li.addEventListener("click", () => {
    if(currentBillionaire){
      billionaireList.appendChild(currentBillionaire.element);
    }

    const b = billionaires.find(b => b.id === li.id);
    currentBillionaire = b;

    selectedHeadContainer.innerHTML = "";
    selectedHeadContainer.appendChild(b.element);

    billionaireName.innerHTML = b.name;
    billionaireMoney.innerHTML = formatMoney(b.money);

    let visibleHeads = Array.from(billionaireList.querySelectorAll(".billionaire-card"));
    visibleHeads.forEach((card, i) => {
      card.style.setProperty('--index', i); // only update --index
    });
  });
});

const productsContainer = document.querySelector(".products-container");
products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h4>${product.name}</h4>
    <div>
      <span>$${product.price}</span>
      <button class="add-button">+</button>
    </div>
  `;
  productsContainer.appendChild(card);
});

document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("click", () => {
    if(!currentBillionaire) return;
    const price = parseFloat(card.querySelector("span").textContent.replace("$",""));
    card.classList.toggle("active");
    if(card.classList.contains("active")){
      currentBillionaire.money -= price;
    } else {
      currentBillionaire.money += price;
    }
    billionaireMoney.innerHTML = formatMoney(currentBillionaire.money);
  });
});

function formatMoney(amount){
  return "$" + amount.toLocaleString();
}