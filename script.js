let products = {
    data: [
      {
        productName: "white-t-shirt",
        category: "Topwear",
        price: "30",
        image: "./images/WHITE-T-SHIRT.png",
      },
      {
        productName: "khaki-short-pent",
        category: "Bottomwear",
        price: "49",
        image: "./images/Bottom-wear.png",
      },
      {
        productName: "sporty-smart-watch",
        category: "Watch",
        price: "99",
        image: "./images/smart-watch.png",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "./images/knitted-image.png",
      },
      {
        productName: "Black leather jacket",
        category: "Jacket",
        price: "129",
        image: "./images/black-leather_jacket.png",
      },
      {
        productName: "Stylish Pink Trouser",
        category: "Bottomwear",
        price: "78",
        image: "./images/stylish-pink-trouser.png",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "178",
        image: "./images/brown-jacket.png",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "48",
        image: "./images/comfy_gray_pents.png",
      },
    ],
  };
  
  for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide"); 
  
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
  
    let container = document.createElement("div");
    container.classList.add("container");
  
    let name = document.createElement("h3");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
  
    let price = document.createElement("h4");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }
  
  document.querySelectorAll(".button-value").forEach((button) => {
    button.addEventListener("click", () => {
      let value = button.getAttribute("data-category");
      filterProduct(value);
    });
  });

  document.getElementById("search").addEventListener("click", ()=>{

    let searchInput = document.getElementById("search-input").value;

    let elements = document.querySelectorAll(".product-name")

    let cards = document.querySelectorAll(".card")

    elements.forEach((element,index)=>{
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide")
        } else {
            cards[index].classList.add("hide")
        }
    })
  })
  
  // Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
  