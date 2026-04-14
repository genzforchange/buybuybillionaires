// TO DO: REPLACE PRODUCTS WITH UPDATED DATA FROM GOOGLE SHEET. Sofia formatted this by exporting from google sheets to CSV and then converting to JSON with an online converter.

// TO DO: DETERMINE WHETHER WE'D LIKE TO CHANGE FROM EMOJIS TO IMAGES. IF SO, REPLACE THE EMOJI WITH THE IMAGE PATH.
var products = [
    {
      name: "Free Community College",
      cost_of_one: "3,890",
      population: "8,871,746",
      price: "34,511,091,940.00",
      image: "🏫",
      source_1: "https://educationdata.org/average-cost-of-community-college",
      source_2: "https://www.ed.gov/higher-education/find-college-or-educational-program/community-college/community-college-facts-glance",
      notes: "this is some text showing a note of some kind."
    },
    {
      name: "Free Birth under 100k",
      cost_of_one: "20,416",
      population: "2,324,740",
      price: "47,461,891,840.00",
      image: "🫄",
      source_1: "https://www.investopedia.com/how-much-does-it-cost-to-have-a-baby-in-america-6745508",
      source_2: "https://www.cdc.gov/nchs/fastats/births.htm",
      notes: ""
    },
    {
      name: "10k Paid Family Leave under 100k",
      cost_of_one: "10000",
      population: "2,324,740",
      price: "23,247,400,000.00",
      image: "🍼",
      source_1: "https://www.census.gov/data/tables/2022/demo/fertility/women-fertility.html",
      source_2: "",
      notes: ""
    },
    {
      name: "Eliminate All Medical Debt",
      cost_of_one: "1",
      population: "194000000000",
      price: "194,000,000,000.00",
      image: "🚑",
      source_1: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12394938/",
      source_2: "",
      notes: ""
    },
    {
      name: "Free Community College",
      cost_of_one: "3,890",
      population: "8,871,746",
      price: "34,511,091,940.00",
      image: "🏫",
      source_1: "https://educationdata.org/average-cost-of-community-college",
      source_2: "https://www.ed.gov/higher-education/find-college-or-educational-program/community-college/community-college-facts-glance",
      notes: "this is some text showing a note of some kind."
    },
    {
      name: "Free Birth under 100k",
      cost_of_one: "20,416",
      population: "2,324,740",
      price: "47,461,891,840.00",
      image: "🫄",
      source_1: "https://www.investopedia.com/how-much-does-it-cost-to-have-a-baby-in-america-6745508",
      source_2: "https://www.cdc.gov/nchs/fastats/births.htm",
      notes: ""
    },
    {
      name: "10k Paid Family Leave under 100k",
      cost_of_one: "10000",
      population: "2,324,740",
      price: "23,247,400,000.00",
      image: "🍼",
      source_1: "https://www.census.gov/data/tables/2022/demo/fertility/women-fertility.html",
      source_2: "",
      notes: ""
    },
    {
      name: "Eliminate All Medical Debt",
      cost_of_one: "1",
      population: "194000000000",
      price: "194,000,000,000.00",
      image: "🚑",
      source_1: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12394938/",
      source_2: "",
      notes: ""
    },
    {
      name: "Free Community College",
      cost_of_one: "3,890",
      population: "8,871,746",
      price: "34,511,091,940.00",
      image: "🏫",
      source_1: "https://educationdata.org/average-cost-of-community-college",
      source_2: "https://www.ed.gov/higher-education/find-college-or-educational-program/community-college/community-college-facts-glance",
      notes: "this is some text showing a note of some kind."
    },
    {
      name: "Free Birth under 100k",
      cost_of_one: "20,416",
      population: "2,324,740",
      price: "47,461,891,840.00",
      image: "🫄",
      source_1: "https://www.investopedia.com/how-much-does-it-cost-to-have-a-baby-in-america-6745508",
      source_2: "https://www.cdc.gov/nchs/fastats/births.htm",
      notes: ""
    },
    {
      name: "10k Paid Family Leave under 100k",
      cost_of_one: "10000",
      population: "2,324,740",
      price: "23,247,400,000.00",
      image: "🍼",
      source_1: "https://www.census.gov/data/tables/2022/demo/fertility/women-fertility.html",
      source_2: "",
      notes: ""
    },
    {
      name: "Eliminate All Medical Debt",
      cost_of_one: "1",
      population: "194000000000",
      price: "194,000,000,000.00",
      image: "🚑",
      source_1: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12394938/",
      source_2: "",
      notes: ""
    },
    {
      name: "Free Community College",
      cost_of_one: "3,890",
      population: "8,871,746",
      price: "34,511,091,940.00",
      image: "🏫",
      source_1: "https://educationdata.org/average-cost-of-community-college",
      source_2: "https://www.ed.gov/higher-education/find-college-or-educational-program/community-college/community-college-facts-glance",
      notes: "this is some text showing a note of some kind."
    },
    {
      name: "Free Birth under 100k",
      cost_of_one: "20,416",
      population: "2,324,740",
      price: "47,461,891,840.00",
      image: "🫄",
      source_1: "https://www.investopedia.com/how-much-does-it-cost-to-have-a-baby-in-america-6745508",
      source_2: "https://www.cdc.gov/nchs/fastats/births.htm",
      notes: ""
    },
    {
      name: "10k Paid Family Leave under 100k",
      cost_of_one: "10000",
      population: "2,324,740",
      price: "23,247,400,000.00",
      image: "🍼",
      source_1: "https://www.census.gov/data/tables/2022/demo/fertility/women-fertility.html",
      source_2: "",
      notes: ""
    },
    {
      name: "Eliminate All Medical Debt",
      cost_of_one: "1",
      population: "194000000000",
      price: "194,000,000,000.00",
      image: "🚑",
      source_1: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12394938/",
      source_2: "",
      notes: ""
    },
  ]

