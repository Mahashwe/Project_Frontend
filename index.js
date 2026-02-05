function toggleHeart(heart) {
    if(heart.src.includes('heart.png')) {
        heart.src = 'images/filled.png';
    } else {
        heart.src = 'images/heart.png';
    }
}

let cart = ""
function add_to_cart(event) {
    let item = event.target.closest(".card").querySelector("h3").textContent; 
    alert(item + " is added to your cart!"); 
    cart += item + "\n";
    console.log(cart);
}

function openCart() {
    document.getElementById("cartOverlay").classList.add("active");
  }

function closeCart() {
    document.getElementById("cartOverlay").classList.remove("active");
  }

function itemsInCart() {
    let final = cart.split("\n").filter(item => item.trim() !== "");
    console.log("this is final", final);
    
    let cartItemsList = document.getElementById("cartItems");
    let noItemsMsg = document.getElementById("items");
    
    if (final.length === 0) {
        cartItemsList.innerHTML = "";
        noItemsMsg.style.display = "block";
        noItemsMsg.innerText = "No items yet";
    } else {
        noItemsMsg.style.display = "none";
        cartItemsList.innerHTML = "";
        final.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            cartItemsList.appendChild(li);
        });
    }
}

function clearCart(){
    cart = "";
    document.getElementById("cartItems").innerHTML = "";
    document.getElementById("items").style.display = "block";
    document.getElementById("items").innerText = "No items yet";
}

let reservations = [];

function timeToMinutes(time) {
  const [h, m] = time.split(":");
  return Number(h) * 60 + Number(m);
}

function slot(){
    const a = document.getElementById("name").value;
    const b = document.getElementById("time").value;

    const newMinutes = timeToMinutes(b);
    let alreadyBooked = false;

    for (let i = 0; i < reservations.length; i++) {
    const oldMinutes = timeToMinutes(reservations[i].time);

    if (newMinutes >= oldMinutes && newMinutes < oldMinutes + 60) {
      alreadyBooked = true;
      break;
    }
  }

    if (alreadyBooked) {
        alert("This slot is already booked. Please choose another slot.");
    } else {
        reservations.push({name: a, time: b});
        alert("Reservation confirmed for " + a + " at " + b);
        console.log(reservations);
    }
}