
document.addEventListener("DOMContentLoaded", () => {
  // Countdown Timer
  const targetDate = new Date("2025-01-31T23:59:59").getTime();

  function updateCountdownTimer() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft >= 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      const daysElement = document.getElementById("days");
      const hoursElement = document.getElementById("hours");
      const minutesElement = document.getElementById("minutes");
      const secondsElement = document.getElementById("seconds");

      if (daysElement) daysElement.textContent = days.toString().padStart(2, "0");
      if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, "0");
      if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, "0");
      if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, "0");
    } else {
      clearInterval(countdownInterval);
      const countdownElement = document.getElementById("countdown");
      if (countdownElement) {
        countdownElement.innerHTML = "<p class='text-red-500'>Expired</p>";
      }
    }
  }

  const countdownInterval = setInterval(updateCountdownTimer, 1000);

  // Language Dropdown
  const dropdown = document.querySelector(".language-dropdown");
  if (dropdown) {
    const button = dropdown.querySelector(".dropdown-button");
    if (button) {
      button.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("active");
      });

      // Close dropdown if clicked outside
      document.addEventListener("click", () => {
        dropdown.classList.remove("active");
      });
    }
  }

  // Categories List Click Event
  const categoryItems = document.querySelectorAll(".categories-list li");
  categoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      categoryItems.forEach((li) => li.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // Order Icon Click Event
  const ordersIcon = document.getElementById("orders-icon");
  const webListView = document.getElementById("webListView");
  const footer = document.querySelector("footer");
  const header = document.querySelector(".header");

  if (ordersIcon && webListView) {
    ordersIcon.addEventListener("click", function (e) {
      e.preventDefault(); 

      // Hide all sections except the Web List View, Navbar, and Footer
      document.querySelectorAll("body > *:not(#webListView):not(.header):not(footer)").forEach((el) => {
        el.style.display = "none";
      });

      // Ensure Navbar and Footer are visible
      if (header) header.style.display = ""; 
      if (footer) footer.style.display = ""; 

      // Show the Web List View section
      webListView.classList.remove("hidden"); 
      webListView.style.display = "block"; 
    });
  }

  // Restore View for Other Icons
  const otherIcons = document.querySelectorAll(".navigation a:not(#orders-icon)");
  otherIcons.forEach((icon) => {
    icon.addEventListener("click", function (e) {
      e.preventDefault(); 

      // Restore all hidden sections
      document.querySelectorAll("body > *").forEach((el) => {
        el.style.display = ""; 
      });

      // Hide the Web List View section
      if (webListView) {
        webListView.classList.add("hidden"); 
        webListView.style.display = "none"; 
      }
    });
  });

  // Grid and List View Toggle
  const gridViewBtn = document.getElementById("gridViewBtn");
  const listViewBtn = document.getElementById("listViewBtn");
  const webGridView = document.getElementById("webGridView");

  if (gridViewBtn && listViewBtn && webGridView && webListView) {
    // Show Grid View
    gridViewBtn.addEventListener("click", () => {
      webListView.classList.add("hidden");
      webGridView.classList.remove("hidden");
    });

    // Show List View
    listViewBtn.addEventListener("click", () => {
      webGridView.classList.add("hidden");
      webListView.classList.remove("hidden");
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const messageIcon = document.getElementById("message-icon");
  const contactForm = document.getElementById("contactForm");
  const footer = document.querySelector("footer");
  const header = document.querySelector(".header");

  if (messageIcon && contactForm) {
    messageIcon.addEventListener("click", (e) => {
      e.preventDefault();

      // Hide all other sections
      document.querySelectorAll("body > *:not(header):not(footer):not(#contactForm)").forEach((el) => {
        el.style.display = "none";
      });

      // Show navbar, footer, and contact form
      if (header) header.style.display = ""; 
      if (footer) footer.style.display = ""; 
     // Remove the hidden class from the contact form
      contactForm.style.display = "block"; 
    });
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "Iphone 12 64GB",
      image: "images/1iphone12viewdetailsimg.svg",
      price: "$799.00",
      specifications: {
        Brand: "Apple",
        Model: "iphone 12",
        "Sensor Type": "Dual 12 Mp sensors",
        Resolution: "2532x1170 pixels",
        LCDScreen: "Oled display",
        VideoResolution: "4K",
        connectivity: "5G",
        Features: "Waterproof, High Durability",

      },
    },
    {
      id: 2,
      name: "Xiaomi  MI 9 64 GB ",
      image: "images/3samsung.svg",
      price: "$499.00",
      specifications: {
        Brand: "Xiaomi",
        Model: "Mi 9",
        "Sensor Type": "Triple Camera setup",
        Resolution: "2340 x 1080 pixels",
        LCDScreen: "AMOLED display",
        VideoResolution: "4K",
        connectivity: "Dual 4G LTE",
        Features: "Fast charging, High Durability",
      },
    },
    {
      id: 3,
      name: "Xiaomi pad 5 128 GB",
      image: "images/2ipad 12.svg",
      price: "$399.00",
      specifications: {
        Brand: "Xiaomi",
        Model: "pad 5",
        "Sensor Type": "Single Rear Camera (13 MP)",
        Resolution: "2560 x 1600 pixels ",
        LCDScreen: "IPS LCD with 120 Hz refresh rate",
        VideoResolution: "4K at 30 fps",
        connectivity: "Dual-band Wi-Fi, Bluetooth 5.0",
        Features: "33W fast charging, Stylus and keyboard support",
      },
    },
    {
      id: 4,
      name: "Xiaomi Mi Notebook Pro 12",
      image: "images/7laptoppro.svg",
      price: "$1,199",
      specifications: {
        Brand: "Xiaomi",
        Model: "Mi Notebook Pro",
        "Sensor Type": " Fingerprint sensor ",
        Resolution: "2560 x 1600 pixels",
        LCDScreen: "IPS LCD with 90 Hz refresh rate",
        VideoResolution: "Supports external displays at 4K",
        connectivity: "Bluetooth 5.1,USB-C, USB-A, HDMI, and a headphone jack",
        Features: "Long battery life, High durability",
      },
    },

    {
      id: 5,
      name: " Amazfit GTS 2",
      image: "images/8smartwatch2.svg",
      price: "$179.99",
      specifications: {
        Brand: "Amazfit",
        Model: "GTS 2",
        "Sensor Type": "BioTracker 2 PPG",
        Resolution: " 348 x 442 pixels",
        LCDScreen: "AMOLED",
        connectivity: "Bluetooth 5.0,GPS + GLONASS",
        Features: "Comprehensive health tracking,Music storage and playback,Built-in alex voice Assistant",
        Description:"hello"
      },
    },
    {
      id: 6,
      name: " Xiaomi Mi Bluetooth Headphones",
      image: "images/9sonyheadphones.svg",
      price: "$14.99",
      specifications: {
        Brand: "Xiaomi",
        Model: "Mi Bluetooth Headphones",
        "Sensor Type": "Touch-sensitive controls for music and calls",
        Resolution: "2560 x 1600 pixels ",
        LCDScreen: "IPS LCD with 120 Hz refresh rate",
        VideoResolution: "4K at 30 fps",
        connectivity: "Aux support for wired connections, Bluetooth 5.0",
        Features: "Long battery life,Lightweight and ergonomic design for comfort,High-fidelity sound with noise isolation,Built-in microphone for clear calls,Adjustable headband and cushioned ear cups",
      },
    },
  ];

  
  // References to DOM elements
  const productDetailsSection = document.getElementById("productDetails");
  const backToProductsButton = document.getElementById("backToProducts");
  const productImage = document.getElementById("productImage");
  const productName = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");
  const productSpecs = document.getElementById("productSpecs");
  const navbar = document.querySelector(".header");
  const footer = document.querySelector("footer");
  const productListView = document.getElementById("webListView"); 

  // Exclude productDetails and productListView from main sections to toggle visibility correctly
  const mainSections = document.querySelectorAll("body > *:not(.header):not(footer):not(#productDetails):not(#webListView)");

  // Handle "View Details" Button Click
  document.querySelectorAll(".viewDetails").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.dataset.productId);
      const product = products.find((p) => p.id === productId);

      if (product) {
        // Populate Product Details
        productImage.src = product.image;
        productName.textContent = product.name;
        productPrice.textContent = product.price;

        // Clear and Populate Specifications
        productSpecs.innerHTML = "";
        for (const [key, value] of Object.entries(product.specifications)) {
          const specItem = document.createElement("p");
          specItem.textContent = `${key}: ${value}`;
          specItem.classList.add("text-sm", "text-gray-600");
          productSpecs.appendChild(specItem);
        }

        // Hide all sections except Navbar, Footer, and Product Details
        mainSections.forEach((section) => {
          section.style.display = "none";
        });
        productListView.style.display = "none"; 
        productDetailsSection.style.display = "block";
        navbar.style.display = ""; 
        footer.style.display = ""; 
      } else {
        console.error(`Product with ID ${productId} not found.`);
      }
    });
  });

  // Handle "Back to Products" Button Click
  backToProductsButton.addEventListener("click", () => {
    // Show product list view
    productListView.style.display = ""; 
    productDetailsSection.style.display = "none"; 

    // Hide any other unwanted sections explicitly
    const contactForm = document.getElementById("contactForm");
    const profileSection = document.getElementById("profileSection");

    if (contactForm) contactForm.style.display = "none";
    if (profileSection) profileSection.style.display = "none";

    // Ensure other sections are hidden
    mainSections.forEach((section) => {
      section.style.display = "none"; 
    });
  });
});









