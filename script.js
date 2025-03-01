
document.addEventListener("DOMContentLoaded",function(){

  let allFoodList =[
    {
      "id": 1,
      "name": "Cheeseburger",
      "price": 5.99,
      "imgSrc": "https://unsplash.com/photos/double-patty-cheeseburger-jh5XyK4Rr3Y"
    },
    {
      "id": 2,
      "name": "Pizza",
      "price": 8.99,
      "imgSrc": "https://unsplash.com/photos/pizza-with-berries-MQUqbmszGGM"
    },
    {
      "id": 3,
      "name": "Tacos",
      "price": 3.99,
      "imgSrc": "https://unsplash.com/photos/two-tortillas-with-vegetables-and-sauce-on-a-table-VMrIQ9hDaZk"
    },
    {
      "id": 4,
      "name": "Sushi",
      "price": 11.99,
      "imgSrc": "https://unsplash.com/photos/sushi-on-black-ceramic-plate-iOHJKJqO6E0"
    },
    {
      "id": 5,
      "name": "Pasta",
      "price": 9.99,
      "imgSrc": "https://unsplash.com/photos/closeup-photo-of-spaghetti-pasta-with-a-tomato-meat-sauce-shot-with-selective-focus-Gi4njnD6isM"
    },
    {
      "id": 6,
      "name": "Fried Chicken",
      "price": 7.99,
      "imgSrc": "https://unsplash.com/photos/food-lot-on-a-green-leaf-plate-nwmZhwOSVnM"
    },
    {
      "id": 7,
      "name": "Grilled Cheese Sandwich",
      "price": 4.99,
      "imgSrc": "https://unsplash.com/photos/bread-with-cheese-fillings-on-white-ceramic-plate-ZB8NK8cB4EE"
    },
    {
      "id": 8,
      "name": "Steak",
      "price": 15.99,
      "imgSrc": "https://unsplash.com/photos/grilled-meat-on-white-ceramic-plate-pe9dvM1rQkM"
    },
    {
      "id": 9,
      "name": "Caesar Salad",
      "price": 6.99,
      "imgSrc": "https://unsplash.com/photos/meat-with-lettuce-on-white-ceramic-plate-63mHpYEyjCA"
    },
    {
      "id": 10,
      "name": "Fish and Chips",
      "price": 8.49,
      "imgSrc": "https://unsplash.com/photos/fried-chicken-with-fries-and-sauce-Pf-bZQpCaMI"
    },
    {
      "id": 11,
      "name": "Ramen",
      "price": 9.49,
      "imgSrc": "https://unsplash.com/photos/a-bowl-of-ramen-with-chopsticks-and-a-glass-of-beer-mE6kjov4rTg"
    },
    {
      "id": 12,
      "name": "Burrito",
      "price": 7.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?burrito"
    },
    {
      "id": 13,
      "name": "Pho",
      "price": 8.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pho"
    },
    {
      "id": 14,
      "name": "Pad Thai",
      "price": 9.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pad_thai"
    },
    {
      "id": 15,
      "name": "Gyro",
      "price": 6.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?gyro"
    },
    {
      "id": 16,
      "name": "Ice Cream",
      "price": 3.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?ice_cream"
    },
    {
      "id": 17,
      "name": "Smoothie",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?smoothie"
    },
    {
      "id": "18",
      "name": "Apple Pie",
      "price": 4.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?apple_pie"
    },
    {
      "id": 19,
      "name": "Chocolate Cake",
      "price": 5.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?chocolate_cake"
    },
    {
      "id": 20,
      "name": "Pancakes",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pancakes"
    },
    {
      "id": 21,
      "name": "Cupcake",
      "price": 2.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?cupcake"
    },
    {
      "id": 22,
      "name": "Crepes",
      "price": 5.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?crepes"
    },
    {
      "id": 23,
      "name": "Club Sandwich",
      "price": 6.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?club_sandwich"
    },
    {
      "id": 24,
      "name": "Falafel",
      "price": 5.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?falafel"
    },
    {
      "id": 25,
      "name": "Curry",
      "price": 9.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?curry"
    }
  ];

 
  function getMenu(foodList){
    let cardSection = document.getElementsByClassName("card-section")[0];
    cardSection.innerHTML="";
    foodList.forEach((item,_index)=>{

      let card= document.createElement("div");
      card.classList.add("card");
      card.innerHTML=`
          <div class="card-img">
            <img src=${item.imgSrc} alt="food-phot0">
          </div>
          <div class="card-content">
            <div class="dish-info">
              <p class="dish-name">${item.name}</p>
              <p class="dish-price">${item.price}</p>
            </div>
            
            <img  src="./assets/add-order-logo.png" alt="add-dish-logo">
          </div>
                
      `
      cardSection.appendChild(card);
    });
   
  }


  
  function TakeOrder(foodList) {
    return new Promise((resolve, reject) => {
      let arr = [];
      for (let count = 0; count < 3; count++) {
        let x = Math.floor(Math.random() * foodList.length);
        arr.push(foodList[x]);
      }
      
      setTimeout(() => {
        console.log("Order Items:", arr);
        resolve({ order_status: true, paid: false });
      }, 2500);
    })
    .then(orderStatus => orderPrep(orderStatus))
    .then(orderStatus => payOrder(orderStatus))
    .then(orderStatus => {
      if (orderStatus.paid) {
        thankyouFnc();
      }
    })
    .catch(error => {
      console.log("Error in order process:", error);
    });
  }
  
  function orderPrep(orderStatus) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Order Preparation Status:", orderStatus);
        resolve({ ...orderStatus, order_status: true });
      }, 1500);
    });
  }
  
  function payOrder(orderStatus) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Payment Status:", { ...orderStatus, paid: true });
        resolve({ ...orderStatus, paid: true });
      }, 1000);
    });
  }
  
  function thankyouFnc() {
    alert("Thank you for eating with us today!");
  }
  


  getMenu(allFoodList);

  TakeOrder(allFoodList);  

  document.getElementById("search-ip").addEventListener("input",function(){
    let ip =document.getElementById("search-ip").value.toLowerCase();
    
    let foodList = allFoodList;
    let newfoodList = foodList.filter((food)=>{
      return food.name.toLowerCase().includes(ip);
    });

    getMenu(newfoodList);

  });





});

