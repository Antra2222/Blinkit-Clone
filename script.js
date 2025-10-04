let currentSlide = 0;
let items = document.querySelectorAll(".container-box");
let arrowLeft = document.querySelector(".prev");
let arrowRight = document.querySelector(".next");

function reset() {
    items.forEach(item =>{
        item.style.display = "none";
    })
}

function startSlide() {
    reset();
    items[currentSlide].style.display = "flex";
    items[currentSlide].style.alignItems = "flex-start";
}

function slideLeft() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = items.length - 1; // Wrap around to the last slide
    }
    reset();
    items[currentSlide].style.display = "flex";
    items[currentSlide].style.alignItems = "flex-start";
}

function slideRight() {
    currentSlide++;
    if (currentSlide >= items.length) {
        currentSlide = 0; // Wrap around to the first slide
    }
    reset();
    items[currentSlide].style.display = "flex";
    items[currentSlide].style.alignItems = "flex-start";
}

arrowLeft.addEventListener("click", slideLeft);
arrowRight.addEventListener("click", slideRight);

startSlide();

// section 4
let currentSlide1 = 0;
let items1 = document.querySelectorAll(".container-box1");
let arrowLeft1 = document.querySelector(".prev1");
let arrowRight1 = document.querySelector(".next1");

function reset1() {
    items1.forEach(item =>{
        item.style.display = "none";
    })
}

function startSlide1() {
    reset1();
    items1[currentSlide1].style.display = "flex";
    items1[currentSlide1].style.alignItems = "flex-start";
}

function slideLeft1() {
    currentSlide1--;
    if (currentSlide1 < 0) {
        currentSlide1 = items1.length - 1; // Wrap around to the last slide
    }
    reset1();
    items1[currentSlide1].style.display = "flex";
    items1[currentSlide1].style.alignItems = "flex-start";
}

function slideRight1() {
    currentSlide1++;
    if (currentSlide1 >= items1.length) {
        currentSlide1 = 0; // Wrap around to the first slide
    }
    reset1();
    items1[currentSlide1].style.display = "flex";
    items1[currentSlide1].style.alignItems = "flex-start";
}

arrowLeft1.addEventListener("click", slideLeft1);
arrowRight1.addEventListener("click", slideRight1);

startSlide1();

//section 5
let currentSlide2 = 0;
let items2 = document.querySelectorAll(".container-box2");
let arrowLeft2 = document.querySelector(".prev2");
let arrowRight2 = document.querySelector(".next2");

function reset2() {
    items2.forEach(item =>{
        item.style.display = "none";
    })
}

function startSlide2() {
    reset2();
    items2[currentSlide2].style.display = "flex";
    items2[currentSlide2].style.alignItems = "flex-start";
}

function slideLeft2() {
    currentSlide2--;
    if (currentSlide2 < 0) {
        currentSlide2 = items2.length - 1; // Wrap around to the last slide
    }
    reset2();
    items2[currentSlide2].style.display = "flex";
    items2[currentSlide2].style.alignItems = "flex-start";
}

function slideRight2() {
    currentSlide2++;
    if (currentSlide2 >= items2.length) {
        currentSlide2 = 0; // Wrap around to the first slide
    }
    reset2();
    items2[currentSlide2].style.display = "flex";
    items2[currentSlide2].style.alignItems = "flex-start";
}

arrowLeft2.addEventListener("click", slideLeft2);
arrowRight2.addEventListener("click", slideRight2);

startSlide2();

//section 6
let currentSlide3 = 0;
let items3 = document.querySelectorAll(".container-box3");
let arrowLeft3 = document.querySelector(".prev3");
let arrowRight3 = document.querySelector(".next3");

function reset3() {
    items3.forEach(item =>{
        item.style.display = "none";
    })
}

function startSlide3() {
    reset3();
    items3[currentSlide3].style.display = "flex";
    items3[currentSlide3].style.alignItems = "flex-start";
}

function slideLeft3() {
    currentSlide3--;
    if (currentSlide3 < 0) {
        currentSlide3 = items3.length - 1; // Wrap around to the last slide
    }
    reset3();
    items3[currentSlide3].style.display = "flex";
    items3[currentSlide3].style.alignItems = "flex-start";
}

