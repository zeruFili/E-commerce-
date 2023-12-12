var imageValues = {
    "images/shoe_1.jpg": {
      initialDoliValue: 110.00,
      selectedQuantity: 0
    },
    "images/shoe_2.jpg": {
      initialDoliValue: 116.00,
      selectedQuantity: 0
    },
    "images/shoe_3.jpg": {
      initialDoliValue: 120.00,
      selectedQuantity: 0
    },
    "images/shoe_4.jpg": {
      initialDoliValue: 130.00,
      selectedQuantity: 0
    }
    // ... add values for other images
  };
  
  function getCurrentImageUrl() {
    return document.getElementById("main_pic").style.backgroundImage.split('"')[1];
  }
  
  // Update price and quantity based on current image
  function updatePriceQuantity() {
    var currentImage = getCurrentImageUrl();
    var doliValue = imageValues[currentImage].initialDoliValue;
    var selectedQuantity = imageValues[currentImage].selectedQuantity;
  
    var totalPrice = doliValue * selectedQuantity; // Calculate the total price
  
    document.getElementById("dollar").textContent = "$" + totalPrice.toFixed(2);
    document.getElementById("no").textContent = selectedQuantity.toString();
  }
  
  // Increment quantity
  document.getElementById("inc").addEventListener("click", function() {
    var currentImage = getCurrentImageUrl();
    imageValues[currentImage].selectedQuantity++;
  
    updatePriceQuantity();
  });
  
  // Decrement quantity
  document.getElementById("dec").addEventListener("click", function() {
    var currentImage = getCurrentImageUrl();
    var selectedQuantity = imageValues[currentImage].selectedQuantity;
  
    if (selectedQuantity > 0) {
      imageValues[currentImage].selectedQuantity--;
    }
  
    updatePriceQuantity();
  });
  
  // Update image values and reset quantity on image change
  document.querySelector("#bg").addEventListener("click", function() {
    const imageUrl = this.style.backgroundImage.split('"')[1];
    document.getElementById("main_pic").style.backgroundImage = `url('images/shoe_2.jpg')`;
    imageValues[imageUrl].selectedQuantity = 0;
    updatePriceQuantity();
  });
  
  document.querySelector("#agg").addEventListener("click", function() {
    const imageUrl = this.style.backgroundImage.split('"')[1];
    document.getElementById("main_pic").style.backgroundImage = `url('images/shoe_1.jpg')`;
    imageValues[imageUrl].selectedQuantity = 0;
    updatePriceQuantity();
  });
  
  document.querySelector("#c").addEventListener("click", function() {
    const imageUrl = this.style.backgroundImage.split('"')[1];
    document.getElementById("main_pic").style.backgroundImage = `url('images/shoe_3.jpg')`;
    imageValues[imageUrl].selectedQuantity = 0;
    updatePriceQuantity();
  });
  
  document.querySelector("#d").addEventListener("click", function() {
    const imageUrl = this.style.backgroundImage.split('"')[1];
    document.getElementById("main_pic").style.backgroundImage = `url('images/shoe_4.jpg')`;
    imageValues[imageUrl].selectedQuantity = 0;
    updatePriceQuantity();
  });
