const productsData = {
  fruits: [
    { id: 1, name: "Apple", price: "₹120/kg" },
    { id: 2, name: "Banana", price: "₹60/dozen" },
    { id: 3, name: "Mango", price: "₹150/kg" }
  ],
  electronics: [
    { id: 4, name: "Mobile Phone", price: "₹15,000" },
    { id: 5, name: "Laptop", price: "₹55,000" },
    { id: 6, name: "Headphones", price: "₹3,000" }
  ],
  dresses: [
    { id: 7, name: "T-Shirt", price: "₹800" },
    { id: 8, name: "Jeans", price: "₹1,500" },
    { id: 9, name: "Jacket", price: "₹2,500" }
  ],
  makeup: [
    { id: 10, name: "Lipstick", price: "₹600" },
    { id: 11, name: "Foundation", price: "₹1,200" },
    { id: 12, name: "Mascara", price: "₹700" }
  ]
};

let selectedProducts = [];

function showCategory(category) {
  const productsDiv = document.getElementById("products");
  productsDiv.innerHTML = "";

  productsData[category].forEach(product => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <strong>${product.name}</strong><br>
      <span>${product.price}</span><br>
      <button onclick="addProduct(${product.id}, '${category}')">Select</button>
    `;

    productsDiv.appendChild(div);
  });
}

function addProduct(id, category) {
  const product = productsData[category].find(p => p.id === id);

  if (selectedProducts.some(p => p.id === id)) {
    return;
  }

  selectedProducts.push(product);
  renderSelectedProducts();
}

function removeProduct(id) {
  selectedProducts = selectedProducts.filter(p => p.id !== id);
  renderSelectedProducts();
}

function renderSelectedProducts() {
  const list = document.getElementById("selected");
  list.innerHTML = "";

  selectedProducts.forEach(product => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${product.name} - ${product.price}
      <button onclick="removeProduct(${product.id})">❌</button>
    `;
    list.appendChild(li);
  });
}
/* -------- TO-DO LIST -------- */

function addTask() {
  const input = document.getElementById("taskInput");
  const list = document.getElementById("taskList");

  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${input.value}
    <button onclick="this.parentElement.remove()">❌</button>
  `;
  list.appendChild(li);

  input.value = "";
}

/* -------- CONTACT FORM -------- */

function submitForm(event) {
  event.preventDefault();
  alert("Message sent successfully!");
}

