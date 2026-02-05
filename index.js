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