document.addEventListener("DOMContentLoaded", () => {
  // References to buttons and the product container
  const listViewBtn = document.getElementById("listViewBtn");
  const gridViewBtn = document.getElementById("gridViewBtn");
  const productsContainer = document.getElementById("productsContainer");

  if (!listViewBtn || !gridViewBtn || !productsContainer) {
    console.error("One or more required elements (listViewBtn, gridViewBtn, productsContainer) are missing.");
    return;
  }

  // Function to switch to Grid View
  const switchToGridView = () => {
    productsContainer.classList.remove("flex", "flex-col", "gap-4");
    productsContainer.classList.add("grid", "grid-cols-2", "md:grid-cols-3", "gap-6");

    gridViewBtn.classList.add("bg-blue-500", "text-white");
    gridViewBtn.classList.remove("bg-gray-200");
    listViewBtn.classList.add("bg-gray-200");
    listViewBtn.classList.remove("bg-blue-500", "text-white");
  };

  // Function to switch to List View
  const switchToListView = () => {
    productsContainer.classList.remove("grid", "grid-cols-2", "md:grid-cols-3", "gap-6");
    productsContainer.classList.add("flex", "flex-col", "gap-4");

    listViewBtn.classList.add("bg-blue-500", "text-white");
    listViewBtn.classList.remove("bg-gray-200");
    gridViewBtn.classList.add("bg-gray-200");
    gridViewBtn.classList.remove("bg-blue-500", "text-white");
  };

  // Attach event listeners to the buttons
  gridViewBtn.addEventListener("click", switchToGridView);
  listViewBtn.addEventListener("click", switchToListView);

  // Default: Start in List View
  switchToListView();
});



