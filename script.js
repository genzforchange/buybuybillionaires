// TO DO: REPLACE PRODUCTS WITH UPDATED DATA FROM GOOGLE SHEET. Sofia formatted this by exporting from google sheets to CSV and then converting to JSON with an online converter.
var products = [
  // {
  //   name: "Free Community College",
  //   cost_of_one: "3,890",
  //   population: "8,871,746",
  //   price: "91,940.00",
  //   image: "🏫",
  //   source_1: "https://educationdata.org/average-cost-of-community-college",
  //   source_2: "https://www.ed.gov/higher-education/find-college-or-educational-program/community-college/community-college-facts-glance",
  //   notes: "this is some text showing a note of some kind."
  // },
  {
    name: "Free Community College for 10,000 people",
    price: "38,900,000",
    image: "🎓",
    source_1: "https://educationdata.org/average-cost-of-community-college",
    notes: "3,890 x 10,000"
  },
  {
    name: "Eliminate Average Medical Debt for 10,000 people",
    price: "19,400,000",
    image: "🚑",
    source_1: "https://www.healthsystemtracker.org/brief/the-burden-of-medical-debt-in-the-united-states/",
    notes: "194 billion / 100 million x 10,000"
  },
  {
    name: "Cancel Student Loans for 10,000 Students",
    price: "298,900,000",
    image: "📚",
    source_1: "https://www.usnews.com/education/best-colleges/paying-for-college/articles/see-how-student-loan-borrowing-has-changed",
    notes: "29890 x 10,000"
  },
  {
    name: "1 Year of SNAP Benefits for 10,000 People",
    price: "21,240,000",
    image: "🥗",
    source_1: "https://www.fns.usda.gov/research/snap/characteristics-fy23",
    notes: "2,124 x 10,000"
  },
  {
    name: "Fund childcare for 10,000 Children",
    price: "130,000,000",
    image: "👧",
    source_1: "https://www.childcareaware.org/price-landscape24/",
    notes: "13,000 x 10,000"
  },
  {
    name: "Fund 10,000 Childbirths",
    price: "204,160,000",
    image: "🫄",
    source_1: "https://www.investopedia.com/how-much-does-it-cost-to-have-a-baby-in-america-6745508",
    notes: "20,416 x 10,000"
  },
  {
    name: "Maximum Pell Grants for 10,000 Students",
    price: "73,950,000",
    image: "💰",
    source_1: "https://studentaid.gov/help-center/answers/article/how-much-money-can-i-get-federal-pell-grantt",
    notes: "7,395 x 10,000"
  },
  {
    name: "Yearly UBI of $1,000 Monthly for 10,000 People",
    price: "120,000,000",
    image: "💵",
    source_1: "https://www.theunseenandtheunsaid.com/p/universal-basic-income-high-cost",
    notes: "12,000 x 10,000"
  },
  {
    name: "Free Public 4 Year College Tuition for 10,000 people",
    price: "105,280,000",
    image: "🎓",
    source_1: "https://www.fns.usda.gov/research/snap/characteristics-fy23",
    notes: "10,528 x 10,000"
  },
  {
    name: "Pay off the Annual Public School Meal Debt",
    price: "194,000,000",
    image: "🍽️",
    source_1: "https://educationdata.org/school-lunch-debt",
    notes: "number in dataset"
  },
  {
    name: "Provide A Year of Free Lunch to 10,000 US Children",
    price: "5,560,000",
    image: "🥪",
    source_1: "https://educationdata.org/school-lunch-debt",
    notes: "556 x 10000"
  },
  {
    name: "Effectively End Homelessness in the United States (HUD 2012)",
    price: "20,000,000,000",
    image: "🏡",
    source_1: "https://aah-inc.org/wp-content/uploads/2020/09/whomeless.pdf",
    notes: "number from HUD (a bit old but v commonly cited)"
  },
  {
    name: "Solve Homeless Crisis in Oakland",
    price: "4,500,000,000",
    image: "🏡",
    source_1: "https://oaklandside.org/2022/11/28/oakland-spends-120-million-on-homelessness-carroll-fife/",
    notes: "2022 estimate to house every current homeless person"
  },
  {
    name: "Solve Homeless Crisis in Skid Row",
    price: "5,000,000,000",
    image: "🏡",
    source_1: "https://www.costar.com/article/1042261897/this-downtown-la-tower-reflects-latest-national-approach-to-fight-homelessness",
    notes: "4,400 × $1M = $4.4B -- current homless population"
  }
]

