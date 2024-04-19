const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const searchButton = document.getElementById("searchButton");
const priceInput = document.getElementById("second-search");

const searchHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();

  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();

    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const buttonStyle = (event) => {
  buttons.forEach((button) => {
    const select = button.innerText.toLowerCase();
    console.log(select);

    if (select === event) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const buttonHandler = (event) => {
  const filter = event.target.dataset.filter;
  buttonStyle(filter);

  products.forEach((product) => {
    const productFilter = product.dataset.category;

    if (filter === "all") {
      product.style.display = "block";
    } else {
      filter === productFilter
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", buttonHandler);
});

const buttonSearchHandler = (event) => {
  const searchValue = +priceInput.value;

  products.forEach((product) => {
    const priceValue = product.children[2].innerText;
    const productPrice = +priceValue.split(" ")[1];

    if (!searchValue) {
      product.style.display = "block";
    } else {
      productPrice === searchValue
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

searchInput.addEventListener("keyup", searchHandler);
searchButton.addEventListener("click", buttonSearchHandler);