// TO DO: IMPORT AND CORRECT IMAGES FOR BILL GATES, MARK ZUCKERBERG, LARRY PAGE, AND ALL 935 US BILLIONAIRES (if we don't want to use Mr. Krabs)
var billionaires = [
  {id: "jeff-bezos", name: "Jeff Bezos", money: 7272000000, image: "assets/jeff-bezos.png", wealth: 242400000000},
  {id: "elon-musk", name: "Elon Musk", money: 21789000000, image: "assets/elon-musk.png", wealth: 726300000000},
  {id: "bill-gates", name: "Bill Gates", money: 3102000000, image: "assets/bill-gates.png", wealth: 103400000000},
  {id: "mark-zuckerberg", name: "Mark Zuckerberg", money: 6789000000, image: "assets/mark-zuckerberg.png", wealth: 226300000000},
  {id: "larry-ellison", name: "Larry Ellison", money: 7350000000, image: "assets/larry-ellison.png", wealth: 245000000000},
  {id: "larry-page", name: "Larry Page", money: 7707000000, image: "assets/larry-page.png", wealth: 256900000000},
  {id: "all-935-us-billionaires", name: "All 935 US Billionaires", money: 244814151570, image: "https://imgs.search.brave.com/sUz40-OJkrGxKkXXEs-ck-6FfriTBuWy-zDyexA74To/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5na2V5LmNvbS9w/bmcvZnVsbC80MzUt/NDM1MDIwOF9tci1r/cmFicy1wbmctc3Bv/bmdlYm9iLW1yLWty/YWJzLXBuZy5wbmc", wealth: 8160471719000}
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

function selectBillionaire(li) {
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
    card.style.setProperty('--index', i);
  });
}

billionaireList.querySelectorAll(".billionaire-card").forEach(li => {
  li.addEventListener("click", () => selectBillionaire(li));
});

const defaultBillionaire = document.querySelector("#mark-zuckerberg");
if(defaultBillionaire) selectBillionaire(defaultBillionaire);

function formatShortMoney(amount) {
  if (amount >= 1_000_000_000) {
    return "$" + (amount / 1_000_000_000).toFixed(1) + "B";
  } else if (amount >= 1_000_000) {
    return "$" + (amount / 1_000_000).toFixed(1) + "M";
  } else if (amount >= 1_000) {
    return "$" + (amount / 1_000).toFixed(1) + "k";
  } else {
    return "$" + amount;
  }
}

const productsContainer = document.querySelector(".products-container");
// TO DO: IF WE WANT TO USE IMAGES INSTEAD OF EMOJIS, REPLACE THE EMOJI WITH THE IMAGE PATH BASED ON FORMAT BELOW THIS FUNCTION 
products.forEach(product => {
  const rawPrice = parseFloat(product.price.replaceAll(',', ''));
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.dataset.price = rawPrice;
  card.innerHTML = `
    <p role="img" aria-label="${product.name}"  class=".img">${product.image}</p>
    <h4>${product.name}</h4>
    <div>
     <span>${formatShortMoney(rawPrice)}</span>
      <button class="add-button">+</button>
    </div>
  `;
  productsContainer.appendChild(card);
});

document.querySelectorAll(".product-card").forEach(card => {
  const btn = card.querySelector(".add-button");
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    if(!currentBillionaire) return;
    const price = parseFloat(card.dataset.price);
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

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// TO DO: ADD CART FUNCTIONALITY THAT SHOWS THE ITEMS IN THE CART AND THEIR COSTS

// TO DO: ADD RESET FUNCTIONALITY IN JS THAT RESETS THE CART ITEMS WHEN A NEW BILLIONAIRE IS CHOSEN (currently this results in an error that doesn't calculate the money properly when a new billionaire is chosen)