document.addEventListener("DOMContentLoaded", () => {
  const gridViewBtn = document.getElementById("gridViewBtn");
  const listViewBtn = document.getElementById("listViewBtn");
  const webListView = document.getElementById("webListView");
  const productsContainer = document.querySelector(".space-y-4"); 
  const navbar = document.querySelector("header");
  const footer = document.querySelector("footer");

  // Ensure all necessary elements are present
  if (!gridViewBtn || !listViewBtn || !webListView || !productsContainer) {
    console.error("Required elements (buttons or product container) are missing.");
    return;
  }

  // Function to switch to Grid View
  const switchToGridView = () => {
    webListView.classList.remove("hidden"); 
    productsContainer.classList.remove("space-y-4"); 
    productsContainer.classList.add("grid", "grid-cols-2", "sm:grid-cols-3", "lg:grid-cols-4", "gap-6"); 

    gridViewBtn.classList.add("bg-blue-500", "text-white");
    gridViewBtn.classList.remove("bg-gray-200");
    listViewBtn.classList.add("bg-gray-200");
    listViewBtn.classList.remove("bg-blue-500", "text-white");
  };

  // Function to switch to List View
  const switchToListView = () => {
    productsContainer.classList.remove("grid", "grid-cols-2", "sm:grid-cols-3", "lg:grid-cols-4", "gap-6"); 
    productsContainer.classList.add("space-y-4"); 

    listViewBtn.classList.add("bg-blue-500", "text-white");
    listViewBtn.classList.remove("bg-gray-200");
    gridViewBtn.classList.add("bg-gray-200");
    gridViewBtn.classList.remove("bg-blue-500", "text-white");
  };

  // Attach event listeners
  gridViewBtn.addEventListener("click", () => {
    switchToGridView();
  });

  listViewBtn.addEventListener("click", () => {
    switchToListView();
  });

  // Ensure the page starts in List View by default
  switchToListView();

  // Ensure navbar and footer are always visible
  if (navbar) navbar.style.display = "block";
  if (footer) footer.style.display = "block";
});


  // cart section
  document.addEventListener("DOMContentLoaded", () => {
    const products = [
      { id: 1, name: "Iphone 12 64GB", image: "images/1canon cmera.svg", price: 799.0 },
      { id: 2, name: "Xiaomi Mi 9 64 GB", image: "images/3samsung.svg", price: 449.0 },
      { id: 3, name: "Xiaomi Pad 5 128 GB", image: "images/2ipad 12.svg", price: 399.0 },
      { id: 4, name: "Xiaomi Mi Notebook Pro 12", image: "images/7laptoppro.svg", price: 1199},
      { id: 5, name: "Amazfit GTS 2", image: "images/8smartwatch2.svg", price: 179.99 },
      { id: 6, name: "Xiaomi Mi Bluetooth Headphones", image: "images/9sonyheadphones.svg", price:14.99},
    ];
  
    let cartItems = [];
    const cartItemsContainer = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartCount = document.getElementById("cartCount");
    const cartContent = document.getElementById("cartContent");
    const webListView = document.getElementById("webListView");
    const productDetails = document.getElementById("productDetails");
    const backToShopBtn = document.getElementById("backToShop");
    const backToProductsBtn = document.getElementById("backToProducts");
    const addToCartBtn = document.getElementById("addToCart");
    const cartIcon = document.getElementById("mycart-icon");
  
    let currentProduct = null;
  
    // Function to show specific sections
    const showOnlySection = (sectionToShow) => {
      document.querySelectorAll("body > *:not(.header):not(footer)").forEach((el) => {
        el.style.display = el === sectionToShow ? "block" : "none";
      });
    };
  
    // Function to update the cart UI
    const updateCartUI = () => {
      cartItemsContainer.innerHTML = "";
      let total = 0;
  
      if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = "<p class='text-gray-600'>Your cart is empty.</p>";
        cartTotal.textContent = "$0.00";
        cartCount.textContent = "0";
        return;
      }
  
      cartItems.forEach((item, index) => {
        total += item.price * item.quantity;
  
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item", "flex", "items-center", "justify-between", "p-2", "border-b");
        cartItem.innerHTML = `
          <div class="flex items-center">
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md">
            <div class="ml-4">
              <p class="font-bold">${item.name}</p>
              <p>$${item.price.toFixed(2)}</p>
              <div>
                <label for="quantity-${index}" class="text-sm">Quantity:</label>
                <select id="quantity-${index}" class="quantity-dropdown border rounded p-1">
                  ${[...Array(10).keys()]
                    .map((q) =>
                      q + 1 === item.quantity
                        ? `<option value="${q + 1}" selected>${q + 1}</option>`
                        : `<option value="${q + 1}">${q + 1}</option>`
                    )
                    .join("")}
                </select>
              </div>
            </div>
          </div>
          <button class="remove-item bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700" data-index="${index}">
            Remove
          </button>
        `;
        cartItemsContainer.appendChild(cartItem);
      });
  
      cartTotal.textContent = `$${total.toFixed(2)}`;
      cartCount.textContent = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
      document.querySelectorAll(".quantity-dropdown").forEach((dropdown) => {
        dropdown.addEventListener("change", (e) => {
          const index = parseInt(e.target.id.split("-")[1]);
          cartItems[index].quantity = parseInt(e.target.value);
          updateCartUI();
        });
      });
  
      document.querySelectorAll(".remove-item").forEach((button) => {
        button.addEventListener("click", () => {
          const index = parseInt(button.dataset.index);
          cartItems.splice(index, 1);
          updateCartUI();
        });
      });
    };
  




    
    // Add to cart button click (View Details)
    addToCartBtn.addEventListener("click", () => {
      if (currentProduct) {
        const existingItem = cartItems.find((item) => item.id === currentProduct.id);
  
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cartItems.push({ ...currentProduct, quantity: 1 });
        }
  
        updateCartUI();
        showOnlySection(cartContent); 
      }
    });
  
    // View Details button click
    document.querySelectorAll(".viewDetails").forEach((button) => {
      button.addEventListener("click", () => {
        const productId = parseInt(button.dataset.productId);
        currentProduct = products.find((product) => product.id === productId);
  
        if (currentProduct) {
          document.getElementById("productImage").src = currentProduct.image;
          document.getElementById("productName").textContent = currentProduct.name;
          document.getElementById("productPrice").textContent = `$${currentProduct.price.toFixed(2)}`;
  
          showOnlySection(productDetails);
        }
      });
    });
  
    // Back to Products button
    backToProductsBtn.addEventListener("click", () => {
      showOnlySection(webListView);
    });
  
    // Back to Shop button
    backToShopBtn.addEventListener("click", () => {
      showOnlySection(webListView);
    });
  
    // Cart icon click
    cartIcon.addEventListener("click", () => {
      updateCartUI();
      showOnlySection(cartContent);
    });
  
    // Initialize with Products view
    showOnlySection(webListView);
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const checkoutSection = document.getElementById("checkoutSection");
    const cartContent = document.getElementById("cartContent");
    const checkoutButton = document.querySelector(".bg-green-500"); 
    const backToCartButton = document.getElementById("backToCart");

    checkoutButton.addEventListener("click", () => {
        cartContent.style.display = "none";
        checkoutSection.style.display = "block";
    });

    backToCartButton.addEventListener("click", () => {
        checkoutSection.style.display = "none";
        cartContent.style.display = "block";
    });
});







