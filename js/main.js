window.dispatchEvent(new Event("scroll"));
if (document.querySelector(".fade-up")) {
  const elements = document.querySelectorAll(".fade-up");

  function showElements() {
    elements.forEach((el) => {
      const position = el.getBoundingClientRect().top;
      const screen = window.innerHeight;

      if (position < screen - 100) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", showElements);

  showElements();
}

//بخش ارتباطات
if (document.getElementById("order-items")) {
  const box = document.getElementById("order-items");

  const totalBox = document.getElementById("order-total");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = 0;

  cart.forEach((item) => {
    total += item.price ? item.price * item.quantity : 0;

    const div = document.createElement("div");

    div.className = "card p-3 mb-3";

    div.innerHTML = `<div class="d-flex align-items-center gap-3">

        <img
          src="${item.image}"
          width="80"
          class="rounded"
        >

        <div>

          <h6>${item.name}</h6>

          <p>
            ${item.quantity}
            ×
            ${item.price ? "$" + item.price : ""}
          </p>

        </div>

      </div>`;

    box.appendChild(div);
  });

  totalBox.textContent = "Total: $" + total;
}
//قسمت تنظیمات لیست
const form = document.getElementById("checkout-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // گرفتن مقدارها
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");
    const payment = document.getElementById("payment");
    // error boxes
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    // پاک کردن قبلی‌ها
    nameError.textContent = "";
    emailError.textContent = "";
    name.classList.remove("error-border");
    email.classList.remove("error-border");

    let valid = true;
    //  بخش اسم ها
    const nameRegex = /^[A-Za-z\s]{3,}$/;

    if (!nameRegex.test(name.value.trim())) {
      nameError.textContent =
        "Name must be at least 3 letters and only letters";
      name.classList.add("error-border");
      valid = false;
    }

    //  ایمیل
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value.trim())) {
      emailError.textContent = "Invalid email format";
      email.classList.add("error-border");
      valid = false;
    }

    //  بقیه فیلدها
    if (!phone.value || phone.value.length < 8) {
      alert("Phone is invalid");
      valid = false;
    }

    if (!address.value) {
      alert("Address required");
      valid = false;
    }

    if (!payment.value) {
      alert("Select payment method");
      valid = false;
    }

    // اگر همه درست بود
    if (valid) {
      alert("Order placed successfully 🎉");

      localStorage.removeItem("cart");

      window.location.href = "index.html";
    }
  });
}
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.remove("error-border");
  });
});

//لیست جدید برای بخش کارت ها
const allProducts = [...products, ...cartproducts];

//بخش خانه
const productList = document.getElementById("product-list");

if (productList) {
  products.forEach((product) => {
    const col = document.createElement("div");

    col.className = "col-lg-4 col-md-6 mb-4";

    col.innerHTML = `<div class="card product-card h-100">

        <div class="card-img-wrapper">

          <img
            src="${product.image}"
            class="card-img-top"
            alt="${product.name}"
          >

          <div class="overlay"></div>

        </div>


        <div class="card-body text-center">

          <h5 class="product-title">
            ${product.name}
          </h5>

          ${
            product.price
              ? `<p class="product-price">$${product.price}</p>`
              : `<p class="product-description">${product.description}</p>`
          }

          <button
            class="btn btn-success add-btn"
            data-id="${product.id}"
          >
            Add To Cart
          </button>

        </div>

      </div>`;

    productList.appendChild(col);
  });
}
// صفحه خرید ما

const shopBox = document.getElementById("shop-products");

if (shopBox) {
  function renderProducts(list) {
    shopBox.innerHTML = "";

    list.forEach((product) => {
      const col = document.createElement("div");

      col.className = "col-lg-3 col-md-6 mb-4";

      col.innerHTML = `<div class="card h-100 shadow">

          <img src="${product.image}" class="card-img-top">

          <div class="card-body text-center">

            <h5>${product.name}</h5>

            ${
              product.price
                ? `<p>$${product.price}</p>`
                : `<p>${product.description}</p>`
            }

            <button
              class="btn btn-dark add-btn"
              data-id="${product.id}"
            >
              Add To Cart
            </button>

          </div>

        </div>`;

      shopBox.appendChild(col);
    });
  }

  // اول این باید اجرا شود تا از ارور جلو گیری کنیم
  renderProducts(cartproducts);

  // نظر به بخش که کاربر وارد میشود کارت ها فیلتر میشود

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const category = this.dataset.cat;

      if (category === "all") {
        renderProducts(cartproducts);
      } else {
        const filtered = cartproducts.filter(
          (product) => product.category === category,
        );

        renderProducts(filtered);
      }
    });
  });
}
// قسمت اجرا شدن دکمه اضافه کردن به لیست خرید

document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("add-btn")) return;

  const id = Number(e.target.dataset.id);

  const product = allProducts.find((product) => product.id === id);

  if (!product) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const exist = cart.find((item) => item.id === id);

  if (exist) {
    exist.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  renderCart();
});
//قسمت نشان دادن کارت ها یا اجرا او

const cartBox = document.getElementById("cart-items");

function renderCart() {
  if (!cartBox) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartBox.innerHTML = "";

  let total = 0;

  // اگر کدام کارتی خالی  بود این متن را برای کابر نشان بده
  if (cart.length === 0) {
    cartBox.innerHTML = `<div class="alert alert-dark text-center">

        Your Cart Is Empty

      </div>`;

    const totalBox = document.getElementById("cart-total");

    if (totalBox) {
      totalBox.textContent = "";
    }

    return;
  }

  // بخش کارت ها
  cart.forEach((item) => {
    total += (item.price || 0) * item.quantity;

    const div = document.createElement("div");

    div.className = "card p-3 mb-3 shadow";

    div.innerHTML = `<div class="row align-items-center">

        <div class="col-md-2">

          <img
            src="${item.image}"
            class="img-fluid rounded"
          >

        </div>


        <div class="col-md-7">

          <h5>${item.name}</h5>

          ${item.price ? `<p>$${item.price}</p>` : `<p>${item.description}</p>`}

          <p>
            Quantity:
            ${item.quantity}
          </p>

        </div>


        <div class="col-md-3 text-end">

          <button
            class="btn btn-danger remove-btn"
            data-id="${item.id}"
          >
            Remove
          </button>

        </div>

      </div>`;

    cartBox.appendChild(div);
  });
  // مجموعه را بدست اورد
  const totalBox = document.getElementById("cart-total");

  if (totalBox) {
    totalBox.innerHTML = `Total:
      <span class="text-success">
        $${total}
      </span>`;
  }
}
// اگر مشتری خواست از لیست انتخاب شده ها حذف کند
document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("remove-btn")) return;

  const id = Number(e.target.dataset.id);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.filter((item) => item.id !== id);

  localStorage.setItem("cart", JSON.stringify(cart));

  renderCart();
});

//  اول اجرا شود
renderCart();