function slideRight3() {
    currentSlide3++;
    if (currentSlide3 >= items3.length) {
        currentSlide3 = 0; // Wrap around to the first slide
    }
    reset3();
    items3[currentSlide3].style.display = "flex";
    items3[currentSlide3].style.alignItems = "flex-start";
}

arrowLeft3.addEventListener("click", slideLeft3);
arrowRight3.addEventListener("click", slideRight3);

startSlide3();

//section 7
let currentSlide4 = 0;
let items4 = document.querySelectorAll(".container-box4");
let arrowLeft4 = document.querySelector(".prev4");
let arrowRight4 = document.querySelector(".next4");

function reset4() {
    items4.forEach(item =>{
        item.style.display = "none";
    })
}

function startSlide4() {
    reset4();
    items4[currentSlide4].style.display = "flex";
    items4[currentSlide4].style.alignItems = "flex-start";
}

function slideLeft4() {
    currentSlide4--;
    if (currentSlide4 < 0) {
        currentSlide4 = items4.length - 1; // Wrap around to the last slide
    }
    reset4();
    items4[currentSlide4].style.display = "flex";
    items4[currentSlide4].style.alignItems = "flex-start";
}

function slideRight4() {
    currentSlide4++;
    if (currentSlide4 >= items4.length) {
        currentSlide4 = 0; // Wrap around to the first slide
    }
    reset4();
    items4[currentSlide4].style.display = "flex";
    items4[currentSlide4].style.alignItems = "flex-start";
}

arrowLeft4.addEventListener("click", slideLeft4);
arrowRight4.addEventListener("click", slideRight4);

startSlide4();

//section 8
let currentSlide5 = 0;
let items5 = document.querySelectorAll(".container-box5");
let arrowLeft5 = document.querySelector(".prev5");
let arrowRight5 = document.querySelector(".next5");

function reset5() {
    items5.forEach(item =>{
        item.style.display = "none";
    })
}

function startSlide5() {
    reset5();
    items5[currentSlide5].style.display = "flex";
    items5[currentSlide5].style.alignItems = "flex-start";
}

function slideLeft5() {
    currentSlide5--;
    if (currentSlide5 < 0) {
        currentSlide5 = items5.length - 1; // Wrap around to the last slide
    }
    reset5();
    items5[currentSlide5].style.display = "flex";
    items5[currentSlide5].style.alignItems = "flex-start";
}

function slideRight5() {
    currentSlide5++;
    if (currentSlide5 >= items5.length) {
        currentSlide5 = 0; // Wrap around to the first slide
    }
    reset5();
    items5[currentSlide5].style.display = "flex";
    items5[currentSlide5].style.alignItems = "flex-start";
}

arrowLeft5.addEventListener("click", slideLeft5);
arrowRight5.addEventListener("click", slideRight5);

startSlide5();

//section 8
let currentSlide6 = 0;
let items6 = document.querySelectorAll(".container-box6");
let arrowLeft6 = document.querySelector(".prev6");
let arrowRight6 = document.querySelector(".next6");

function reset6() {
    items6.forEach(item =>{
        item.style.display = "none";
    })
}

function startSlide6() {
    reset6();
    items6[currentSlide6].style.display = "flex";
    items6[currentSlide6].style.alignItems = "flex-start";
}

function slideLeft6() {
    currentSlide6--;
    if (currentSlide6 < 0) {
        currentSlide6 = items6.length - 1; // Wrap around to the last slide
    }
    reset6();
    items6[currentSlide6].style.display = "flex";
    items6[currentSlide6].style.alignItems = "flex-start";
}

function slideRight6() {
    currentSlide6++;
    if (currentSlide6 >= items6.length) {
        currentSlide6 = 0; // Wrap around to the first slide
    }
    reset6();
    items6[currentSlide6].style.display = "flex";
    items6[currentSlide6].style.alignItems = "flex-start";
}

arrowLeft6.addEventListener("click", slideLeft6);
arrowRight6.addEventListener("click", slideRight6);

startSlide6();

// Cart logic

function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = { productName, price };

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.productName === productName);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1; // Increase quantity if already in cart
    } else {
        product.quantity = 1; // Add new product to cart with quantity 1
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart icon and item count
    updateCartIcon();
}

function updateCartIcon() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.quantity * item.price;
    });

    document.getElementById('itemAndPrice').innerText = `${totalItems} items  ₹${totalPrice}`;
}

updateCartIcon();