document.addEventListener("DOMContentLoaded", () => {
  let cartItems = [];
  const cartContent = document.getElementById("cartContent");
  const checkoutSection = document.getElementById("checkoutSection");
  const checkoutButton = document.getElementById("checkoutButton");
  const backToCartButton = document.getElementById("backToCart");
  const subtotalAmount = document.getElementById("subtotalAmount");
  const discountAmount = document.getElementById("discountAmount");
  const totalAmount = document.getElementById("totalAmount");

  // Function to show only the specified section
  const showOnlySection = (sectionToShow) => {
    document.querySelectorAll("body > *:not(.header):not(footer)").forEach((el) => {
      el.style.display = el === sectionToShow ? "block" : "none";
    });
  };

  // Function to update the order summary in checkout
  const updateOrderSummary = () => {
    let subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let discount = subtotal * 0.05; // this code i wrote Applies 5% discount for demonstration
    let total = subtotal - discount;

    subtotalAmount.textContent = `$${subtotal.toFixed(2)}`;
    discountAmount.textContent = `-$${discount.toFixed(2)}`;
    totalAmount.textContent = `$${total.toFixed(2)}`;
  };

  // Show checkout page when clicking "Checkout" button
  if (checkoutButton) {
    checkoutButton.addEventListener("click", () => {
      updateOrderSummary();
      showOnlySection(checkoutSection);
    });
  }

  // Go back to cart when clicking "Back to Cart"
  if (backToCartButton) {
    backToCartButton.addEventListener("click", () => {
      showOnlySection(cartContent);
    });
  }

  // Simulate completing the order
  const completeOrderButton = document.getElementById("completeOrder");
  if (completeOrderButton) {
    completeOrderButton.addEventListener("click", () => {
      alert("Order placed successfully!");
      cartItems = []; 
      updateOrderSummary();
      showOnlySection(cartContent);
    });
  }

  // Ensure checkout page is hidden initially
  checkoutSection.style.display = "none";
});




// side filter javascript

function toggleSection(sectionId, arrowId) {
  const section = document.getElementById(sectionId);
  const arrow = document.getElementById(arrowId);
  
  if (section) {
    section.classList.toggle("hidden");
    arrow.classList.toggle("rotate-180");
  }
}