// TO DO: IMPORT AND CORRECT IMAGES FOR BILL GATES, MARK ZUCKERBERG, LARRY PAGE, AND ALL 935 US BILLIONAIRES (if we don't want to use Mr. Krabs)
var billionaires = [
  { id: "jeff-bezos", name: "Jeff Bezos", title: "Founder of Amazon", money: 7272000000, image: "assets/jeff-bezos.png", wealth: 242400000000 },
  { id: "elon-musk", name: "Elon Musk", title: "CEO of Tesla & SpaceX", money: 21789000000, image: "assets/elon-musk.png", wealth: 726300000000 },
  { id: "bill-gates", name: "Bill Gates", title: "Co-founder of Microsoft", money: 3102000000, image: "assets/bill-gates.png", wealth: 103400000000 },
  { id: "mark-zuckerberg", name: "Mark Zuckerberg", title: "CEO of Meta", money: 6789000000, image: "assets/mark-zuckerberg.png", wealth: 226300000000 },
  { id: "larry-ellison", name: "Larry Ellison", title: "Co-founder of Oracle", money: 7350000000, image: "assets/larry-ellison.png", wealth: 245000000000 },
  { id: "larry-page", name: "Larry Page", title: "Co-founder of Google", money: 7707000000, image: "assets/larry-page.png", wealth: 256900000000 },
  { id: "all-935-us-billionaires", name: "All 935 US Billionaires", title: "Combined Wealth", money: 244814151570, image: "assets/mr-krabs.png", wealth: 8160471719000 }
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

var cashRegisterSound = new Audio("assets/cash-register.mp3");
var receiptPrinterSound = new Audio("assets/receipt-printer.mp3");

function playCashRegister() {
  cashRegisterSound.currentTime = 0;
  cashRegisterSound.play();
}

function selectBillionaire(li) {
  if (currentBillionaire) {
    billionaireList.appendChild(currentBillionaire.element);
  }

  playCashRegister();

  const b = billionaires.find(b => b.id === li.id);
  currentBillionaire = b;

  selectedHeadContainer.innerHTML = "";
  selectedHeadContainer.appendChild(b.element);

  billionaireName.innerHTML = b.name + "<br><span class='billionaire-title'>" + b.title + "</span>";
  billionaireMoney.innerHTML = formatMoney(b.money);

  document.querySelector(".counter").classList.add("visible");

  let visibleHeads = Array.from(billionaireList.querySelectorAll(".billionaire-card"));
  visibleHeads.forEach((card, i) => {
    card.style.setProperty('--index', i);
  });
}

billionaireList.querySelectorAll(".billionaire-card").forEach(li => {
  li.addEventListener("click", () => selectBillionaire(li));
});


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

const cartContent = document.querySelector("#cart-content");
const checkoutBtn = document.querySelector("#checkout-btn");

function updateCart() {
  cartContent.innerHTML = "";
  const activeCards = document.querySelectorAll(".product-card.active");
  if (activeCards.length === 0) {
    cartContent.innerHTML = "<p class='cart-empty'>Your cart is empty.</p>";
    checkoutBtn.disabled = true;
    checkoutBtn.classList.add("disabled");
    return;
  }
  checkoutBtn.disabled = false;
  checkoutBtn.classList.remove("disabled");
  const ul = document.createElement("ul");
  ul.classList.add("cart-list");
  activeCards.forEach(card => {
    const name = card.querySelector("h4").textContent;
    const displayPrice = card.querySelector("span").textContent;
    const li = document.createElement("li");
    li.classList.add("cart-item");
    li.innerHTML = `<span class="cart-item-name">${name}</span><span class="cart-item-price">${displayPrice}</span><button class="cart-remove">&times;</button>`;
    li.querySelector(".cart-remove").addEventListener("click", () => {
      card.querySelector(".add-button").click();
    });
    ul.appendChild(li);
  });
  cartContent.appendChild(ul);

  let total = 0;
  activeCards.forEach(card => {
    total += parseFloat(card.dataset.price);
  });
  const totalDiv = document.createElement("div");
  totalDiv.classList.add("cart-total");
  totalDiv.innerHTML = `<span>Total</span><span>${formatShortMoney(total)}</span>`;
  cartContent.appendChild(totalDiv);
}

function showSpentMessage() {
  billionaireMoney.classList.remove("spent-shake");
  void billionaireMoney.offsetWidth;
  billionaireMoney.innerHTML = "Congrats, you spent all you can!";
  billionaireMoney.classList.add("spent-shake");
  setTimeout(() => {
    billionaireMoney.innerHTML = formatMoney(currentBillionaire.money);
    billionaireMoney.classList.remove("spent-shake");
  }, 2000);
}

function toggleCard(card) {
  if (!currentBillionaire) {
    const defaultBillionaire = document.querySelector("#mark-zuckerberg");
    if (defaultBillionaire) selectBillionaire(defaultBillionaire);
  }
  const price = parseFloat(card.dataset.price);
  const isAdding = !card.classList.contains("active");
  if (isAdding && currentBillionaire.money < price) {
    showSpentMessage();
    return;
  }
  card.classList.toggle("active");
  if (card.classList.contains("active")) {
    currentBillionaire.money -= price;
  } else {
    currentBillionaire.money += price;
  }
  billionaireMoney.innerHTML = formatMoney(currentBillionaire.money);
  updateCart();
}

document.querySelectorAll(".product-card").forEach(card => {
  const btn = card.querySelector(".add-button");
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleCard(card);
  });
});


