// Fake Data ==============================================
const data = [
  {
    id: 1,
    name: "chair",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGzhKFCpNijXMgBBZID2CxJGK-Lvn9WuKdc0lkOSFX3HWKfx6",
    price: 299,
    cat: "chair",
  },
  {
    id: 2,
    name: "sofaset",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0w6jYPGlWYVR11R4RyeZ6OCMX9Omba7RAacDLJUb4s5u239tF",
    price: 299,
    cat: "sofaset",
  },
  {
    id: 3,
    name: "sofa",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQjnk8X7WPwM1TmKsghgVzLOJL8j3WfSM_MpvUDjp1APGaw_4nq",
    price: 2992,
    cat: "sofa",
  },
  {
    id: 4,
    name: "chair",
    img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0rOZsdj1OHXI4Tut4hAtY6Rv-G2Mz7Lf1dCouBt8N5vngWepu",
    price: 299,
    cat: "chair",
  },
  {
    id: 5,
    name: "chair with arm",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99qNqW02m02p35MKKQIJQ6jjBVcocmaEWBOX9h81XPnh9v1np",
    price: 299,
    cat: "chair with arm",
  },
  {
    id: 6,
    name: "sofa",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQjnk8X7WPwM1TmKsghgVzLOJL8j3WfSM_MpvUDjp1APGaw_4nq",
    price: 299, 
    cat: "sofa",
  },
  {
    id: 7,
    name: "chair",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGzhKFCpNijXMgBBZID2CxJGK-Lvn9WuKdc0lkOSFX3HWKfx6",
    
    price: 299,
    cat: "chair",
  },
  {
    id: 8,
    name: "sofaset",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0w6jYPGlWYVR11R4RyeZ6OCMX9Omba7RAacDLJUb4s5u239tF",
    price: 299,
    cat: "sofaset",
  },
  {
    id: 9,
    name: "sofa",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQjnk8X7WPwM1TmKsghgVzLOJL8j3WfSM_MpvUDjp1APGaw_4nq",
    price: 299,
    cat: "sofa",
  },
  
 
];

// Variables ==================================================
const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

// Display all products =======================================
const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
        <div class="product">
          <img
          src=${product.img}
          alt=""
          />
          <span class="name">${product.name}</span>
          <span class="priceText"> ${product.price} ر.س</span>
        </div>
    `
    )
    .join("");
};
displayProducts(data);

// Add event listener for search input ===========================
searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});

// Set Categories =================================================
const setCategories = () => {
  const allCats = data.map((item) => item.cat);
  const categories = [
    "All",
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];

  categoriesContainer.innerHTML = categories
    .map(
      (cat) =>
        `
      <span class="cat">${cat}</span>
    `
    )
    .join("");

  // Event listener for category ===================================
  categoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;

    selectedCat === "All"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
  });
};

// Search by price range =========================================
const setPrices = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = "$" + maxPrice;

    // Price range event listener =====================================
  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "$" + e.target.value;
    displayProducts(data.filter((item) => item.price <= e.target.value));
  });
};

setCategories();
setPrices();
