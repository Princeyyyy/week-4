/* Function to get the Order */
function getSize() {
    var size = document.getElementById("pizzaSize").value;
    return parseInt(size);
  }
  
  function getCrust() {
    var crust = document.getElementById("pizzaCrust").value;
    return parseInt(crust);
  }
  
  function getTopping() {
    var topping = document.getElementById("pizzaTopping").value;
    return parseInt(topping);
  }
  
  function getCheese() {
    var cheese = document.getElementById("pizzaCheese").value;
    return parseInt(cheese);
  }
  
  function getQuantity() {
    var number = document.getElementById("quantity").value;
    return parseInt(number);
  }
  
  /* Calculate the total amount */
  function totalAmount() {
    var totals = (getSize() + getCrust() + getTopping() + getCheese()) * getQuantity();
    alert(
      "You have Ordered a total of " + getQuantity("") + " pizzas amounting to " + " Ksh " + totals + ". Thank you for ordering from PizzaCity. Welcome again."
      );

      /* Get the location of the customer */
      var location = prompt("If you want your pizza to be delivered to you please enter your location and if not cancel.");
      if (location !== "") {
        alert("Your order will be delivered to " + location + " shortly. Delivery fee is 100/= and incase you didn't want it delivered please come for your order.");
      }
    };