function formatMoney(amount) {
  if (amount < 0) {
    return "Taxes owed: -$" + Math.abs(amount).toLocaleString();
  }
  return "Taxes owed: $" + amount.toLocaleString();
}

document.querySelectorAll(".collapsible").forEach(function(btn) {
  btn.addEventListener("click", function() {
    this.classList.toggle("active");
    var content;
    if (this.classList.contains("cart")) {
      content = document.querySelector("#cart-content");
      var cartIcon = this.querySelector("#cart");
      if (content && cartIcon) {
        if (content.style.display === "block") {
          content.style.display = "none";
          cartIcon.src = "assets/cart.svg";
          checkoutBtn.style.display = "none";
        } else {
          content.style.display = "block";
          cartIcon.src = "assets/collapse.svg";
          checkoutBtn.style.display = "block";
        }
      }
      return;
    } else {
      content = this.nextElementSibling;
    }
    if (!content) return;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

const receiptOverlay = document.querySelector("#receipt-overlay");
const receiptItems = document.querySelector("#receipt-items");
const receiptTotal = document.querySelector("#receipt-total");

const receiptName = document.querySelector("#receipt-name");
const receiptOriginalBalance = document.querySelector("#receipt-original-balance");
const receiptRemaining = document.querySelector("#receipt-remaining");

checkoutBtn.addEventListener("click", () => {
  const activeCards = document.querySelectorAll(".product-card.active");
  if (activeCards.length === 0 || !currentBillionaire) return;

  receiptPrinterSound.currentTime = 0;
  receiptPrinterSound.play();

  const now = new Date();
  document.querySelector("#receipt-date").textContent = now.toLocaleString();
  receiptName.textContent = currentBillionaire.name;
  receiptOriginalBalance.textContent = "$" + currentBillionaire.wealth.toLocaleString();

  const stampsContainer = document.querySelector("#receipt-stamps");
  stampsContainer.innerHTML = "";
  const stampSrc = "assets/" + currentBillionaire.id + "-stamp.png";
  const angle = (Math.random() * 40 - 20).toFixed(1);
  const xPos = 200 + Math.floor(Math.random() * 100);
  const yPos = 100 + Math.floor(Math.random() * 30);
  const img = document.createElement("img");
  img.src = stampSrc;
  img.alt = currentBillionaire.name + " stamp";
  img.style.transform = "rotate(" + angle + "deg)";
  img.style.left = xPos + "px";
  img.style.top = yPos + "px";
  stampsContainer.appendChild(img);

  receiptItems.innerHTML = "";
  const oldItemCount = document.querySelector(".receipt-item-count");
  if (oldItemCount) oldItemCount.remove();
  let total = 0;
  activeCards.forEach(card => {
    const name = card.querySelector("h4").textContent;
    const price = parseFloat(card.dataset.price);
    total += price;
    const div = document.createElement("div");
    div.classList.add("receipt-item");
    div.innerHTML = `<span>${name}</span><span>$${price.toLocaleString()}</span>`;
    receiptItems.appendChild(div);
  });

  const itemCount = document.createElement("div");
  itemCount.classList.add("receipt-item-count");
  itemCount.innerHTML = `<span>Item Count</span><span>${activeCards.length}</span>`;
  receiptTotal.parentNode.insertBefore(itemCount, receiptTotal);

  receiptTotal.innerHTML = `<span>Total</span><span>$${total.toLocaleString()}</span>`;
  receiptRemaining.innerHTML = `<span>Remaining</span><span>$${currentBillionaire.money.toLocaleString()}</span>`;
  receiptOverlay.classList.add("visible");
});

receiptOverlay.addEventListener("click", (e) => {
  if (e.target === receiptOverlay) {
    receiptOverlay.classList.remove("visible");
  }
});

document.querySelector("#share-receipt-btn").addEventListener("click", (e) => {
  e.stopPropagation();
  const receiptEl = document.querySelector("#receipt");
  html2canvas(receiptEl, { backgroundColor: null, useCORS: true, scale: 2 }).then(canvas => {
    canvas.toBlob(blob => {
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [new File([blob], "receipt.png", { type: "image/png" })] })) {
        const file = new File([blob], "receipt.png", { type: "image/png" });
        navigator.share({ files: [file], title: "Buy Buy Billionaire$ Receipt" });
      } else {
        const link = document.createElement("a");
        link.download = "buy-buy-billionaires-receipt.png";
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
      }
    }, "image/png");
  });
});

function openActions() {
  document.querySelector("#actions-overlay").classList.add("visible");
}

function closeActions() {
  document.querySelector("#actions-overlay").classList.remove("visible");
}

document.querySelector("#actions-overlay").addEventListener("click", function(e) {
  if (e.target === document.querySelector("#actions-overlay")) {
    closeActions();
  }
});

function openSources() {
  var sourcesOverlay = document.querySelector("#sources-overlay");
  var sourcesList = document.querySelector("#sources-list");
  sourcesList.innerHTML = "";
  var seen = {};
  products.forEach(function(p) {
    if (seen[p.name]) return;
    seen[p.name] = true;
    var item = document.createElement("div");
    item.classList.add("sources-item");
    var html = '<p class="sources-product-name">' + p.name + '</p>';
    if (p.source_1) html += '<p class="sources-link-text">Source: <a href="' + p.source_1 + '" target="_blank">' + p.source_1 + '</a></p>';
    if (p.source_2) html += '<p class="sources-link-text">Source: <a href="' + p.source_2 + '" target="_blank">' + p.source_2 + '</a></p>';
    item.innerHTML = html;
    sourcesList.appendChild(item);
  });
  sourcesOverlay.classList.add("visible");
}

document.querySelector("#sources-overlay").addEventListener("click", function(e) {
  if (e.target === document.querySelector("#sources-overlay")) {
    document.querySelector("#sources-overlay").classList.remove("visible");
  }
});

document.querySelector(".sources-close").addEventListener("click", function() {
  document.querySelector("#sources-overlay").classList.remove("visible");
});

setInterval(function() {
  var cartIcon = document.querySelector("#cart");
  if (cartIcon) {
    cartIcon.classList.remove("cart-blink");
    void cartIcon.offsetWidth;
    cartIcon.classList.add("cart-blink");
    cartIcon.addEventListener("animationend", function() {
      cartIcon.classList.remove("cart-blink");
    }, { once: true });
  }
}, 10000);

// TO DO: ADD RESET FUNCTIONALITY IN JS THAT RESETS THE CART ITEMS WHEN A NEW BILLIONAIRE IS CHOSEN (currently this results in an error that doesn't calculate the money properly when a new billionaire is chosen)